package handler

import (
	"github.com/artalkjs/artalk/v2/internal/core"
	"github.com/artalkjs/artalk/v2/internal/i18n"
	"github.com/artalkjs/artalk/v2/server/common"
	"github.com/gofiber/fiber/v2"
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
		id, _ := c.ParamsInt("id")

		user := app.Dao().FindUserByID(uint(id))
		if user.IsEmpty() {
			return common.RespError(c, 404, i18n.T("{{name}} not found", Map{"name": i18n.T("User")}))
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