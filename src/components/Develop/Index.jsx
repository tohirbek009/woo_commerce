import React from 'react'
import DevelopImg1 from '../assets/img/DevelopImg1.png'
import DevelopImg2 from '../assets/img/DevelopImg2.png'
import { Container, Block, BlockImgWrapper, Box } from './style'
import circle from '../assets/icons/circle.svg'
import smCircle from '../assets/icons/smCircle.png'
import mdCircle from '../assets/icons/mdCircle.svg'

const Index = () => {
    return (
        <Container>
            <Block>
                <BlockImgWrapper>
                    <img src={circle} alt=""  style={{
                        position: 'absolute',
                        top: '80px',
                        right: '90px',
                    }}/>
                    <img src={smCircle} alt=""  style={{
                        position: 'absolute',
                        top: '80px',
                        right: '490px',
                    }}/>
                    <BlockImgWrapper.Img src={DevelopImg1}/>
                </BlockImgWrapper>
                <Box>
                    <Box.Title>Develop <br/> Without Limits</Box.Title>
                    <Box.Text>
                        WooCommerce is developer friendly, too. Built with a REST API, 
                        WooCommerce is scalable and can integrate with virtually any service. 
                        Design a complex store from scratch, extend a store for a client, or
                        simply add a single product to a WordPress site—your store, your way.
                    </Box.Text>
                    <Box.Link>Read the Documention</Box.Link>
                </Box>
            </Block>
            <Block>
                <Box second>
                    <Box.Title>Know our <br/> Global Community</Box.Title>
                    <Box.Text>
                        WooCommerce is developer friendly, too. Built with a REST API, 
                        WooCommerce is scalable and can integrate with virtually any service. 
                        Design a complex store from scratch, extend a store for a client, or
                        simply add a single product to a WordPress site—your store, your way.
                    </Box.Text>
                    <Box.Link>Read the Documention</Box.Link>
                </Box>
                <BlockImgWrapper>
                    <img src={mdCircle} alt=""  style={{
                        position: 'absolute',
                        top: '-90px',
                        left: '300px',
                    }}/>
                    <img src={smCircle} alt=""  style={{
                        position: 'absolute',
                        top: '-110px',
                        left: '130px',
                        zIndex: '1000'
                    }}/>    
                    <BlockImgWrapper.Img src={DevelopImg2}/>
                </BlockImgWrapper>
            </Block>
        </Container>
    )
}

export default Index
