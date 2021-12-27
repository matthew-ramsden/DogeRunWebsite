import React from 'react'
import {
    DRNft,
    NftTopSection,
    TopCard,
    TopCardHeader,
    Icon,
    IconTextContainer,
    Heading,
    Paragraph,
    TopCardHeading,
    TopCardParagraph,
    DogeMoonImg,
    DogeMoonImg2,
    NftMainParallax,
    NftMainSection,
    SneakPeakHeading,
    SneakPeakContainer,
    SneakPeakImg,
    NftBottomSection,
    BottomHeading,
    BottomParagraph
}
    from './nftStyledElements'
import doge from "../../assets/dr001cut.png";
import sneakPeak1 from "../../assets/nft_.png";
import sneakPeak2 from "../../assets/nft_2.png";
import dogeMoon from '../../assets/moon.svg'
const Nft = () => {

    return (
    <DRNft>
        <NftTopSection>
        <TopCard>
            <TopCardHeader>
            <Icon src={doge}/>
            <IconTextContainer>
                <Heading>
                Doge Run NFT
                </Heading>
                <Paragraph>
                Boost Your Bags
                </Paragraph>
            </IconTextContainer>
            </TopCardHeader>
            <TopCardHeading>
            Unique utility NFTs with in-game Boosts
            </TopCardHeading>
            <TopCardParagraph>
            The creation of our NFT collection is already underway and will be released within the first quarter of our project’s roadmap. The NFTs feature a unique utility which allows players to use them in-game to boost game-play and get a competitive edge for enhanced yield opportunities. Boost those bags! 
            </TopCardParagraph>        
            <DogeMoonImg src={dogeMoon}/>
        </TopCard>
    </NftTopSection>
    
    <NftMainParallax  />

    <NftMainSection>
        <SneakPeakHeading> Sneak Peaks Coming Soon</SneakPeakHeading>
        <SneakPeakContainer>
            <SneakPeakImg src={sneakPeak1}/>
            <SneakPeakImg src={sneakPeak2}/>
            <SneakPeakImg src={sneakPeak1}/>
           
        </SneakPeakContainer>
        <DogeMoonImg2 src={dogeMoon}/>
    </NftMainSection>    

    <NftBottomSection>
        <BottomHeading>
        Run Your Own Way
        </BottomHeading>
        <BottomParagraph>
        Featuring 5 base characters with countless different looks ranging from low to high rarity, our NFT collection allows holders to access new playable characters in game corresponding to their own NFT, replacing and upgrading the default doge. Further utility for these NFTs will come down line. We plan to incorporate NFT staking to offer added benefits and incentives to holders who Hodl their NFT’s.
Be on the lookout for a release date soon to be announced on our website and social channels as these will NOT want to be missed.
        </BottomParagraph>
    </NftBottomSection>
    </DRNft>
    )
}

export default Nft
