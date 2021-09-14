import styled from "styled-components";

export const Cardd = styled.div`
width: 406px;
height: 248px;
background-color: white;
position: absolute;
right: 286px;
top: 140px;
border-radius: 25px;
padding: 30px 22px;

`
export const One = styled.div`
display: flex;
border-bottom: 1px solid #E5EFFF;
padding-bottom: 20px;
justify-content: space-around;
padding-top: ${({next}) => next&&"20px"};
`
export const Img = styled.img`
    width: 80px !important;
    height: 32px !important;
`
export const Text = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 25px;
color: #94A2B3;
`
export const Two = styled.div`
display: flex;
border-bottom: 1px solid #E5EFFF;
padding-bottom: 20px;
justify-content: space-around;
padding-top: ${({next}) => next&&"20px"};
`
export const Three = styled.div`
display: flex;
border-bottom: 1px solid #E5EFFF;
padding-bottom: 20px;
justify-content: space-around;
padding-top: ${({next}) => next&&"20px"};
`