import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    padding: 0 150px 0 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: 473px){
        padding: 0 !important;
    }
`

export const MainText = styled.div`
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 70px;
    text-align: center;
    color: #272D4E;
    @media (max-width: 473px){
        padding: 0 200px;
    }
`

Container.Body = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const YourCommerce = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 530px;
    height: 520px;
    margin-top: ${({i}) => i*40}px;
    margin-right: auto;
    margin-left: auto;
`

YourCommerce.Head = styled.div`
    width: 100%;
    height: 330px;
`

YourCommerce.HeadImg = styled.img`
    width: 530px !important;
    height: 330px !important;
`

YourCommerce.Title = styled.div`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 70px;
    color: #272D4E;
    margin-left: 40px;
`

YourCommerce.Text = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #94A2B3;
    margin-left: 40px;
`

YourCommerce.Link = styled.a`
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #299EF3;
    margin-left: 40px;
    margin-top: 10px;
    cursor: pointer;
`
