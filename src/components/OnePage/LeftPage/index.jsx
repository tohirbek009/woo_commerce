import React from 'react';
import {Title, Textt, Text, Buttons, Start, Extend} from './Style'

function index() {
    return (
        <div>
            <Title>Building exactly the eCommerce website you want.</Title>
            <Text>WooCommerce is a customizable, open-source eCommerce platform built on WordPress.Get started quickly and make your way.</Text>
            <Buttons>
                <Start>Start a New Store</Start>
                <Textt>or</Textt>
                <Extend>Customize  Extend ›</Extend>
            </Buttons>
        </div>
    )
}

export default index
