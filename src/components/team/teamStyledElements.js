import styled from 'styled-components'

export const DRTeam = styled.section`
width:100%;
height:100%;
background:#F6F4F0;
overflow: hidden;
`

export const TeamTopSection = styled.div`

background:#F6F4F0;

width:55%;
margin-top:100px;
margin-left:5%;
display:flex;
flex-direction:column;
justify-content:space-around;
animation: fadeInLeft 2s;

@media screen and (max-width:650px){
  width:80%;
  justify-content:center;
  align-content:center;
  animation: fadeInBottom 2s;
}
@keyframes fadeInBottom {
    from{
        opacity:0;
        transform:translateY(120px)
    }

    to{
        opacity:1;
        transform:translateY(0)
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
} `




export const Paragraph = styled.h1`
font:  normal normal normal 50px/1.4em 'suez one',serif;
color:#272443;
margin-top:0;
@media screen and (max-width:1000px){
  font:  normal normal normal 30px/1.4em 'suez one',serif;
}
@media screen and (max-width:650px){
  font:  normal normal normal 18px/1.4em 'suez one',serif;
}
`


export const Heading = styled.p`
font: normal normal bold 18px/1.4em roboto-thin,roboto,sans-serif;
color:#272443;
@media screen and (max-width:1000px){
  font: normal normal bold 18px/1.4em roboto-thin,roboto,sans-serif;
}
@media screen and (max-width:650px){
  font: normal normal bold 30px/1.4em roboto-thin,roboto,sans-serif;
}
`

//


export const TeamMidSection = styled.section`
margin-top:100px;
display:flex;
justify-content:space-between;

@media screen and (max-width:650px){
  flex-direction:column;
  
}
`
export const ForestImg = styled.img`
flex:1;
width:50%;
object-fit:cover;
@media screen and (max-width:650px){
  width:100%;
  height:
  
}

`
export const LeftContainer = styled.div`
flex:1;
background: #272443;
border:none;
display:flex;
flex-direction:column;
justify-content:center;
align-content:center;
align-items:center;
`
export const DogeParagraph = styled.p`
font: normal normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
color:white;

width:60%;
margin-top:5%;


`
export const DogeImg = styled.img`
max-width:380px;
@media screen and (max-width:650px){
  max-width:250px;

}

`

export const TeamFoundersSection = styled.section`
margin-top:100px;
/* min-width:1000px; */

`
export const FoundersContainer = styled.div`
padding:10px;
background: #272443;
width:80%;
height:auto;
margin-left:auto;
margin-right:auto;
position:relative;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const LeftLeave = styled.img`
width:247px;
top:-45px;
left:-90px;
position:absolute;

@media screen and (max-width:650px){
  width:130px;
  left:-60px;
}
`
export const RightLeave= styled.img`
width:247px;
top:-65px;
right:-100px;
position:absolute;
@media screen and (max-width:650px){
  width:130px;
  right:-60px;
}
`
export const FoundersHeading=styled.h1`
color:white;
font:  normal normal normal 35px/1.4em 'suez one',serif;
@media screen and (max-width:780px){
  font:  normal normal normal 30px/1.4em 'suez one',serif;
}
@media screen and (max-width:650px){
  font:  normal normal normal 28px/1.4em 'suez one',serif;
}
`

export const FirstFourFounders = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
flex:1;
@media screen and (max-width:1000px){
  flex-direction:column;
}

`
export const LastFourFounders = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
flex:1;
@media screen and (max-width:1000px){
  flex-direction:column;
}
`
export const TwoFoundersWrapper = styled.div`
display:flex;
flex-direction:row;
`
export const TeamFounder = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-content:center;
margin:10px;
flex:1;
margin:0 20px;

`
export const FounderImg = styled.img`
max-width:160px;
transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
&:hover{
    transform: scale(1.05);
    
    }

  @media screen and (max-width:650px){
 max-width:130px;
 &:hover{
    transform: scale(1.15);
    
    }
}
`


export const FounderName = styled.div`
    

p {
    margin: 4px;
    justify-content: left;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-variant: normal;
    max-width:130px;
    color:white;
  }
  p:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4em;
  }
  p:last-child {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
  }
`










// Bottom

export const TeamBottomSection = styled.section`
height:auto;
`
export const MainBottomContainer = styled.div`
margin:150px auto 0 auto;
width:80%;
display:flex;
@media screen and (max-width:1000px){
 flex-direction: column;
}
`
export const LeftBottomContainer = styled.div`
background-image: url("assets/Stylus.png");
flex:1;
display:flex;
justify-content:center;
flex-direction:column;
background-repeat:no-repeat;
background-size:cover;

@media screen and (max-width:1000px){
  align-items:center;
}


`
export const RightBottomContainer = styled.div`
background: #272443;
flex:1;
display:flex;

justify-content:center;
`
export const DogeRuningIcon = styled.img`
width:300px;
position:absolute;
top:-100px;
@media screen and (max-width:650px){
  width:200px;
  top:-50px;
}

`
export const JoinCommunityCard = styled.div`
margin:auto;
width:80%;
height:80%;
margin:40px;
border-radius:25px;
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
background:white;
@media screen and (max-width:1000px){
  align-items:center;
}

`
export const JoinButton = styled.button`
  height: 60px;
  width: 250px;
  background: #272443;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4em;
  margin-bottom: 30px;
  color: #fff;
  cursor: pointer;
  padding-bottom: 15px;
  a {
    text-decoration:none;
    color:white;
  }
  &:hover {
    background: rgb(218, 57, 43);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
  @media screen and (min-width: 1000px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 650px) {
    width:200px;
  }
`;
export const DogeBottomParagraph = styled.p`
font: normal normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
color:white;
margin:5% 10% 10% 10% ;


`
export const DogeBottomHeading = styled.h1`
font: normal normal normal 50px/1.4em 'suez one',serif;
color:white;
margin:5% 10% 0 10% ;
@media screen and (max-width:1000px){
  font: normal normal normal 30px/1.4em 'suez one',serif;
}
`
export const DogeBottomRightParagraph = styled.p`
font: normal normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
color:#272443;
margin:5% 10% 0 10%;
padding:20px 0;
`
export const JoinCommunityCardHeading = styled.h1`
font: normal normal bold 18px/1.4em roboto-thin,roboto,sans-serif;
color:#272443;
margin:100px 10% 0 10%;

`