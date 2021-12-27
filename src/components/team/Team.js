import React from "react";
import {
  DRTeam,
  TeamTopSection,
  Heading,
  Paragraph,
  TeamMidSection,
  ForestImg,
  LeftContainer,
  DogeParagraph,
  DogeImg,
  TeamFoundersSection,
  FoundersContainer,
  LeftLeave,
  RightLeave,
  FoundersHeading,
  TeamFounder,
  FounderImg,
  FounderName,
  FirstFourFounders,
  LastFourFounders,
  TwoFoundersWrapper,
  TeamBottomSection,
  MainBottomContainer,
  LeftBottomContainer,
  RightBottomContainer,
  DogeRuningIcon,
  DogeBottomParagraph,
  DogeBottomHeading,
  DogeBottomRightParagraph,
  JoinCommunityCard,
  JoinButton,
  JoinCommunityCardHeading,
} from "../team/teamStyledElements";
import dogeImg from "../../assets/drungrow.png";
import rightLeave from "../../assets/cheeseplantr.png";
import leftLeave from "../../assets/cheeseplant.png";
import grizz from "../../assets/dogeface3.png";
import nikil from "../../assets/dogeface1.png";
import beep from "../../assets/dogeface4.png";
import LKD from "../../assets/dogeface2.png";
import chris from "../../assets/dogeface6.png";
import jack from "../../assets/dogeface8.png";
import nightGnome from "../../assets/dogeface7.png";
import raxlie from "../../assets/dogeface5.png";
import dogeRuning from "../../assets/dr003.png";
import forestImg from "../../assets/gamesplash3.png";
const Team = () => {
  return (
    <DRTeam>
      <TeamTopSection>
        <Heading>We are DogeRun</Heading>
        <Paragraph>
          We're creating the best in Blockchain Gaming by making games and
          experiences that change the way people earn.
        </Paragraph>
      </TeamTopSection>
      <TeamMidSection>
        <ForestImg src={forestImg} />
        <LeftContainer>
          <DogeParagraph>
            We will be continuously improving and evolving our project to give
            the best possible experience for our holders and provide a steady
            flow of content that keeps players engaged with the Doge Run project
            into the long term.
          </DogeParagraph>
          <DogeImg src={dogeImg} />
        </LeftContainer>
      </TeamMidSection>

      <TeamFoundersSection>
        <FoundersContainer>
          <LeftLeave src={leftLeave} />
          <RightLeave src={rightLeave} />
          <FoundersHeading>Meet the Founders</FoundersHeading>

          <FirstFourFounders>
            <TwoFoundersWrapper>
              <TeamFounder>
                <FounderImg src={grizz} />
                <FounderName>
                  <p>Grizz</p>
                  <p>Operations & Development</p>
                </FounderName>
              </TeamFounder>

              <TeamFounder>
                <FounderImg src={nikil} />
                <FounderName>
                  <p>Nikil</p>
                  <p>Marketing & Management</p>
                </FounderName>
              </TeamFounder>
            </TwoFoundersWrapper>
            <TwoFoundersWrapper>
              <TeamFounder>
                <FounderImg src={beep} />
                <FounderName>
                  <p>Beep</p>
                  <p>
                    Contract Dev
                    <br />
                    <br />
                  </p>
                </FounderName>
              </TeamFounder>

              <TeamFounder>
                <FounderImg src={LKD} />
                <FounderName>
                  <p>LKD</p>
                  <p>
                    Marketing
                    <br />
                    <br />
                  </p>
                </FounderName>
              </TeamFounder>
            </TwoFoundersWrapper>
          </FirstFourFounders>

          <LastFourFounders>
            <TwoFoundersWrapper>
              <TeamFounder>
                <FounderImg src={nightGnome} />
                <FounderName>
                  <p>NightGnome</p>
                  <p>
                    Game Dev
                    <br />
                    <br />
                  </p>
                </FounderName>
              </TeamFounder>

              <TeamFounder>
                <FounderImg src={raxlie} />
                <FounderName>
                  <p>Raxlie</p>
                  <p>
                    Designer
                    <br />
                    <br />
                  </p>
                </FounderName>
              </TeamFounder>
            </TwoFoundersWrapper>
            <TwoFoundersWrapper>
              <TeamFounder>
                <FounderImg src={jack} />
                <FounderName>
                  <p>Jack</p>
                  <p>Community & Operations</p>
                </FounderName>
              </TeamFounder>

              <TeamFounder>
                <FounderImg src={chris} />
                <FounderName>
                  <p>Christian</p>
                  <p>
                    Web Dev
                    <br />
                    <br />
                  </p>
                </FounderName>
              </TeamFounder>
            </TwoFoundersWrapper>
          </LastFourFounders>
        </FoundersContainer>
      </TeamFoundersSection>

      <TeamBottomSection>
        <MainBottomContainer>
          <LeftBottomContainer>
            <DogeBottomHeading>
              You'll be seeing plenty of us.
            </DogeBottomHeading>
            <DogeBottomParagraph>
              Our product at launch demonstrates the ground floor for our
              project, a proof of concept and quality that our team will strive
              to maintain and build on throughout each stage of our roadmap. The
              sky's the limit for Doge and its just one of many places you’ll
              get to join him as future levels release.
            </DogeBottomParagraph>
          </LeftBottomContainer>
          <RightBottomContainer>
            <JoinCommunityCard>
              {" "}
              <DogeRuningIcon src={dogeRuning} />
              <JoinCommunityCardHeading>
                Join The Community
              </JoinCommunityCardHeading>
              <DogeBottomRightParagraph>
                We are active in our community and we'd love to welcome you to
                the project.
              </DogeBottomRightParagraph>
              <JoinButton>
                {" "}
                <a href="https://t.me/DogeRunToken">Join our Telegram</a>
              </JoinButton>
            </JoinCommunityCard>
          </RightBottomContainer>
        </MainBottomContainer>
      </TeamBottomSection>
    </DRTeam>
  );
};

export default Team;
