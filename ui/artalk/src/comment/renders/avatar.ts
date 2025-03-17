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
    
    function isContrastEnough(bgColor: string): boolean {
      const r = parseInt(bgColor.substring(1, 3), 16);
      const g = parseInt(bgColor.substring(3, 5), 16);
      const b = parseInt(bgColor.substring(5, 7), 16);
      // Luminance formula untuk memastikan kontras cukup
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.6; // Pastikan cukup gelap agar teks putih terlihat
    }
    
    // Generate warna background random yang cukup kontras dengan teks putih
    let randomColor: string;
    do {
        randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (!isContrastEnough(randomColor) || randomColor.toLowerCase() === '#f2f2f2' || randomColor.toLowerCase() === '#ffffff');
    
    
    $avatar.textContent = initials;
    $avatar.style.backgroundColor = randomColor;
}
