import * as Utils from '../../lib/utils'
import type Render from '../render'

/**
 * 评论头像界面
 */
export default function renderAvatar(r: Render) {
  
  /*const $avatar = r.$el.querySelector<HTMLElement>('.atk-avatar')!
  const $avatarImg = Utils.createElement<HTMLImageElement>('<img />')

  const avatarURLBuilder = r.opts.avatarURLBuilder
  $avatarImg.src = avatarURLBuilder ? avatarURLBuilder(r.data) : r.comment.getGravatarURL()

  if (r.data.link) {
    const $avatarA = Utils.createElement<HTMLLinkElement>(
      '<a target="_blank" rel="noreferrer noopener nofollow"></a>',
    )
    $avatarA.href = Utils.isValidURL(r.data.link) ? r.data.link : `https://${r.data.link}`
    $avatarA.append($avatarImg)
    $avatar.append($avatarA)
  } else {
    $avatar.append($avatarImg)
  }*/

    const $avatar = r.$el.querySelector<HTMLElement>('.atk-avatar')!

    function getInitials(name: string): string {
      const words = name.split(" ").filter(word => word.length > 0);
      if (words.length > 1) {
          return words.map(word => word[0].toUpperCase()).join("");
      }
      return name.substring(0, 2).toUpperCase();
    }
    
    function hashStringToColor(name: string): string {
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
          hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      
      // Convert hash to a valid hex color
      const color = `#${((hash >> 24) & 0xFF).toString(16).padStart(2, '0')}` +
                    `${((hash >> 16) & 0xFF).toString(16).padStart(2, '0')}` +
                    `${((hash >> 8) & 0xFF).toString(16).padStart(2, '0')}`;
      
      return color;
    }
    
    
    
    $avatar.textContent = getInitials(r.data.nick);
    $avatar.style.backgroundColor = hashStringToColor(r.data.nick);
}
