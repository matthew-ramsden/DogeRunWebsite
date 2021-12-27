import styled from "styled-components";

export const FooterContainer = styled.div`
    bottom: 0;
    background: #f6f4f0;
    padding-top: 40px;
`;
export const WrapFooter = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 70%;
  margin-left: 15%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding-bottom: 40px;
  p {
    padding-top: 40px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    margin-bottom: 21px;
    font-weight: 700;
    font-size: 21px;
    line-height: 1.4em;
    color: #272443;
  }
  a {
    padding-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.4em;
    text-decoration: none;
    color: #787878;
  }

  @media screen and (max-width: 950px) {
    width: 92%;
    margin-left: 4%;
    flex-wrap: wrap;
    padding-bottom: 15px;
    p {
      padding: 0;
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: start;
  @media screen and (max-width: 950px) {
    flex: 100%
  }
`;
export const Nvaigation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: start;
  @media screen and (max-width: 950px) {
    flex: 50%;
  }
`;
export const Social = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: start;
  @media screen and (max-width: 950px) {
    flex: 50%;
  }
`;
export const Copyright = styled.div`
  text-align: center;
  padding: 40px 0 40px 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4em;
  text-decoration: none;
  color: #787878;
`;
