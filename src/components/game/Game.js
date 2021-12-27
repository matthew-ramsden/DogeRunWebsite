import React from "react";
import { Link } from "react-router-dom";

import {
  DRGame,
  DRGameTop,
  DRGameTopCard,
  DRGameTopCardHeader,
  Icon,
  IconTextContainer,
  DRHeading,
  DRParagraph,
  DRGameTopCardHeading,
  DRGameTopCardParagraph,
  DRGameMainParallax,
  DRGameScreenshotsContainer,
  DRGameScreenshotsImages,
  DrGameScreenshotImagesDemo,
  DRGameSecondParallax,
  DRGameSecondParallaxHeading,
  DRGameSecondParallaxParagaph,
  DRGameBottomContainer,
  DRGameBottomContainerFishImage,
  DRGameBottomContainerHeading,
} from "./gameStyledElements";
import YoutubeEmbeded from "../video/YoutubeEmbeded";

import seademo from "../../assets/seademo.png";
import jungledemo from "../../assets/jungledemo.png";
import fish from "../../assets/puffer.png";
import doge from "../../assets/dr001cut.png";
const Game = () => {
  return (
    <DRGame>
      <DRGameTop>
        <DRGameTopCard>
          <DRGameTopCardHeader>
            <Icon src={doge} />
            <IconTextContainer>
              <DRHeading>Doge Run</DRHeading>
              <DRParagraph>Play to Earn Platform Fun</DRParagraph>
            </IconTextContainer>
          </DRGameTopCardHeader>
          <DRGameTopCardHeading>
            A One-of-a-Kind Game That Offers Endless Excitement and Gains.
          </DRGameTopCardHeading>
          <DRGameTopCardParagraph>
            Doge Run is an animated character based game developed to offer a
            fun and simple experience for players seeking to earn income while
            enjoying playing video games. Designed in a unique fashion to allow
            players their choice of varying difficulty from start to finish,
            balancing their own risk to reward and offering a diverse gaming
            experience which never gets boring.
          </DRGameTopCardParagraph>
        </DRGameTopCard>
      </DRGameTop>

      <DRGameMainParallax />

      <DRGameScreenshotsContainer>
        <DRGameTopCardHeading>DogeRun Trailer</DRGameTopCardHeading>
        <YoutubeEmbeded embedId="yl3bplsPOnA" />
        <DRGameTopCardHeading>Screenshots</DRGameTopCardHeading>
        <DRGameScreenshotsImages>
          <DrGameScreenshotImagesDemo src={seademo} />
          <DrGameScreenshotImagesDemo src={jungledemo} />
        </DRGameScreenshotsImages>
      </DRGameScreenshotsContainer>

      <DRGameSecondParallax>
        <DRGameSecondParallaxHeading>
          Grow Your Bags Racing Through 5 Levels of Platform Fun
        </DRGameSecondParallaxHeading>

        <DRGameSecondParallaxParagaph>
          Inspired and informed by classic platform titles Geometry Dash and
          Mario Run, the player guides Doge through level environments as fast
          as possible, collecting coins and special power ups while trying to
          dodge and avoid enemies/obstacles.
        </DRGameSecondParallaxParagaph>
      </DRGameSecondParallax>

      <DRGameBottomContainer>
        <DRGameBottomContainerFishImage src={fish} />
        <Link to="/demo">
          <DRGameBottomContainerHeading>
            Play
          </DRGameBottomContainerHeading>
        </Link>
      </DRGameBottomContainer>
    </DRGame>
  );
};

export default Game;
