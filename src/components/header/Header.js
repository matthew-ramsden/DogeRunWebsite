import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  DRHeader,
  DRHeaderLogo,
  DRHeaderLogoContainer,
  DRHeaderLogoContainerIcon,
  DRHeaderMenu,
  DRHeaderMenuContainer,
  DRHeaderBurger,
  DRHeaderBurgerMenu,
  DRHeaderBurgerNav,
} from "./headerStyledElements.js";

const Header = () => {
  const [isToggled, setToggle] = useState(false);
  const toggleSideNav = () => {
    setToggle(!isToggled);
  };

  return (
    <DRHeader>
      <DRHeaderLogo>
        <DRHeaderLogoContainer>
          <Link to="/">
            <DRHeaderLogoContainerIcon src="/assets/drunlogo2.svg" />
          </Link>
        </DRHeaderLogoContainer>
      </DRHeaderLogo>
      <DRHeaderMenu>
        <DRHeaderMenuContainer>
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/nft">NFT</Link>
          <Link to="/roadmap">Roadmap</Link>
          
          <a href="/assets/whitepaper.pdf" target="_blank">
            Whitepaper
          </a>
          {/* <a href="https://www.pinksale.finance/#/launchpad/0x2d5D62a1753B6a285DEB311a3eE707Bd66752bd5?chain=BSC">
            Presale
          </a> */}
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x29b86ecb7d434a5571f959f1c9a812b7aab34894">
            Buy
          </a>
          <Link to="/team">Team</Link>
          <a href="javascript: document.body.scrollIntoView(false);">Contact</a>
          <Outlet />
        </DRHeaderMenuContainer>
      </DRHeaderMenu>
      <DRHeaderBurger>
        <DRHeaderBurgerMenu
          isToggled={isToggled}
          toggleSideNav={toggleSideNav}
        />
        <DRHeaderBurgerNav show={isToggled}>
          <li>
            <Link onClick={toggleSideNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleSideNav} to="/game">
              Game
            </Link>
          </li>
          <li>
            <Link onClick={toggleSideNav} to="/nft">
              NFT
            </Link>
          </li>
          <li>
            <Link onClick={toggleSideNav} to="/roadmap">
              Roadmap
            </Link>
          </li>
          <li>
            <a
              onClick={toggleSideNav}
              href="/assets/whitepaper.pdf"
              target="_blank"
            >
              Whitepaper
            </a>
          </li>
          <li>
            {/* <a
              onClick={toggleSideNav}
              href="https://www.pinksale.finance/#/launchpad/0x2d5D62a1753B6a285DEB311a3eE707Bd66752bd5?chain=BSC"
            >
              Presale
            </a> */}
            <a onClick={toggleSideNav}
              href="https://pancakeswap.finance/swap?outputCurrency=0x29b86ecb7d434a5571f959f1c9a812b7aab34894"
            >
              Buy
            </a>
          </li>
          <li>
            <Link onClick={toggleSideNav} to="team">
              Team
            </Link>
          </li>
           <li>
              <Link onClick={toggleSideNav} to="demo">
                Demo
              </Link>
            </li> 
          <li>
            <a
              onClick={toggleSideNav}
              href="javascript: document.body.scrollIntoView(false);"
            >
              Contact
            </a>
          </li>
          <Outlet />
        </DRHeaderBurgerNav>
      </DRHeaderBurger>
    </DRHeader>
  );
};

export default Header;
