import styled from "styled-components";


export const DRHeader = styled.div`
  max-height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 4%;
  right: 4%;
  z-index: 10;


`;

export const DRHeaderLogo = styled.div`
  width: 166px;
  text-align: center;

  animation: fadeInTop 2s;

  @keyframes fadeInTop {
    from {
      transform: translateY(-120px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const DRHeaderLogoContainer = styled.div`
  height: 60px;
  background: #fff;
  box-shadow: 7.07px 7.07px 10px 0px rgba(39, 36, 67, 0.4);
  border-radius: 0 0 10px 10px;
`;

export const DRHeaderLogoContainerIcon = styled.img`
  width: 152px;
  padding-top: 11px;
`;

export const DRHeaderMenu = styled.div`
  animation: fadeInTop 2s;

  @keyframes fadeInTop {
    from {
      transform: translateY(-120px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const DRHeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  flex: 1;
  justify-content: right;
  background: #fff;
  box-shadow: 7.07px 7.07px 10px 0px rgba(39, 36, 67, 0.4);
  border-radius: 0 0 10px 10px;

  a {
    font: normal normal 16px/1.4em roboto-thin, roboto, sans-serif;
    padding: 19px 25px 0 25px;
    flex-wrap: nowrap;
    text-decoration: none;
    color: rgb(39, 36, 67);
    height: 41px;
  }
  a:nth-child(3) {
    background: green;
    color: #fff;
  }
  a:first-child {
    border-radius: 0 0 0 10px;
  }
  a:last-child {
    border-radius: 0 0 10px 0;
  }
  @media (max-width: 1200px) {
    display: none;
  }
  a:hover {
    background: rgb(39, 36, 67);
    color: #fff;
  }
`;

export const DRHeaderBurger = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 7.07px 7.07px 10px 0px rgba(39, 36, 67, 0.4);
  border-radius: 0 0 10px 10px;
  @media (min-width: 1201px) {
    display: none;
  } ;
`;

export const DRHeaderBurgerMenu = ({ isToggled, toggleSideNav }) => {
  return (
    <DRHeaderBurgerMenuToggle isOpen={isToggled} onClick={toggleSideNav}>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </DRHeaderBurgerMenuToggle>
  );
};

export const DRHeaderBurgerMenuToggle = styled.div`
  transition: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  width: 41px;
  background: transparent;
  cursor: pointer;
  padding-left: 19px;

  
  &:focus {
    outline: none;
  }

  div {
    border-radius: 10px;
    transition: width 200ms ease-out, height 0.3s linear, transform 0.3s linear,
      opacity 300ms linear;
    position: relative;
    transform-origin: 1px;
    min-height: 7px;

    span {
      background: #ffffff;
      height: 3px;
      display: block;
      margin: 2px 0;
      border-radius: 5px;
      background: rgb(39, 36, 67);
    }

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ isOpen }) => (isOpen ? "22px" : "20px")};
    }

    :nth-child(2) {
      width: ${({ isOpen }) => (isOpen ? "0" : "20px")};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ isOpen }) => (isOpen ? "22px" : "20px")};
    }
  }
`;

export const DRHeaderBurgerNav = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  background: white;
  opacity: 80%;
  width: 300px;
  list-style: none;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  border-radius: 30px 0 0 30px;

  li {
    padding: 15px;
    cursor:pointer;
    
  }

  li:hover {
    background: rgb(39, 36, 67);
    a{
      color: #fff;
      
    }
  }

  a {
    text-decoration: none;
    color: rgb(39, 36, 67);
    display:block;
    width:100%;
    height:100%;
    font: normal normal bold 24px/1.4em roboto-thin, roboto, sans-serif;
  }
  
`;
