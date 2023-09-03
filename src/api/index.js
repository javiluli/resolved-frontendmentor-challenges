import Difficulty from './data/Difficulty.js'
import Images from './data/Images.js'
import Languages from './data/Languages.js'
import Slugs from './data/Slugs.js'
import { GH_REPOSITORY, URL_BASE_PREVIEW } from './data/constant.js'

const Challens = [
  {
    id: '1',
    slug: Slugs.QR_CODE_COMPONENT,
    frontendmentor: {
      title: 'QR code component',
      description:
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.QR_CODE_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
      solution: 'https://www.frontendmentor.io/solutions/qr-code-component-cwv9rkFAiN',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.QR_CODE_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.QR_CODE_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/qr-code-component-wefu2n',
    },
  },
  {
    id: '2',
    slug: Slugs.PRODUCT_PREVIEW_CARD_COMPONENT,
    frontendmentor: {
      title: 'Product preview card component',
      description: 'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.PRODUCT_PREVIEW_CARD_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
      solution: 'https://www.frontendmentor.io/solutions/product-preview-card-component-o-yrShdyiW',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.PRODUCT_PREVIEW_CARD_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.PRODUCT_PREVIEW_CARD_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/product-preview-card-component-w920pf',
    },
  },
  {
    id: '3',
    slug: Slugs.INTERACTIVE_RATING_COMPONENT,
    frontendmentor: {
      title: 'Interactive rating component',
      description:
        'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.INTERACTIVE_RATING_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI',
      solution: 'https://www.frontendmentor.io/solutions/interactive-rating-component-pMXCKoDsXU',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.INTERACTIVE_RATING_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.INTERACTIVE_RATING_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/interactive-rating-component-65wjv7',
    },
  },
  {
    id: '4',
    slug: Slugs.NFT_PREVIEW_CARD_COMPONENT,
    frontendmentor: {
      title: 'NFT preview card component',
      description:
        'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.',
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.NFT_PREVIEW_CARD_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U',
      solution: 'https://www.frontendmentor.io/solutions/nft-preview-card-component-nEcLjRkVAA',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.NFT_PREVIEW_CARD_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.NFT_PREVIEW_CARD_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/nft-preview-card-component-sq8cm6',
    },
  },
  {
    id: '5',
    slug: Slugs.ORDER_SUMMARY_COMPONENT,
    frontendmentor: {
      title: 'Order summary component',
      description: 'A perfect project for newbies who are starting to build confidence with layouts!',
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.ORDER_SUMMARY_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
      solution: 'https://www.frontendmentor.io/solutions/order-summary-component-9l521TJWQ9',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.ORDER_SUMMARY_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.ORDER_SUMMARY_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/order-summary-component-grfw35',
    },
  },
  {
    id: '6',
    slug: Slugs.STATS_PREVIEW_CARD_COMPONENT,
    frontendmentor: {
      title: 'Stats preview card component',
      description:
        "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.STATS_PREVIEW_CARD_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62',
      solution: 'https://www.frontendmentor.io/solutions/stats-preview-card-component-zWZi0ZcXBd',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.STATS_PREVIEW_CARD_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.STATS_PREVIEW_CARD_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/stats-preview-card-component-zyb50y',
    },
  },
  {
    id: '7',
    slug: Slugs.THREE_COLUMN_PREVIEW_CARD_COMPONENT,
    frontendmentor: {
      title: '3-column preview card component',
      description:
        "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.THREE_COLUMN_PREVIEW_CARD_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
      solution: 'https://www.frontendmentor.io/solutions/3column-preview-card-component-nYGCE8N2Uf',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.THREE_COLUMN_PREVIEW_CARD_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/3-column-preview-card-component-9kd1cz',
    },
  },
  {
    id: '8',
    slug: Slugs.PROFILE_CARD_COMPONENT,
    frontendmentor: {
      title: 'Profile card component',
      description:
        "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.PROFILE_CARD_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
      solution: 'https://www.frontendmentor.io/solutions/profile-card-component-OGEgRZRIWD',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.PROFILE_CARD_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.PROFILE_CARD_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/profile-card-component-61q7uf',
    },
  },
  {
    id: '9',
    slug: Slugs.FAQ_ACCORDION_CARD,
    frontendmentor: {
      title: 'FAQ accordion card',
      description:
        "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.FAQ_ACCORDION_CARD,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
      solution: 'https://www.frontendmentor.io/solutions/faq-accordion-card-PBkVPesRW1',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.FAQ_ACCORDION_CARD}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.FAQ_ACCORDION_CARD}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/faq-accordion-card-n9xj0b',
    },
  },
  {
    id: '10',
    slug: Slugs.SOCIAL_PROOF_SECTION,
    frontendmentor: {
      title: 'Social proof section',
      description:
        "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.SOCIAL_PROOF_SECTION,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA',
      solution: 'https://www.frontendmentor.io/solutions/social-proof-section-60RpGfBk_d',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.SOCIAL_PROOF_SECTION}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.SOCIAL_PROOF_SECTION}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/social-proof-section-44hk0o',
    },
  },
  {
    id: '11',
    slug: Slugs.ARTICLE_PREVIEW_COMPONENT,
    frontendmentor: {
      title: 'Article preview component',
      description:
        "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.ARTICLE_PREVIEW_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT',
      solution: 'https://www.frontendmentor.io/solutions/article-preview-component-d3_gdzxc4h',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.ARTICLE_PREVIEW_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.ARTICLE_PREVIEW_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/article-preview-component-qsqvj0',
    },
  },
  {
    id: '12',
    slug: Slugs.FOUR_CARD_FEATURE_SECTION,
    frontendmentor: {
      title: 'Four card feature section',
      description: 'A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.',
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.FOUR_CARD_FEATURE_SECTION,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
      solution: 'https://www.frontendmentor.io/solutions/four-card-feature-section-lMUT30jERe',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.FOUR_CARD_FEATURE_SECTION}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.FOUR_CARD_FEATURE_SECTION}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/four-card-feature-section-fu4600',
    },
  },
  {
    id: '13',
    slug: Slugs.BASE_APPAREL_COMING_SOON_PAGE,
    frontendmentor: {
      title: 'Base Apparel coming soon page',
      description:
        "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.BASE_APPAREL_COMING_SOON_PAGE,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
      solution: 'https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-z1Qs4JhKYW',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.BASE_APPAREL_COMING_SOON_PAGE}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.BASE_APPAREL_COMING_SOON_PAGE}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/base-apparel-coming-soon-page-uu7st8',
    },
  },
  {
    id: '14',
    slug: Slugs.INTRO_COMPONENT_WITH_SIGN_UP_FORM,
    frontendmentor: {
      title: 'Intro component with sign-up form',
      description: 'Practice building out a sign-up form complete with client-side validation using JavaScript.',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.INTRO_COMPONENT_WITH_SIGN_UP_FORM,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
      solution: 'https://www.frontendmentor.io/solutions/intro-component-with-signup-form-hFVxI4wvEl',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.INTRO_COMPONENT_WITH_SIGN_UP_FORM}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/intro-component-with-sign-up-form-n446il',
    },
  },
  {
    id: '15',
    slug: Slugs.SINGLE_PRICE_GRID_COMPONENT,
    frontendmentor: {
      title: 'Single price grid component',
      description:
        'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.',
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.SINGLE_PRICE_GRID_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc',
      solution: 'https://www.frontendmentor.io/solutions/single-price-grid-component-wqzYhETg04',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.SINGLE_PRICE_GRID_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.SINGLE_PRICE_GRID_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/single-price-grid-component-v2pdlx',
    },
  },
  {
    id: '16',
    slug: Slugs.PING_SINGLE_COLUMN_COMING_SOON_PAGE,
    frontendmentor: {
      title: 'Ping single column coming soon page',
      description: 'This challenge is great for beginners and offers a chance to practice basic client-side form validation.',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.PING_SINGLE_COLUMN_COMING_SOON_PAGE,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da',
      solution: 'https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-sIycp6lX6Q',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.PING_SINGLE_COLUMN_COMING_SOON_PAGE}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/ping-single-column-coming-soon-page-mmgkiv',
    },
  },
  {
    id: '17',
    slug: Slugs.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION,
    frontendmentor: {
      title: 'Huddle landing page with a single introductory section',
      description: 'A perfect challenge for beginners, this project will get you working with a two column layout.',
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.NEWBIE,
      images: {
        desktop_preview: Images.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0',
      solution: 'https://www.frontendmentor.io/solutions/huddle-landing-page-with-a-single-introductory-section-AbFllpYPzv',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/huddle-landing-page-with-a-single-introductory-section-v3gmdb',
    },
  },
  {
    id: '18',
    slug: Slugs.ADVICE_GENERATOR_APP,
    frontendmentor: {
      title: 'Advice generator app',
      description:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      languages: [Languages.HTML, Languages.CSS, Languages.JS, Languages.API],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.ADVICE_GENERATOR_APP,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
      solution: 'https://www.frontendmentor.io/solutions/advice-generator-app-EjsrPJtwZo',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.ADVICE_GENERATOR_APP}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.ADVICE_GENERATOR_APP}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/advice-generator-app-5xcr0d',
    },
  },
  {
    id: '19',
    slug: Slugs.EXPENSES_CHART_COMPONENT,
    frontendmentor: {
      title: 'Expenses chart component',
      description:
        "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.EXPENSES_CHART_COMPONENT,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
      solution: 'https://www.frontendmentor.io/solutions/expenses-chart-component-cLzHSD7asY',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.EXPENSES_CHART_COMPONENT}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.EXPENSES_CHART_COMPONENT}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/expenses-chart-component-e30ehu',
    },
  },
  {
    id: '20',
    slug: Slugs.TIP_CALCULATOR_APP,
    frontendmentor: {
      title: 'Tip calculator app',
      description:
        'This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.TIP_CALCULATOR_APP,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
      solution: 'https://www.frontendmentor.io/solutions/tip-calculator-app-iMdttbN_Gn',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.TIP_CALCULATOR_APP}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.TIP_CALCULATOR_APP}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/tip-calculator-app-m3787n',
    },
  },
  {
    id: '21',
    slug: Slugs.TESTIMONIALS_GRID_SECTION,
    frontendmentor: {
      title: 'Testimonials grid section',
      description:
        "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      languages: [Languages.HTML, Languages.CSS],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.TESTIMONIALS_GRID_SECTION,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7',
      solution: 'https://www.frontendmentor.io/solutions/testimonials-grid-section-iAjaE4qFnF',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.TESTIMONIALS_GRID_SECTION}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.TESTIMONIALS_GRID_SECTION}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/testimonials-grid-section-b6rqqn',
    },
  },
  {
    id: '22',
    slug: Slugs.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER,
    frontendmentor: {
      title: 'Social media dashboard with theme switcher',
      description:
        'This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H',
      solution: 'https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-switcher-NBoExQGMDt',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/social-media-dashboard-with-theme-switcher-j5vne0',
    },
  },
  {
    id: '23',
    slug: Slugs.TIME_TRACKING_DASHBOARD,
    frontendmentor: {
      title: 'Time tracking dashboard',
      description:
        'A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.TIME_TRACKING_DASHBOARD,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
      solution: 'https://www.frontendmentor.io/solutions/time-tracking-dashboard-V70uZ_-dsV',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.TIME_TRACKING_DASHBOARD}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.TIME_TRACKING_DASHBOARD}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/time-tracking-dashboard-j0e0cn',
    },
  },
  {
    id: '24',
    slug: Slugs.AGE_CALCULATOR_APP,
    frontendmentor: {
      title: 'Age calculator app',
      description:
        'This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!',
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.JUNIOR,
      images: {
        desktop_preview: Images.AGE_CALCULATOR_APP,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q',
      solution: 'https://www.frontendmentor.io/solutions/age-calculator-app-OWuaGlvZm6',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.AGE_CALCULATOR_APP}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.AGE_CALCULATOR_APP}`,
    editables: {
      codesandbox: 'https://codesandbox.io/s/age-calculator-app-4vtzgw',
    },
  },
  {
    id: '25',
    slug: Slugs.CALCULATOR_APP,
    frontendmentor: {
      title: 'Calculator app',
      description:
        "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
      languages: [Languages.HTML, Languages.CSS, Languages.JS],
      difficulty: Difficulty.INTERMEDIATE,
      images: {
        desktop_preview: Images.CALCULATOR_APP,
      },
      try_challenge: 'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29',
      solution: '',
    },
    source_code: `${GH_REPOSITORY}/${Slugs.CALCULATOR_APP}`,
    live_preview: `${URL_BASE_PREVIEW}/${Slugs.CALCULATOR_APP}`,
    editables: {
      codesandbox: '',
    },
  },
]

export default Challens
