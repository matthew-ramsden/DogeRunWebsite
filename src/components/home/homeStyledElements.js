import styled from "styled-components";

export const HomeContainer = styled.div`
overflow: hidden;
`;

export const TopSection = styled.div`
  height: 565px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("assets/mainsplash.png");
  display: flex;
  flex-direction: column;
  align-items: left;
  @media screen and (max-width: 700px) {
    height: 380px;
  }
`;

export const LogoImage = styled.img`
  max-width: 517px;
  padding: 124px 0 0 18px;
`;

export const LogoText = styled.div`
  padding: 9px 0 0 50px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4em;

  @media screen and (max-width: 700px) {
    display:none;
  }
`;

export const LinkImages = styled.div`
  padding: 200px 25px 0 25px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ArtLinkContainer = styled.div`
  display: inline-flex;
  max-width: 556px;
  min-width: 150px;
  padding: 0 25px 25px 25px;
  width: 24%;
  flex-direction: row;
  position: relative;
  z-index: 1;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
&:hover{
    transform: scale(1.1);
    
    }
  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const ArtLinkImage = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: rgb(218 57 43 / 10%) 7px 7px 10px;
`;

export const ArtLinkText = styled.div`
  position: absolute;
  color: #fff;
  bottom: 60px;
  left: 70px;
  p {
    margin: 4px;
    justify-content: left;
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    line-height: 1.4em;
  }
  p:first-child {
    font-weight: 700;
    font-size: 21px;
  }
  p:last-child {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const BodySection = styled.div`
  position: relative;
  text-align: center;
  padding-top: 20%;
  background-color: #f6f4f0;
  @media screen and (max-width: 1060px) {
    padding-top: 5%;
  }
`;

export const Title = styled.div`
  p {
    font-family: "Suez One", serif;
    font-size: 50px;
    font-stretch: 1.4em;
    font-weight: normal;
    color: rgb(39, 36, 67);
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 36px;
    }
  }
`;

export const BodyText = styled.div`
  width: 100%;
`;

export const BodyWrap = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 720px;
  padding: 0 80px 0 80px;
  p {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
    color: rgb(39, 36, 67);
  }
  animation: fadeIn 2s;

@keyframes fadeIn {
    from { opacity:0; }
    to { opacity:1; }
} 
`;

export const Button = styled.div`
  display: inline-block;
  text-align: center;
  height: 60px;
  width: 142px;
  background: #bada55;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  p {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
    color: #fff;
    cursor: pointer;
  }
  &:hover {
    transition: 0.5s;
    background: #cef361;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    p {
      color: rgb(39, 36, 67);
    }
  }
  animation: fadeIn 2s;
  @keyframes fadeIn {
    from { opacity:0; }
    to { opacity:1; }
} 
`;
export const AboutImageSection = styled.div`
 display: inline-block;
  text-align: center;
  padding: 80px 80px 80px 120px;
  position: relative;
  max-width: 720px;

  animation: fadeInBottom 2s;
  @keyframes fadeInBottom {
    from{
        opacity:0;
        transform:translateY(120px)
    }

    to{
        opacity:1;
        transform:translateY(0)
    }
} 
  @media screen and (max-width: 600px) {
    padding: 80px 40px 80px 80px;
  }
`;

export const FirstImage = styled.img`
width: 100%;

border-radius: 30px;
`;

export const SecondImage = styled.img`
  max-width: 229px;
  width: 25%;
  position: absolute;
  bottom: 40px;
  left: 30px;
`;

export const BottomImageSection = styled.div`
  height: 1549px;
  position: relative;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;

export const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PinkThing = styled.img`
  position: absolute;
  width: 274px;
  bottom: 15%;
  left: 73%;

  animation: fadeInRight 2s;

  @keyframes fadeInRight {
      from{
          opacity:0;
          transform:translateX(120px)
      }

      to{
          opacity:1;
          transform:translateX(0)
  }
}

  @media screen and (max-width: 1780px) {
    left: 63%;
  }
  @media screen and (max-width: 1000px) {
    bottom: 78%;
    width: 150px;
  }
`;

