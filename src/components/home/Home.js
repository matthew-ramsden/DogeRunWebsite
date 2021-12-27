import React from "react";
import { Link } from "react-router-dom";

import {
  HomeContainer,
  TopSection,
  LogoImage,
  LogoText,
  LinkImages,
  ArtLinkContainer,
  ArtLinkImage,
  ArtLinkText,
  BodySection,
  Title,
  BodyText,
  BodyWrap,
  Button,
  AboutImageSection,
  FirstImage,
  SecondImage,
  BottomImageSection,
  BigImage,
  PinkThing,
  TextSection,
  TextSection2,
  TextSection3,
  TextSectionHeader,
  TextSectioBody,
  TextSectionLogo,
  TextSectionTitle,
  JoinSection,
  JoinText,
  JoinButton,
  JoinImage,
  GetInTouch,
  GetInTouch2,
  GetInTouchTitles,
  GetInTouchFname,
  InputName,
  InputEmail,
  GetInTouchLname,
  GetInTouchEmail,
  GetInTouchMessage,
  InputMessage,
  GetInTouchButton,
  Subscribe,
  Subscribe2,
  SubscribeTitle,
  SubscribeEmail,
  InputSubscribeEmail,
  SubscribeButton,
  ParalaxSection,
} from "./homeStyledElements";

