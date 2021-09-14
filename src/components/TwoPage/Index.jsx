import React from 'react';
import {Container} from '../OnePage/StyleIndex';
import Top from '../OnePage/Top/index';
import RightPage from '../OnePage/RightPage/Logo';
import LeftPage from '../OnePage/LeftPage/index';

function Index() {
    return (
       <Container>
           <Top/>
           <RightPage/>
           <LeftPage/>
       </Container>
    )
}

export default Index
