import styled from 'styled-components'

export const DRNft = styled.section`
width:100%;
height:100%;
background:#F6F4F0;
overflow: hidden;
`

export const NftTopSection = styled.div`
background:#F6F4F0;
height:30vh;

animation: fadeInLeft 2s;

@media screen and (max-width:650px){
    height:0;
    display:flex;
    justify-content:center;
    align-content:center;
    animation:fadeInBottom 2s
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
   
} 
`

export const TopCard = styled.div`
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
   margin-top:350px;
   margin-left:0;
  
}
`
export const TopCardHeader = styled.div`
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
`
export const IconTextContainer = styled.div`
margin: 0 0 0 3%;
`
export const Heading = styled.h3`
font: normal normal bold 21px/1.4em roboto-bold,roboto,sans-serif;
color:#272443;
`
export const Paragraph= styled.p`
font: normal normal normal 16px/1.4em roboto-thin,roboto,sans-serif;
color:#272443;
`
export const TopCardHeading = styled.h1`
font:  normal normal normal 50px/1.4em 'suez one',serif;
color:#272443;
@media screen and (max-width:650px){
    font:  normal normal normal 30px/1.4em 'suez one',serif;
}
`
export const TopCardParagraph = styled.p`
color:#272443;
font: normal normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
@media screen and (max-width:650px){
    font: normal normal normal 14px/1.4em roboto-thin,roboto,sans-serif;
}
`


export const DogeMoonImg = styled.img`
width:400px;
position:absolute;
bottom:-350px;
right:150px;
@media screen and (max-width:1000px){
    display:none;
}
`


export const NftMainParallax = styled.img`
height:680px;
width:100vw;
background-image: url("assets/paw.png");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-attachment:fixed;
@media screen and (max-width:650px){
    height:680px;
}
`

// mid section

export const NftMainSection = styled.section`
background:#F6F4F0;
padding:0 40px;
display:flex;
justify-content:center;
flex-direction:column;


@media screen and (max-width:650px){
    padding:200px 0 0 0;
}
@keyframes fadeInLeft {
    from{
        opacity:0;
        transform:translateX(-220px)
    }

    to{
        opacity:1;
        transform:translateX(0)
    }
`
export const DogeMoonImg2 = styled.img`
max-width:250px;
margin-right:auto;
margin-left:auto;
display:none;
animation: fadeInLeft 2s;
@media screen and (max-width:1000px) {
    text-align:center;
    align-items:center;
    display:block;
}
`

export const SneakPeakHeading = styled.h1`
font:normal bold normal 34px/1.4em roboto-bold,roboto,sans-serif;
color: #272443;
margin-left:5%;
@media screen and ( max-width:650px){
    font:normal bold normal 28px/1.4em roboto-bold,roboto,sans-serif;

}

`

export const SneakPeakContainer = styled.div`
display:flex;
justify-content:space-around;
@media screen and (max-width:1000px) {
    /* display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center; */
};
`


export const SneakPeakImg= styled.img`
width:25%;
min-width:100px;

border-radius:30px;
cursor: pointer;
transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
&:hover{
    transform: scale(1.1);
    
    }
@media screen and (max-width:1000px) {
    width:80%;
    margin:10px;
    padding:15px 0;
}
`

export const NftBottomSection = styled.section`
background:#272443;
margin-top:100px;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
height:40vh;
width:100%;

@media screen and (max-width:650px){
    
    height:60vh;
}
`
export const BottomHeading = styled.h1`
color:white;
font:normal normal normal 50px/1.4em 'suez one',serif;
@media screen and (max-width:650px){
    font:  normal normal normal 30px/1.4em 'suez one',serif;
}
`
export const BottomParagraph = styled.p`
font:  normal normal 18px/1.4em roboto-thin,roboto,sans-serif;
color:white;
margin:0 10%;
padding-bottom:30px;
@media screen and (max-width:650px){
    font: normal normal normal 14px/1.4em roboto-thin,roboto,sans-serif;
}


`