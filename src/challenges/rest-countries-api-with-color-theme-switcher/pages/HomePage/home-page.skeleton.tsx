import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiGrid from '@mui/material/Grid2'
import MuiSkeleton from '@mui/material/Skeleton'
import MuiStack from '@mui/material/Stack'

import { ChallegeContainer } from '../../components/layouts'
import { Header } from '../../components/ui/header'
import { FilterByRegion } from './components/filter-by-region'
import { SearchingBar } from './components/searching-bar'

const HomeSkeleton = () => {
  return (
    <ChallegeContainer>
      <Header />

      <MuiStack>
        <MuiContainer maxWidth="desktop">
          <MuiStack spacing={4} sx={{ marginBottom: 4 }}>
            <MuiStack direction={{ desktop: 'row' }} justifyContent={{ desktop: 'space-between' }} spacing={{ mobile: 2, desktop: 0 }}>
              <SearchingBar />
              <FilterByRegion />
            </MuiStack>

            <MuiBox sx={{ flexGrow: 1 }}>
              <MuiGrid container spacing={8}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <MuiGrid key={index} size={{ mobile: 12, desktop: 3 }}>
                    <MuiSkeleton variant="rectangular" width="100%" height={350} />
                  </MuiGrid>
                ))}
              </MuiGrid>
            </MuiBox>
          </MuiStack>
        </MuiContainer>
      </MuiStack>
    </ChallegeContainer>
  )
}

export default HomeSkeleton
