import React from 'react';
import { Block, Pages, Text, Span, Right, In, Lupa, Up, Img } from './style';
import logo from '../Assets/svg/logo1.svg';
import lupa from '../Assets/svg/lupa.svg'
import {Link} from 'react-router-dom';


function index() {
    return (
        <Block>
            <Text>
                <Img src={logo}/>       
            </Text>
            <Pages>
                <Link to={'/sell'}>
                    <Span>Sell</Span>
                </Link>
                <Link to={'/marketplace'}>
                    <Span>Marketplace</Span>
                </Link>
                <Link to={'/community'}>
                    <Span>Community</Span>
                </Link>
                <Link to={'develop'}>
                    <Span>Develop</Span>
                </Link>
                <Link to={'resources'}>
                    <Span>Resources</Span>
                </Link>
            </Pages>
            <Right>
                <In>Log in</In>
                <Up>Get started</Up>
                <Lupa src={lupa}/>
            </Right>
        </Block>
    )
}

export default index
