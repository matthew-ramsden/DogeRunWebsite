import React from 'react'
import {
    DRRoadmap,
    Paragraph,
    RoadmapTopSection,
    SmallHeading,
    Heading,
    RoadmapMidSection,
    RoadmapImg,
    RoadmapHeading,
    FirstPhaseContainer,
    Phase,
} from '../roadmap/roadmapStyledElements'
import roadmap from "../../assets/roadmapalpha.png";
const Roadmap = () => {
    
    return (
      <DRRoadmap>
        <RoadmapTopSection>
          <SmallHeading>You're Early!</SmallHeading>
          <Heading>It's just the beginning</Heading>
          <Paragraph>
            After launch we will be continuously improving and evolving our
            project to give the best possible experience for our holders and
            provide a steady flow of content that keeps players engaged with the
            Doge Run project into the long term. Our product at launch
            demonstrates the ground floor for our project, a proof of concept
            and quality that our team will strive to maintain and build on
            throughout each stage of our roadmap. The sky is the limit for Doge
            and it's just one of many places you’ll get to join him as future
            levels release.
          </Paragraph>
        </RoadmapTopSection>

        <RoadmapMidSection>
          <RoadmapImg src={roadmap} />
          <RoadmapHeading>Our Roadmap</RoadmapHeading>
          <FirstPhaseContainer>
            <Phase>
              <p>Phase 1:</p>
              <ul>
                <li>Website Launch</li>
                <li>Whitepaper</li>
                <li>Game Development</li>
                <li>Social Media Growth</li>
                <li>500 Telegram Members</li>
                <li>Private Sale</li>
              </ul>
            </Phase>

            <Phase>
              <p>Phase 2:</p>
              <ul>
                <li>International AMAs</li>
                <li>First Level Of Game Ready</li>
                <li>3000 Telegram Members</li>
                <li>Pinksale Presale (KYC + Audit)</li>
                <li>Whitelist & BNB Giveaways + Community Competitions</li>
                <li>Post Launch Marketing</li>
              </ul>
            </Phase>

            <Phase>
              <p>Phase 3:</p>
              <ul>
                <li>6000 Telegram Members</li>
                <li>Launch on Pancakeswap</li>
                <li>24/7 Voice Chat (Moderated at all time zones)</li>
                <li>Dextools trending</li>
                <li>Twitter Influencers Campaign</li>
                <li>Telegram Invitations Referral Program</li>
                <li>Coingecko + CoinMarketCap Listing</li>
                <li>Investment Referral Program</li>
              </ul>
            </Phase>
            <Phase></Phase>
            <Phase>
              <p>Phase 4:</p>
              <ul>
                <li>15 000 Telegram Members</li>
                <li>10 000 Holders</li>
                <li>Launch P2E System</li>
                <li>NFT Launch</li>
                <li>New Levels Released</li>
                <li>CEX Listings</li>
                <li>Gaming Companies Partnerships</li>
              </ul>
            </Phase>

            <Phase>
              <p>Phase 5:</p>
              <ul>
                <li>30 000 Telegram Members</li>
                <li>50,000 holders</li>
                <li>NFT Utility</li>
                <li>Partnership with institutional crypto investors</li>
                <li>
                  DogeRun presentation at massive crypto and gaming conventions
                </li>
                <li>Metaverse Integration</li>
              </ul>
            </Phase>
          </FirstPhaseContainer>
        </RoadmapMidSection>
      </DRRoadmap>
    );
}   

export default Roadmap
