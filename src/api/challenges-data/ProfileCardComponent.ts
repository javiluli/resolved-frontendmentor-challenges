// Types
// Links for images
import desktopDesign from '@/challenges/profile-card-component/assets/design/desktop-design.jpg'
import desktopPreview from '@/challenges/profile-card-component/assets/design/desktop-preview.jpg'
import mobileDesign from '@/challenges/profile-card-component/assets/design/mobile-design.jpg'
// Constants
import { CSS, GH_REPOSITORY, HTML, NEWBIE, URL_BASE_PREVIEW } from '@/constant'
import { CHALLENGE_SLUG } from '@/constant/challenges-slug'
import { Challenge } from '@/types'

export const ProfileCardComponent: Challenge = {
  id: '8',
  slug: CHALLENGE_SLUG.PROFILE_CARD_COMPONENT,
  title: 'Profile card component',
  description:
    "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
  difficulty: NEWBIE,
  languages: [HTML, CSS],
  images: {
    desktopPreview,
    desktopDesign,
    mobileDesign,
  },
  links: {
    livePreview: `${URL_BASE_PREVIEW}/${CHALLENGE_SLUG.QR_CODE_COMPONENT}`,
    sourceCode: `${GH_REPOSITORY}/${CHALLENGE_SLUG.QR_CODE_COMPONENT}`,
  },
  frontendMentor: {
    tryChallenge: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
    solution: 'https://www.frontendmentor.io/solutions/profile-card-component-OGEgRZRIWD',
  },
}
