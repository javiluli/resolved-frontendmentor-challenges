const GH_REPOSITORY = 'https://github.com/javiluli/resolved-frontendmentor-challenges/tree/master/src/challenges'
const URL_BASE_PREVIEW = 'https://rfmc.vercel.app/c'

const Difficulty = {
  NEWBIE: {
    color: 'hsl(189, 50%, 61%)',
    description: 'newbie',
    level: 1,
  },
  JUNIOR: {
    color: 'hsl(78, 65%, 55%)',
    description: 'junior',
    level: 2,
  },
}

const Languages = {
  HTML: {
    language: 'HTML',
    color: 'hsl(189, 50%, 61%)',
  },
  CSS: {
    language: 'CSS',
    color: 'hsl(227, 45%, 44%)',
  },
  JS: {
    language: 'JS',
    color: 'hsl(335, 53%, 60%)',
  },
  API: {
    language: 'API',
    color: 'hsl(78, 65%, 55%)',
  },
}

const Challens = [
  {
    id: '1',
    slug: 'qr-code-component',
    title: 'QR code component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_1080/Challenges/qh97gysgjrzqyqlig2al.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    source_code: `${GH_REPOSITORY}/qr-code-component`,
    live_preview: `${URL_BASE_PREVIEW}/qr-code-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
    codesandbox: 'https://codesandbox.io/s/qr-code-component-2k5jqt',
    stackblitz: 'https://stackblitz.com/edit/qrcodecomponent',
  },
  {
    id: '2',
    slug: 'product-preview-card-component',
    title: 'Product preview card component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/lftjtn81b7brs2icc898.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description: 'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
    source_code: `${GH_REPOSITORY}/product-preview-card-component`,
    live_preview: `${URL_BASE_PREVIEW}/product-preview-card-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
    codesandbox: 'https://codesandbox.io/s/product-preview-card-component-m8b6fu',
    stackblitz: '',
  },
  {
    id: '3',
    slug: 'interactive-rating-component',
    title: 'Interactive rating component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hxx2bhmtmeelt0a98zos.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description:
      'This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!',
    source_code: `${GH_REPOSITORY}/interactive-rating-component`,
    live_preview: `${URL_BASE_PREVIEW}/interactive-rating-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI',
    codesandbox: 'https://codesandbox.io/s/interactive-rating-component-32dyoy',
    stackblitz: '',
  },
  {
    id: '4',
    slug: 'nft-preview-card-component',
    title: 'NFT preview card component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/rinokvkluq95madbvtmk.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      'This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.',
    source_code: `${GH_REPOSITORY}/nft-preview-card-component`,
    live_preview: `${URL_BASE_PREVIEW}/nft-preview-card-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U',
    codesandbox: 'https://codesandbox.io/s/nft-preview-card-component-kk8gm4',
    stackblitz: '',
  },
  {
    id: '5',
    slug: 'order-summary-component',
    title: 'Order summary component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ouobx6tvyduidzio7wr7.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description: 'A perfect project for newbies who are starting to build confidence with layouts!',
    source_code: `${GH_REPOSITORY}/order-summary-component`,
    live_preview: `${URL_BASE_PREVIEW}/order-summary-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    codesandbox: 'https://codesandbox.io/s/order-summary-component-9dlswh',
    stackblitz: '',
  },
  {
    id: '6',
    slug: 'stats-preview-card-component',
    title: 'Stats preview card component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/sucvvhutd4codsxpzvw7.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
    source_code: `${GH_REPOSITORY}/stats-preview-card-component`,
    live_preview: `${URL_BASE_PREVIEW}/stats-preview-card-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62',
    codesandbox: 'https://codesandbox.io/s/stats-preview-card-component-wqhpdb',
    stackblitz: '',
  },
  {
    id: '7',
    slug: 'three-column-preview-card-component',
    title: '3-column preview card component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/juir90bwmmvlo86g9paz.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
    source_code: `${GH_REPOSITORY}/three-column-preview-card-component`,
    live_preview: `${URL_BASE_PREVIEW}/three-column-preview-card-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
    codesandbox: 'https://codesandbox.io/s/3-column-preview-card-component-wnsc4f',
    stackblitz: '',
  },
  {
    id: '8',
    slug: 'profile-card-component',
    title: 'Profile card component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/dia0o9uigiiz4gebiqps.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
    source_code: `${GH_REPOSITORY}/profile-card-component`,
    live_preview: `${URL_BASE_PREVIEW}/profile-card-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
    codesandbox: 'https://codesandbox.io/s/profile-card-component-wh4efq',
    stackblitz: '',
  },
  {
    id: '9',
    slug: 'faq-accordion-card',
    title: 'FAQ accordion card',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ua4zwoxu3i9avrzrusre.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description:
      "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
    source_code: `${GH_REPOSITORY}/faq-accordion-card`,
    live_preview: `${URL_BASE_PREVIEW}/faq-accordion-card`,
    try_challenge: 'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
    codesandbox: 'https://codesandbox.io/s/faq-accordion-card-ijv1oz',
    stackblitz: '',
  },
  {
    id: '10',
    slug: 'social-proof-section',
    title: 'Social proof section',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bnjpxmx9fudsmerfj6eo.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
    source_code: `${GH_REPOSITORY}/social-proof-section`,
    live_preview: `${URL_BASE_PREVIEW}/social-proof-section`,
    try_challenge: 'https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA',
    codesandbox: 'https://codesandbox.io/s/social-proof-section-dmwfs6',
    stackblitz: '',
  },
  {
    id: '11',
    slug: 'article-preview-component',
    title: 'Article preview component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/tm7zwaa7fprabjbwbemt.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description:
      "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
    source_code: `${GH_REPOSITORY}/article-preview-component`,
    live_preview: `${URL_BASE_PREVIEW}/article-preview-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT',
    codesandbox: 'https://codesandbox.io/s/article-preview-component-cf9zkc',
    stackblitz: '',
  },
  {
    id: '12',
    slug: 'four-card-feature-section',
    title: 'Four card feature section',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/a3b5gbgtfbtiqrdawpwp.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      'A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.',
    source_code: `${GH_REPOSITORY}/four-card-feature-section`,
    live_preview: `${URL_BASE_PREVIEW}/four-card-feature-section`,
    try_challenge: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
    codesandbox: 'https://codesandbox.io/s/four-card-feature-section-tuzkv4',
    stackblitz: '',
  },
  {
    id: '13',
    slug: 'base-apparel-coming-soon-page',
    title: 'Base Apparel coming soon page',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/tjmihf4uv326gkkz7mbk.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description:
      "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
    source_code: `${GH_REPOSITORY}/base-apparel-coming-soon-page`,
    live_preview: `${URL_BASE_PREVIEW}/base-apparel-coming-soon-page`,
    try_challenge: 'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
    codesandbox: 'https://codesandbox.io/s/base-apparel-coming-soon-page-kee3h9',
    stackblitz: '',
  },
  {
    id: '14',
    slug: 'intro-component-with-sign-up-form',
    title: 'Intro component with sign-up form',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ficuxtmo5kmd5bb8lmws.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description: 'Practice building out a sign-up form complete with client-side validation using JavaScript.',
    source_code: `${GH_REPOSITORY}/intro-component-with-sign-up-form`,
    live_preview: `${URL_BASE_PREVIEW}/intro-component-with-sign-up-form`,
    try_challenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
    codesandbox: 'https://codesandbox.io/s/intro-component-with-sign-up-form-c3jqvz',
    stackblitz: '',
  },
  {
    id: '15',
    slug: 'single-price-grid-component',
    title: 'Single price grid component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/i6wu7n5sthrxgfpfibvx.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description:
      'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.',
    source_code: `${GH_REPOSITORY}/single-price-grid-component`,
    live_preview: `${URL_BASE_PREVIEW}/single-price-grid-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc',
    codesandbox: 'https://codesandbox.io/s/single-price-grid-component-2823sj',
    stackblitz: '',
  },
  {
    id: '16',
    slug: 'ping-single-column-coming-soon-page',
    title: 'Ping single column coming soon page',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/qjiprcu1e19yvujjrflv.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description: 'This challenge is great for beginners and offers a chance to practice basic client-side form validation.',
    source_code: `${GH_REPOSITORY}/ping-single-column-coming-soon-page`,
    live_preview: `${URL_BASE_PREVIEW}/ping-single-column-coming-soon-page`,
    try_challenge: 'https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da',
    codesandbox: 'https://codesandbox.io/s/ping-single-column-coming-soon-page-k8r1en',
    stackblitz: '',
  },
  {
    id: '17',
    slug: 'huddle-landing-page-with-a-single-introductory-section',
    title: 'Huddle landing page with a single introductory section',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/aaykth21moiquxkubywu.jpg',
    difficulty: Difficulty.NEWBIE,
    languages: [Languages.HTML, Languages.CSS],
    challenge_description: 'A perfect challenge for beginners, this project will get you working with a two column layout.',
    source_code: `${GH_REPOSITORY}/huddle-landing-page-with-a-single-introductory-section`,
    live_preview: `${URL_BASE_PREVIEW}/huddle-landing-page-with-a-single-introductory-section`,
    try_challenge: 'https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0',
    codesandbox: 'https://codesandbox.io/s/huddle-landing-page-with-a-single-introductory-section-u75twp',
    stackblitz: '',
  },
  {
    id: '18',
    slug: 'advice-generator-app',
    title: 'Advice generator app',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/sfl8uqvq75wnnr559ksp.jpg',
    difficulty: Difficulty.JUNIOR,
    languages: [Languages.HTML, Languages.CSS, Languages.JS, Languages.API],
    challenge_description:
      "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
    source_code: `${GH_REPOSITORY}/advice-generator-app`,
    live_preview: `${URL_BASE_PREVIEW}/advice-generator-app`,
    try_challenge: 'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
    codesandbox: '',
    stackblitz: '',
  },
  {
    id: '19',
    slug: 'expenses-chart-component',
    title: 'Expenses chart component',
    preview_image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/xhxtaym7uzypzb37rpcc.jpg',
    difficulty: Difficulty.JUNIOR,
    languages: [Languages.HTML, Languages.CSS, Languages.JS],
    challenge_description:
      "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
    source_code: `${GH_REPOSITORY}/expenses-chart-component`,
    live_preview: `${URL_BASE_PREVIEW}/expenses-chart-component`,
    try_challenge: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
    codesandbox: '',
    stackblitz: '',
  },
]

export default Challens
