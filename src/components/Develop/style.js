import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: #7854F7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 350px;
    margin-top: 160px;
`

export const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const BlockImgWrapper = styled.div`
    width: 450px;
    height: 550px;
    position: relative;
`
BlockImgWrapper.Img = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: -80px;

`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 360px;
    margin-top: 40px;
    margin-right: ${({second}) => !second && '220px'};
    margin-left: ${({second}) => second && '220px'};
    @media (max-width: 614px){
        margin-left: auto;
        margin-right: auto;
    }
`

Box.Title = styled.div`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    color: #FFFFFF;
`
Box.Text = styled.div`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;   
    color: #FFFFFF;
    width: 480px;
`

Box.Link = styled.div`
    background: #70C217;
    border-radius: 60px;
    width: 250px;
    padding: 22px 6px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover{
        background-color: #70A111;
        transform: scale(1.04);
    }
`
