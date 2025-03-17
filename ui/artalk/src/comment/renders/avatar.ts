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

    const initials: string = r.data.nick.split(' ').map(word => word.charAt(0)).join('').substring(0, 2).toUpperCase();
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    $avatar.textContent = initials;
    $avatar.style.backgroundColor = randomColor;
}
