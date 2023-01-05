import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container'
import MuiGrid from '@mui/material/Grid'

import imgDaniel from '../../assets/images/image-daniel.jpg'
import imgJeanette from '../../assets/images/image-jeanette.jpg'
import imgJonathan from '../../assets/images/image-jonathan.jpg'
import imgKira from '../../assets/images/image-kira.jpg'
import imgPatrick from '../../assets/images/image-patrick.jpg'
import { CardComponent } from './CardComponent'

const TestimonialsGridSection = () => {
  return (
    <MuiBox sx={{ my: 4 }}>
      <MuiContainer maxWidth="xl">
        <MuiGrid container spacing={4}>
          {/* grid 1 */}
          <MuiGrid item container md={12} xl={9} spacing={4}>
            <MuiGrid item md={8}>
              <MuiBox sx={{ height: '100%' }}>
                <CardComponent
                  avatar={imgDaniel}
                  name="Daniel Clifford"
                  bgColor="hsl(263, 55%, 52%)"
                  titile="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
                  bodyText="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
                  colorText="hsl(210, 46%, 95%)"
                />
              </MuiBox>
            </MuiGrid>

            <MuiGrid item md={4}>
              <MuiBox sx={{ height: '100%' }}>
                <CardComponent
                  avatar={imgJonathan}
                  name="Jonathan Walters"
                  bgColor="hsl(217, 19%, 35%)"
                  titile="The team was very supportive and kept me motivated"
                  bodyText="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”"
                  colorText="hsl(210, 46%, 95%)"
                />
              </MuiBox>
            </MuiGrid>

            <MuiGrid item md={4}>
              <MuiBox sx={{ height: '100%' }}>
                <CardComponent
                  avatar={imgJeanette}
                  name="Jeanette Harmon"
                  bgColor=""
                  titile="An overall wonderful and rewarding experience"
                  bodyText="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                while doing something I love. ”"
                />
              </MuiBox>
            </MuiGrid>

            <MuiGrid item md={8}>
              <MuiBox sx={{ height: '100%' }}>
                <CardComponent
                  avatar={imgPatrick}
                  name="Patrick Abrams"
                  bgColor="hsl(219, 29%, 14%)"
                  titile="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
                  bodyText=" “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
                  colorText="hsl(210, 46%, 95%)"
                />
              </MuiBox>
            </MuiGrid>
          </MuiGrid>
          {/* grid 2 */}
          <MuiGrid item md={12} xl={3}>
            <MuiGrid item sx={{ height: '100%' }}>
              <MuiBox sx={{ height: '100%' }}>
                <CardComponent
                  avatar={imgKira}
                  name="Kira Whittl"
                  bgColor=""
                  titile="Such a life-changing experience. Highly recommended!"
                  bodyText="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                100% recommend! ”"
                />
              </MuiBox>
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </MuiBox>
  )
}

export default TestimonialsGridSection
