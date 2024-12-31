import { Difficulty, Language } from '@/types'

export const GH_REPOSITORY = 'https://github.com/javiluli/resolved-frontendmentor-challenges/tree/master/src/challenges'
export const GH_REPOSITORY_FOLDER_DESIGN_IMAGES =
  'https://raw.githubusercontent.com/javiluli/resolved-frontendmentor-challenges/master/src/challenges'

export const URL_BASE_PREVIEW = 'https://rfmc.vercel.app'

export const NEWBIE: Difficulty = {
  rank: 1,
  label: 'newbie',
  colors: {
    main: 'hsl(189, 50%, 61%)',
    transparent: 'hsla(189, 50%, 61%, 0.3)',
  },
}

export const JUNIOR: Difficulty = {
  rank: 2,
  label: 'junior',
  colors: {
    main: 'hsl(78, 65%, 55%)',
    transparent: 'hsla(78, 65%, 55%, 0.3)',
  },
}

export const INTERMEDIATE: Difficulty = {
  rank: 3,
  label: 'intermediate',
  colors: {
    main: 'hsl(45, 97%, 48%)',
    transparent: 'hsla(45, 97%, 48%, 0.3)',
  },
}

export const ADVANCED: Difficulty = {
  rank: 4,
  label: 'advanced',
  colors: {
    main: 'hsl(29, 90%, 55%)',
    transparent: 'hsla(29, 90%, 55%, 0.3)',
  },
}

export const HTML: Language = {
  label: 'html',
  colors: {
    main: 'hsl(189, 50%, 61%)',
  },
}

export const CSS: Language = {
  label: 'css',
  colors: {
    main: 'hsl(227, 45%, 44%)',
  },
}

export const JS: Language = {
  label: 'js',
  colors: {
    main: 'hsl(335, 53%, 60%)',
  },
}

export const API: Language = {
  label: 'api',
  colors: {
    main: 'hsl(78, 65%, 55%)',
  },
}