const Home = () => {
  return (
    <HomeContainer>
      <TopSection>
        <LogoImage src="../../assets/drunlogo2.svg" />
        <LogoText>Run to the moon and Play 2 Earn !!</LogoText>
        <LinkImages>
          <ArtLinkContainer>
            <Link to="/game">
              <ArtLinkImage src="../../assets/jungle.png" />
              <ArtLinkText>
                <p>P2E Game</p>
                <p>Play and Earn</p>
              </ArtLinkText>
            </Link>
          </ArtLinkContainer>
          <ArtLinkContainer>
            <Link to="/nft">
              <ArtLinkImage src="../../assets/sea.png" />
              <ArtLinkText>
                <p>NFT</p>
                <p>Art and Utility</p>
              </ArtLinkText>
            </Link>
          </ArtLinkContainer>
          <ArtLinkContainer>
            <Link to="/roadmap">
              <ArtLinkImage src="../../assets/desert.png" />
              <ArtLinkText>
                <p>Roadmap</p>
                <p>What's the Plan?</p>
              </ArtLinkText>
            </Link>
          </ArtLinkContainer>
          <ArtLinkContainer>
            <Link to="/team">
              <ArtLinkImage src="../../assets/space.png" />
              <ArtLinkText>
                <p>Team</p>
                <p>Meet the Team</p>
              </ArtLinkText>
            </Link>
          </ArtLinkContainer>
        </LinkImages>
      </TopSection>
      <BodySection>
        <Title>
          <p>About Doge Run</p>
        </Title>
        <BodyText>
          <BodyWrap>
            <p>
              This year's boom in the crypto gaming market has paved way for the
              rise of a new champion, Doge Run! The play to earn gaming industry
              has seen multiple crypto currencies explode to billions in market
              cap valuations.
              <br />
              Now it’s time to make way for Doge Run!
              <br />
              <br />
            </p>
            <p>
              Doge Run combines everyone's favourite meme-coin with the
              lucrative and trending gaming sector of the crypto market. Doge
              Run is inspired by “runner games” such as Geometry Dash, the goal
              of our game is to obtain the highest score possible by continuing
              to survive and run while collecting coins to boost your score.
              <br />
              <br />
            </p>
            <p>
              Now it’s time to introduce Doge Run and let it take over the P2E
              industry on BSC
              <br />
              <br />
            </p>
          </BodyWrap>
          <div></div>
          <Link to="/game">
            <Button>
              <p>Learn More</p>
            </Button>
          </Link>
          <div></div>
          <AboutImageSection>
            <FirstImage src="../../assets/gamesplash.png" />
            <SecondImage src="../../assets/dr001.png" />
          </AboutImageSection>
          <Title>
            <p>The $DRUN Token</p>
          </Title>
          <BodyWrap>
            <p>
              $DRUN is the native token of Doge Run project. To share in the
              riches of the play-to-earn gaming features players are required to
              hold $DRUN and contribute a small fee for each game. These $DRUN
              tokens are sent directly to the rewards wallet refilling the prize
              pool for our players. This ensures that the success of our game
              will go hand in hand with the success of the token, allowing huge
              potential profits for both traders and lovers of P2E games.
              <br />
              <br />
            </p>
          </BodyWrap>
          <BottomImageSection>
            <BigImage src="../../assets/dr002.png" />
            <PinkThing src="../../assets/pinkthing.png" />
            <TextSection>
              <TextSectionHeader>
                <TextSectionLogo src="../../assets/doghead.png" />
                <TextSectionTitle>
                  <p>Gameplay</p>
                  <p>Run & Earn</p>
                </TextSectionTitle>
              </TextSectionHeader>
              <TextSectioBody>
                <p>
                  Doge Run is an animated character based game, developed to
                  offer a fun experience for players seeking to earn income
                  while enjoying playing video games. Hold our native token
                  ($DRUN) and play Doge Run to share in the riches of the play
                  to earn gaming movement.
                </p>
              </TextSectioBody>
            </TextSection>
            <TextSection2>
              <TextSectionHeader>
                <TextSectionLogo src="../../assets/apehead.png" />
                <TextSectionTitle>
                  <p>NFT Utility</p>
                  <p>In Game Boosts</p>
                </TextSectionTitle>
              </TextSectionHeader>
              <TextSectioBody>
                <p>
                  The design and creation of our NFT collection is already
                  underway and will be released within the first quarter of our
                  project’s roadmap. The NFTs feature a unique utility which
                  allows players to use them in-game to boost game-play
                  attributes allowing for a competitive edge and enhanced yield
                  opportunities.
                </p>
              </TextSectioBody>
            </TextSection2>
            <TextSection3>
              <TextSectionHeader>
                <TextSectionLogo src="../../assets/puffer.png" />
                <TextSectionTitle>
                  <p>Leaderboards</p>
                  <p>Huge Bonus Rewards</p>
                </TextSectionTitle>
              </TextSectionHeader>
              <TextSectioBody>
                <p>
                  The Doge Run leader-board will be the ultimate way to earn
                  money in the game with sizeable rewards for those elite gamers
                  who hold the top few spots. Top scorers on the leader-board
                  will receive $DRUN prizes daily and weekly, offering constant
                  incentives to play and improve at the game.
                </p>
              </TextSectioBody>
            </TextSection3>
          </BottomImageSection>
          <JoinSection>
            <JoinText>
              <p>Join Our Community</p>
              <p>Help us grow and change the game.</p>
            </JoinText>
            <JoinButton>
              <a href="https://t.me/DogeRunToken" >Join our Telegram</a>
            </JoinButton>
            <JoinImage src="../../assets/dr004.png" />
            <GetInTouch>
              <GetInTouchTitles>
                <p>Get in Touch </p>
                <p>
                  Still Got Questions? <br /> Ask Away!
                </p>
              </GetInTouchTitles>
              <form id="contact-form" method="POST">
                <GetInTouchFname>
                  <p>First Name *</p>
                  <InputName />
                </GetInTouchFname>
                <GetInTouchLname>
                  <p>Last Name *</p>
                  <InputName />
                </GetInTouchLname>
                <GetInTouchEmail>
                  <p>Email *</p>
                  <InputEmail />
                </GetInTouchEmail>
                <GetInTouchMessage>
                  <p>Leave us a message...</p>
                  <InputMessage />
                </GetInTouchMessage>
                <GetInTouchButton type="submit">Submit</GetInTouchButton>
              </form>
            </GetInTouch>
            <Subscribe>
              <SubscribeTitle>
                <p>Subscribe to Our Newsletter</p>
              </SubscribeTitle>
              <SubscribeEmail>
                <p>Email *</p>
              </SubscribeEmail>
              <InputSubscribeEmail />
              <SubscribeButton type="submit">Join</SubscribeButton>
            </Subscribe>
          </JoinSection>
          <ParalaxSection>
            <GetInTouch2>
              <GetInTouchTitles>
                <p>Get in Touch </p>
                <p>
                  Still Got Questions? <br /> Ask Away!
                </p>
              </GetInTouchTitles>
              <form id="contact-form" method="POST">
                <GetInTouchFname>
                  <p>First Name *</p>
                  <InputName />
                </GetInTouchFname>
                <GetInTouchLname>
                  <p>Last Name *</p>
                  <InputName />
                </GetInTouchLname>
                <GetInTouchEmail>
                  <p>Email *</p>
                  <InputEmail />
                </GetInTouchEmail>
                <GetInTouchMessage>
                  <p>Leave us a message...</p>
                  <InputMessage />
                </GetInTouchMessage>
                <GetInTouchButton type="submit">Submit</GetInTouchButton>
              </form>
            </GetInTouch2>
            <Subscribe2>
              <SubscribeTitle>
                <p>Subscribe to Our Newsletter</p>
              </SubscribeTitle>
              <SubscribeEmail>
                <p>Email *</p>
              </SubscribeEmail>
              <InputSubscribeEmail />
              <SubscribeButton type="submit">Join</SubscribeButton>
            </Subscribe2>
          </ParalaxSection>
        </BodyText>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
