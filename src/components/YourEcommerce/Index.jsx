import React from 'react'
import { Container,MainText, YourCommerce } from './style'
import { CardData } from '../data/DevelopmentData'
import appleSvg from '../assets/icons/apple.svg'
import card1AbsImg from '../assets/img/card1AbsImg.png'
import square from '../assets/img/square.png'
import mailchimp from '../assets/img/mailchimp.png'
import facebook from '../assets/img/facebook.png'
import jetback from '../assets/img/jetback.png'
import googleAds from '../assets/img/googleAds.png'
import card3AbsImg2 from '../assets/img/card3AbsImg2.png'
import card3AbsImg1 from '../assets/img/card3AbsImg1.png'

const Index = () => {
    return (
        <Container>
            <MainText>Your eCommerce <br/> made simple</MainText>
            <Container.Body>
                {
                    CardData.map(({image, title, text, link}, index) => (
                        <YourCommerce i = {index}>

                            <img src={appleSvg} alt="SVG IS NOT EXISTS" style={{
                                display: `${index !== 0 && "none"}`,
                                position: "absolute",
                                top: '25px',
                                left: "-25px",
                                cursor: "pointer"
                            }} />

                            <img src={card1AbsImg} alt="" style={{
                                display: `${index !== 0 && "none"}`,
                                position: "absolute",
                                top: '45px',
                                left: "-110px",
                            }} />

                            <img src={square} alt="" style={{
                                display: `${index !== 1 && "none"}`,
                                position: "absolute",
                                top: '-40px',
                                left: "40px",
                            }} />

                            <img src={mailchimp} alt="" style={{
                                display: `${index !== 1 && "none"}`,
                                position: "absolute",
                                top: '10px',
                                right: "40px",
                            }} />

                            <img src={facebook} alt="" style={{
                                display: `${index !== 1 && "none"}`,
                                position: "absolute",
                                top: '80px',
                                left: "40px",
                            }} />

                            <img src={jetback} alt="" style={{
                                display: `${index !== 1 && "none"}`,
                                position: "absolute",
                                top: '105px',
                                right: "90px",
                            }} />


                            <img src={googleAds} alt="" style={{
                                display: `${index !== 1 && "none"}`,
                                position: "absolute",
                                top: '200px',
                                right: "160px",
                            }} />


                            <img src={card3AbsImg1} alt="" style={{
                                display: `${index !== 2 && "none"}`,
                                position: "absolute",
                                top: '-40px',
                                left: "20px",
                                transform: "scale(0.8)",
                            }} />

                            <img src={card3AbsImg2} alt="" style={{
                                display: `${index !== 2 && "none"}`,
                                position: "absolute",
                                top: '100px',
                                right: "-60px",
                                transform: "scale(0.8)",
                            }} />


                            <YourCommerce.Head>
                                <YourCommerce.HeadImg src={image}/>
                            </YourCommerce.Head>
                            <YourCommerce.Title>{title}</YourCommerce.Title>
                            <YourCommerce.Text>{text}</YourCommerce.Text>
                            <YourCommerce.Link href='#'>{link}</YourCommerce.Link>
                        </YourCommerce>
                    ))
                }
            </Container.Body>
        </Container>
    )
}

export default Index
