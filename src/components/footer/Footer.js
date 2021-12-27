import React from 'react'
import { Link } from "react-router-dom";
import {
  FooterContainer,
  WrapFooter,
  Contact,
  Nvaigation,
  Social,
  Copyright,
} from "././footerStyledElements";

const Footer = () => {
    return (
      <FooterContainer>
        <WrapFooter>
          <Contact>
            <p>Contact</p>
            <a href="mailto:info@dogeruntoken.com">info@dogeruntoken.com</a>
            <a href="mailto:dogeruninfo@yahoo.com">dogeruninfo@yahoo.com</a>
            <a href="https://t.me/DogeRunToken">t.me/DogeRunToken</a>
          </Contact>
          <Nvaigation>
            <p>Navigation</p>
            <Link to="/game">Game</Link>
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/team">Team</Link>
            <a href="/contact">Contact</a>
          </Nvaigation>
          <Social>
            <p>Social</p>
            <a href="https://www.twitter.com/DogeRunToken">Twitter</a>
            <a href="https://t.me/DogeRunToken">Telegram</a>
            <a href="https://www.youtube.com/watch?v=yl3bplsPOnA">YouTube</a>
            {/* <Link to="/">Discord</Link> */}
          </Social>
        </WrapFooter>
        <Copyright>© 2021 DogeRun.</Copyright>
      </FooterContainer>
    );
}

export default Footer
