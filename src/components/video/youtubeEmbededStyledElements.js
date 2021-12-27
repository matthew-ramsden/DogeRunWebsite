import styled from 'styled-components'

export const YoutubeIframe = styled.iframe`
width:780px;
height:499px;
border:0;
border-radius:30px;
@media screen and (max-width:800px){
   max-width:650px;
    max-height:400px;
}
@media screen and (max-width:650px){
   max-width:400px;
    max-height:200px;
}
@media screen and (max-width:400px){
    max-width:370px;
    max-height:180px;
}

`