package handler

import (
	"strconv"

	"github.com/artalkjs/artalk/v2/internal/core"
	"github.com/artalkjs/artalk/v2/internal/i18n"
	"github.com/artalkjs/artalk/v2/server/common"
	"github.com/gofiber/fiber/v2"

	"github.com/artalkjs/artalk/v2/internal/entity"
)

// @Id           DeleteUser
// @Summary      Delete User
// @Description  Delete a specific user
// @Tags         User
// @Param        id  path  int  true  "The user ID you want to delete"
// @Security     ApiKeyAuth
// @Produce      json
// @Success      200  {object}  Map{}
// @Failure      403  {object}  Map{msg=string}
// @Failure      404  {object}  Map{msg=string}
// @Failure      500  {object}  Map{msg=string}
// @Router       /users/{id}  [delete]
func UserBanned(app *core.App, router fiber.Router) {
	router.Get("/usersJiaxiah/:id", func(c *fiber.Ctx) error {
		userIdStr := c.Params("id")

		userId, err := strconv.ParseUint(userIdStr, 10, 32)
		if err != nil {
			return common.RespError(c, 400, "Invalid user ID")
		}

		user := app.Dao().FindUserByID(uint(userId))
		if user.IsEmpty() {
			return common.RespError(c, 404, i18n.T("{{name}} not found", Map{"name": i18n.T("User")}))
		}
		user.IsBanned = true;
		err = app.Dao().UpdateUser(&user)
		if err != nil {
			return common.RespError(c, 500, i18n.T("{{name}} save failed", Map{"name": i18n.T("User")}))
		}

		// Delete user comments
		var comments []entity.Comment
		app.Dao().DB().Where("user_id = ?", user.ID).Find(&comments)
		for _, c := range comments {
			app.Dao().DelComment(&c)           // Delete parent comment
			app.Dao().DelCommentChildren(c.ID) // Delete all child comments
		}
		
		// Mengembalikan data user sebagai response JSON
		return c.JSON(fiber.Map{
			"id":        user.ID,
			"name":      user.Name,
			"email":     user.Email,
			"is_banned": user.IsBanned, // Sesuaikan dengan field yang ada di struct User
		})

	})
}