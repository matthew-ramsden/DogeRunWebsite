import styled from 'styled-components'

//top
export const DRGame = styled.section`
width:100%;
height:100%;
background:#F6F4F0;
overflow: hidden;
`

export const DRGameTop = styled.div`
background:#F6F4F0;
height:30vh;
animation: fadeInLeft 2s;

@media screen and (max-width:650px){
    height:0;
    display:flex;
    justify-content:center;
    align-content:center;

}
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
`

export const DRGameTopCard = styled.div`
z-index:1;
width:40%;

min-width:500px;
margin-top:100px;
margin-left:5%;
display:flex;
flex-direction:column;
justify-content:center;
align-content:center;
padding:30px 30px;
background: #FFFFFF;
box-shadow: 7.07px 7.07px 10px rgba(237, 75, 64, 0.1);
border-radius: 20px;  
position:absolute;

@media screen and (max-width:650px){
   min-width:70%;
   margin-top:250px;
   margin-left:0;
  
}

`
export const DRGameTopCardHeader = styled.div`
display:flex;
flex-direction:row;
align-content:flex-start;
align-items:center;
`
export const Icon = styled.img`
height:90px;
background:#FFFFFF;
box-shadow: 7.07px 7.07px 10px rgba(237, 75, 64, 0.1);
border:10px solid white;
border-radius: 28px;

@media screen and (max-width:650px){
    height:70px;
}
`
export const IconTextContainer = styled.div`
margin: 0 0 0 3%;
`
export const DRHeading = styled.h3`
font: normal normal bold 21px/1.4em roboto-bold,roboto,sans-serif;
color:#272443;
@media screen and (max-width:650px){
  
}
`
export const DRParagraph= styled.p`
font: normal normal normal 16px/1.4em roboto-thin,roboto,sans-serif;
color:#272443;
`
export const DRGameTopCardHeading = styled.h1`
font:  normal normal normal 50px/1.4em 'suez one',serif;
color:#272443;
@media screen and (max-width:650px){
    font:  normal normal normal 30px/1.4em 'suez one',serif;
}
`
export const DRGameTopCardParagraph = styled.p`
color:#272443;
font: normal normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
`

//End of top section




export const DRGameMainParallax = styled.img`
height:687px;
width:100vw;

background-image: url("assets/gamesplash.png");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-attachment:fixed;
`


export const DRGameScreenshotsContainer =styled.div`
background:#F6F4F0;
padding:0 40px;
display:flex;
 justify-content:center;
flex-direction:column;
align-items:center;
@media screen and (max-width:650px){
    margin-top:170px;
    
}
@media screen and (max-width:480px){
    margin-top:250px;
}

@media screen and (max-width:400px){
    margin-top:420px;
   
}
;

`
export const DRGameScreenshotsHeading =styled.h1`
font:normal bold normal 34px/1.4em roboto-bold,roboto,sans-serif;
color: #272443;
@media screen and (min-width:1000px) {
    padding :50px 0;
};

`
export const DRGameScreenshotsImages =styled.div`
display:flex;
justify-content:space-around;
@media screen and (max-width:1000px) {
    display:flex;
    justify-content:center;
    flex-direction:column;
    
    align-items:center;
};
`
export const DrGameScreenshotImagesDemo =styled.img`
width:45%;
height:auto;
border-radius:30px;
cursor: pointer;
transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
&:hover{
    transform: scale(1.1);

    };
@media screen and (max-width:1000px) {
    width:100%;
    padding:15px 0;
};
@media screen and (max-width:650px) {
   min-width:370px;
   margin-top:35px;

}
`
export const DRGameSecondParallax = styled.div`
margin-top:100px;
text-align:center;
background-image: url("assets/gamesplash2.png");
background-position:center;
background-attachment:fixed;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:70vh;
width:100%;



`
export const DRGameSecondParallaxHeading = styled.h1`
color:white;
font:normal normal normal 50px/1.4em 'suez one',serif;
margin:0 10% 3% 10%;

animation: fadeIn 2s;
@keyframes fadeIn {
    from{
        opacity:0;
      
    }

    to{
        opacity:1;
       
    }
} 
@media screen and (max-width:710px) {
font:normal normal normal 30px/1.4em 'suez one',serif;
margin-bottom:80px;

}
`
export const DRGameSecondParallaxParagaph = styled.p`
font:  normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
color:white;
margin:0 10%;

animation: fadeIn 2s;
@keyframes fadeIn {
    from{
        opacity:0;
      
    }

    to{
        opacity:1;
       
    }
} 

`
export const DRGameBottomContainer = styled.div`
  width: 100vw;
  height: 20vh;
  position: relative;
  @media screen and (max-width: 710px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 710px) {
    height: 35vh;
  }
  a {
    text-decoration: none;
    color: #272443;
  }
`;
export const DRGameBottomContainerFishImage = styled.img`
  max-width: 250px;
  position: absolute;
  top: -50%;
  right: 15%;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  animation: rotate 1s;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 710px) {
    width: 200px;
    left: 0;
    top: -40%;
  }
  @media screen and (max-width: 390px) {
    width: 180px;
    top: -30%;
  }
`;

export const DRGameBottomContainerHeading = styled.h1`
  font: normal normal normal 50px/1.4em "suez one", serif;
  padding: 35px 45px;
  background: #ffffff;
  box-shadow: 7.07px 7.07px 10px rgba(237, 75, 64, 0.1);
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 2% auto 0 auto;
  color: #272443;
  animation: fadeIn 3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
    color: #272443;
  }
`;