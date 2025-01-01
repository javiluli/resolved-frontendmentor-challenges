import { CHALLENGE_SLUG } from '@/constant/challenges-slug'

export type DifficultyColors = {
  main: string
  transparent: string
}

export type Difficulty = {
  rank: number
  label: 'newbie' | 'junior' | 'intermediate' | 'advanced'
  colors: DifficultyColors
}

export type LanguageColors = {
  main: string
}

export type Language = {
  label: 'html' | 'css' | 'js' | 'api'
  colors: LanguageColors
}

export type ChallengeSlug = (typeof CHALLENGE_SLUG)[keyof typeof CHALLENGE_SLUG]

export type Challenge = {
  id: string
  slug: ChallengeSlug
  title: string
  description: string
  difficulty: Difficulty
  languages: Language[]
  images: {
    desktopPreview: string
    desktopDesign: string
    [key: string]: string | undefined
  }
  links: {
    livePreview: string
    sourceCode: string
    [key: string]: string | undefined
  }
  frontendMentor: {
    tryChallenge: string
    solution: string
    [key: string]: string | undefined
  }
}
