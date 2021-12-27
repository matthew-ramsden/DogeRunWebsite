import styled from "styled-components";

export const DogePage = styled.div`
`

export const DogeWrapper = styled.div`
  max-width: 1920px;
  margin: 100px auto 50px auto;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    font-size: 22px;
  }
`;

export const Loading = ({prog}) => {
  return (
    <div>
      {prog !== 1 ? <p>Loading {parseInt(prog * 100)} percent...</p> : null}
    </div>
  );
};