export const TextSection = styled.div`
  max-width: 420px;
  width: 20%;
  position: absolute;
  background-color: #fff;
  bottom: 55%;
  left: 17%;
  border-radius: 20px;
  box-shadow: rgb(218 57 43 / 10%) 7px 7px 10px;

  animation: fadeInLeft 2s;

@keyframes fadeInLeft {
    from{
        opacity:0;
        transform:translateX(-120px)
    }

    to{
        opacity:1;
        transform:translateX(0)
    }
} 

  @media screen and (max-width: 1780px) {
    width: 30%;
    left: 7%;
  }
  @media screen and (max-width: 1000px) {
    position: relative;
    max-width: 100%;
    width: 70%;
    bottom: 0;
    left: 15%;
  }
`;

export const TextSection2 = styled.div`
  max-width: 420px;
  width: 20%;
  position: absolute;
  background-color: #fff;
  bottom: 46%;
  left: 70%;
  border-radius: 20px;
  box-shadow: rgb(218 57 43 / 10%) 7px 7px 10px;

  animation: fadeInLeft 2s;

@keyframes fadeInLeft {
    from{
        opacity:0;
        transform:translateX(-120px)
    }

    to{
        opacity:1;
        transform:translateX(0)
    }
  } 
  @media screen and (max-width: 1780px) {
    width: 30%;
    left: 60%;
  }
  @media screen and (max-width: 1000px) {
    position: relative;
    max-width: 100%;
    width: 70%;
    bottom: 0;
    left: 15%;
  }
`;

export const TextSection3 = styled.div`
  max-width: 420px;
  width: 20%;
  position: absolute;
  background-color: #fff;
  bottom: 15%;
  left: 17%;
  border-radius: 20px;
  box-shadow: rgb(218 57 43 / 10%) 7px 7px 10px;
  animation: fadeInLeft 2s;

  @keyframes fadeInLeft {
    from{
        opacity:0;
        transform:translateX(-120px)
    }

    to{
        opacity:1;
        transform:translateX(0)
    }
  } 

  @media screen and (max-width: 1780px) {
    width: 30%;
    left: 7%;
  }
  @media screen and (max-width: 1000px) {
    position: relative;
    max-width: 100%;
    width: 70%;
    bottom: 0;
    left: 15%;
  }
`;

export const TextSectionHeader = styled.div`
  padding: 50px 0 20px 0;
  display: flex;
`;

export const TextSectioBody = styled.div`
  p {
    padding: 0 30px 50px 30px;
    text-align: left;
  }
`;

export const TextSectionLogo = styled.img`
  display: inline-block;
  max-width: 80px;
  margin: 0 20px 10px 30px;
  background-color: #f6f4f0;
  border-radius: 30px;
  box-shadow: rgb(218 57 43 / 10%) 7px 7px 10px;
`;

export const TextSectionTitle = styled.div`
  display: inline-block;
  p {
    margin: 4px;
    justify-content: left;
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
  }
  p:first-child {
    font-weight: 700;
    font-size: 21px;
    line-height: 1.4em;
    @media screen and (max-width:500px){
      font-size:18px;
    }
  }
  p:last-child {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4em;
  }
`;

export const JoinSection = styled.div`
  height: 750px;
  background-color: #272443;
`;

export const JoinText = styled.div`
  max-width: 670px;
  padding: 60px 0 0 80px;
  p {
    color: #fff;
    margin: 4px;
    justify-content: left;
    text-align: start;
    font-style: normal;
    font-variant: normal;
  }
  p:first-child {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 21px;
    line-height: 1.4em;
  }
  p:last-child {
    font-family: "Suez One", serif;
    font-weight: normal;
    font-size: 50px;
    line-height: 1.4em;
    @media screen and (max-width: 1160px) {
      font-size: 38px;
    }
  }
`;

export const JoinButton = styled.div`
  margin-left: 80px;
  height: 60px;
  width: 170px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display:flex;
  justify-content:center;
  a {
    text-decoration: none;
    padding-top: 18px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
    color: rgb(39, 36, 67);
    text-align: center;
    cursor: pointer;
  }
  &:hover {
    background: rgb(199, 199, 199);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
    p {
      color: #fff;
    }
  }
`;

export const JoinImage = styled.img`
  max-width: 488px;
  position: absolute;
  left: 60%;
  bottom: 500px;
  @media screen and (max-width: 1160px) {
    left: 5%;
    bottom: 1050px;
  }
`;

