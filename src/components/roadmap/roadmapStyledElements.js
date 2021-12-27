import styled from "styled-components";

export const LinkR = styled.span`
  a {
    text-decoration: none;
    color: #272443;
    cursor: none;
  }
`;

export const DRRoadmap = styled.section`
  background: #f6f4f0;
  overflow: hidden;
`;

export const RoadmapTopSection = styled.div`
  margin-top: 100px;
  margin-left: 5%;
  display: flex;
  flex-direction: column;

  animation: fadeInLeft 2s;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-120px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const SmallHeading = styled.h3`
  font: normal normal bold 21px/1.4em roboto-bold, roboto, sans-serif;
  color: #272443;
`;

export const Heading = styled.h1`
  font: normal normal normal 50px/1.4em "suez one", serif;
  color: #272443;
  width: 55%;
  @media screen and (max-width: 1000px) {
    width: 95%;
  }
`;

export const Paragraph = styled.p`
  font: normal normal normal 18px/1.4em roboto-thin, roboto, sans-serif;
  color: #272443;
  width: 55%;
  @media screen and (max-width: 1000px) {
    width: 95%;
  }
  }
`;

export const RoadmapMidSection = styled.section`
  margin-top: 100px;
  min-height: 1000px;
  background: #272443;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const RoadmapImg = styled.img`
  max-width: 1752px;
  width: 100%;
  min-height: 500px;
  object-fit: cover;
  position: absolute;
  top: -150px;
  @media screen and (max-width: 1000px) {
    min-height: 400px;
  }
  @media screen and (max-width: 700px) {
    min-height: 300px;
  }
`;
export const RoadmapHeading = styled.h2`
  margin-top: 15%;
  color: #fff;
  font-family: "Suez One", serif;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 1.4em;
  @media screen and (max-width: 1900px) {
    margin-top: 20%;
  }
  @media screen and (max-width: 1160px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 100px;
  }
`;

export const FirstPhaseContainer = styled.div`
  padding-bottom: 50px;
  width: 60%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-size: 18px;
  line-height: 1.4em;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const Phase = styled.div`
  :first-child {
    flex: 33%;
  }
  :nth-child(2) {
    flex: 33%;
  }
  :nth-child(3) {
    flex: 33%;
  }
  :nth-child(4) {
    flex: 10%;
  }
  :nth-child(5) {
    flex: 33%;
  }
  :nth-child(6) {
    flex: 33%;
  }

  p {
    font-weight: 700;
  }
  li {
    font-weight: 200;
    max-width: 300px;
  }

  @media screen and (max-width: 1100px) {
    :first-child {
      flex: 50%;
    }
    :nth-child(2) {
      flex: 50%;
    }
    :nth-child(3) {
      flex: 50%;
    }
    :nth-child(4) {
      display: none;
    }
    :nth-child(5) {
      flex: 50%;
    }
    :nth-child(6) {
      flex: 33%;
    }
  }
  @media screen and (max-width: 900px) {
    :first-child {
      flex: 100%;
    }
    :nth-child(2) {
      flex: 100%;
    }
    :nth-child(3) {
      flex: 100%;
    }
    :nth-child(4) {
      display: none;
    }
    :nth-child(5) {
      flex: 100%;
    }
    :nth-child(6) {
      flex: 100%;
    }
  }
`;
