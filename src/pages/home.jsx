import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiDivider from '@mui/material/Divider'

import Challens from '@/api'

import {
  ADVICE_GENERATOR_APP,
  AGE_CALCULATOR_APP,
  ARTICLE_PREVIEW_COMPONENT,
  BASE_APPAREL_COMING_SOON_PAGE,
  CALCULATOR_APP,
  EXPENSES_CHART_COMPONENT,
  FAQ_ACCORDION_CARD,
  FOUR_CARD_FEATURE_SECTION,
  HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION,
  INTERACTIVE_RATING_COMPONENT,
  INTRO_COMPONENT_WITH_SIGN_UP_FORM,
  NFT_PREVIEW_CARD_COMPONENT,
  ORDER_SUMMARY_COMPONENT,
  PING_SINGLE_COLUMN_COMING_SOON_PAGE,
  PRODUCT_PREVIEW_CARD_COMPONENT,
  PROFILE_CARD_COMPONENT,
  QR_CODE_COMPONENT,
  SINGLE_PRICE_GRID_COMPONENT,
  SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER,
  SOCIAL_PROOF_SECTION,
  STATS_PREVIEW_CARD_COMPONENT,
  TESTIMONIALS_GRID_SECTION,
  THREE_COLUMN_PREVIEW_CARD_COMPONENT,
  TIME_TRACKING_DASHBOARD,
  TIP_CALCULATOR_APP,
  TODO_APP,
} from '@/constant/challenges-id'

import { Card } from '@/components/ui/Card'
import { Header } from '@/components/ui/header'

const generateImage = (challen, size) => {
  const getId = Challens[challen].id
  const getImage = Challens[challen].images.desktop_design

  const sizeMap = {
    '1x1': { cols: 1, rows: 1 },
    '2x1': { cols: 2, rows: 1 },
    '2x2': { cols: 2, rows: 2 },
    '3x2': { cols: 3, rows: 2 },
  }
  return { id: getId, src: getImage, ...sizeMap[size] }
}

const images = [
  generateImage(QR_CODE_COMPONENT, '1x1'),
  generateImage(PRODUCT_PREVIEW_CARD_COMPONENT, '1x1'),
  generateImage(SOCIAL_PROOF_SECTION, '3x2'),
  generateImage(STATS_PREVIEW_CARD_COMPONENT, '2x1'),
  generateImage(FOUR_CARD_FEATURE_SECTION, '3x2'),
  generateImage(PING_SINGLE_COLUMN_COMING_SOON_PAGE, '2x2'),
  generateImage(TIP_CALCULATOR_APP, '2x2'),
  generateImage(BASE_APPAREL_COMING_SOON_PAGE, '3x2'),
  generateImage(INTRO_COMPONENT_WITH_SIGN_UP_FORM, '3x2'),
  generateImage(THREE_COLUMN_PREVIEW_CARD_COMPONENT, '2x1'),
  generateImage(INTERACTIVE_RATING_COMPONENT, '1x1'),
  generateImage(NFT_PREVIEW_CARD_COMPONENT, '1x1'),
  generateImage(TODO_APP, '2x2'),
  generateImage(HUDDLE_LANDING_PAGE_WITH_A_SINGLE_INTRODUCTORY_SECTION, '3x2'),
  generateImage(TESTIMONIALS_GRID_SECTION, '3x2'),
  generateImage(ORDER_SUMMARY_COMPONENT, '1x1'),
  generateImage(PROFILE_CARD_COMPONENT, '1x1'),
  generateImage(FAQ_ACCORDION_CARD, '2x1'),
  generateImage(ARTICLE_PREVIEW_COMPONENT, '2x1'),
  generateImage(SOCIAL_MEDIA_DASHBOARD_WITH_THEME_SWITCHER_MASTER, '3x2'),
  generateImage(SINGLE_PRICE_GRID_COMPONENT, '1x1'),
  generateImage(ADVICE_GENERATOR_APP, '1x1'),
  generateImage(EXPENSES_CHART_COMPONENT, '1x1'),
  generateImage(TIME_TRACKING_DASHBOARD, '2x1'),
  generateImage(AGE_CALCULATOR_APP, '1x1'),
  generateImage(CALCULATOR_APP, '1x1'),
]

export const HomePage = () => {
  return (
    <>
      <MuiContainer>
        <Header />
      </MuiContainer>
      <MuiDivider />

      <MuiBox
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(100px, 1fr))',
            sm: 'repeat(auto-fill, minmax(150px, 1fr))',
            md: 'repeat(auto-fill, minmax(200px, 1fr))',
            lg: 'repeat(auto-fill, minmax(250px, 1fr))',
            xl: 'repeat(auto-fill, minmax(300px, 1fr))',
          },
          gridAutoRows: {
            xs: '100px',
            sm: '150px',
            md: '200px',
            lg: '250px',
            xl: '300px',
          },
          gap: {
            xs: '8px',
            sm: '10px',
            md: '15px',
            lg: '20px',
            xl: '24px',
          },
          gridAutoFlow: 'dense',
          padding: 2,
          minWidth: '280px',
          margin: '0 auto',
        }}
      >
        {images.map((item, index) => (
          <Card key={index} id={item.id} rows={item.rows} cols={item.cols} src={item.src} />
        ))}
      </MuiBox>
    </>
  )
}