export const GetInTouch = styled.div`
  left: 15%;
  bottom: 85px;
  position: absolute;
  margin: 120px 0 0 20px;
  width: 440px;
  height: 690px;
  background: #fff;
  box-shadow: 7.07px 7.07px 10px rgba(218, 57, 43, 0.1);
  border-radius: 20px;
  text-align: start;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-size: 15;
    line-height: 1.4em;
  }
  @media screen and (max-width: 1160px) {
    display: none;
  }
`;



export const GetInTouchTitles = styled.div`
  padding: 30px 0 10px 45px;
  p {
    margin: 4px;
    justify-content: left;
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
  }
  p:first-child {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 33px;
    line-height: 1.4em;
  }
  p:last-child {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
  }
`;

export const GetInTouchFname = styled.div`
  margin: 0 20px 10px 45px;
  display: inline-block;
`;

export const InputName = styled.input`
  background: #ffffff;
  border: 1px solid #272443;
  box-sizing: border-box;
  border-radius: 10px;
  width: 165px;
  height: 59px;
  &:hover {
    border: 2px solid #272443;
  }
`;

export const InputEmail = styled.input`
  background: #ffffff;
  border: 1px solid #272443;
  box-sizing: border-box;
  border-radius: 10px;
  width: 351px;
  height: 59px;
  &:hover {
    border: 2px solid #272443;
  }
`;

export const GetInTouchLname = styled.div`
  display: inline-block;
`;
export const GetInTouchEmail = styled.div`
  margin: 0 20px 30px 45px;
`;
export const GetInTouchMessage = styled.div`
  margin: 0 20px 20px 45px;
`;

export const InputMessage = styled.textarea`
  background: #ffffff;
  border: 1px solid #272443;
  box-sizing: border-box;
  border-radius: 10px;
  width: 351px;
  height: 100px;
  &:hover {
    border: 2px solid #272443;
  }
`;

export const GetInTouchButton = styled.button`
  margin: 0 20px 10px 45px;
  height: 60px;
  width: 351px;
  background: #272443;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4em;
  color: #fff;
  cursor: pointer;
  padding-bottom: 15px;
  &:hover {
    background: rgb(218, 57, 43);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
`;

export const Subscribe = styled.div`
  position: absolute;
  bottom: 85px;
  left: 60%;
  margin: 120px 0 0 20px;
  width: 388px;
  height: 210px;
  background: rgb(199, 199, 199);
  box-shadow: 7.07px 7.07px 10px rgba(218, 57, 43, 0.1);
  border-radius: 20px;
  text-align: start;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-size: 15;
    line-height: 1.4em;
    color: #fff;
  }
  @media screen and (max-width: 1160px) {
    display: none;
  }
`;

export const GetInTouch2 = styled.div`
  width: 440px;
  height: 690px;
  background: #fff;
  box-shadow: 7.07px 7.07px 10px rgba(218, 57, 43, 0.1);
  border-radius: 20px;
  text-align: start;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-size: 15;
    line-height: 1.4em;
  }

  @media screen and (min-width: 1160px) {
    display: none;
  }
`;

export const Subscribe2 = styled.div`
  margin-top: 40px;
  width: 388px;
  height: 210px;
  background: rgb(199, 199, 199);
  box-shadow: 7.07px 7.07px 10px rgba(218, 57, 43, 0.1);
  border-radius: 20px;
  text-align: start;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-size: 15;
    line-height: 1.4em;
    color: #fff;
  }
  @media screen and (min-width: 1160px) {
    display: none;
  }
`;

export const SubscribeTitle = styled.div`
  margin: 30px 0 10px 25px;
  p {
    margin: 4px;
    justify-content: left;
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 21px;
    line-height: 1.4em;
    color: #fff;
  }
`;

export const SubscribeEmail = styled.div`
  margin-left: 30px;
`;

export const InputSubscribeEmail = styled.input`
  margin-left: 30px;
  display: inline-block;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  width: 238px;
  height: 59px;
  &:hover {
    border: 2px solid #272443;
  }
`;

export const SubscribeButton = styled.button`
  display: inline-block;
  margin: 0 0 0 25px;
  height: 60px;
  width: 79px;
  background: #272443;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4em;
  color: #fff;
  cursor: pointer;
  padding-bottom: 15px;
  &:hover {
    background: rgb(218, 57, 43);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
`;

export const ParalaxSection = styled.div`
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("assets/vortex.png");

  }
  @media screen and (max-width: 1160px) {
    height: 1000px;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;


