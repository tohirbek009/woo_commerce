import React from 'react';
import {Container} from './StyleIndex';
import Topp from '../TwoPage/Index';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Community from './Lutfullo/community';
import Develop from './Lutfullo/develop';
import Marketplace from './Lutfullo/marketplace';
import Resources from './Lutfullo/resources';
import Sell from './Lutfullo/Sell';



function Index() {
    return (
        <Router>
                <Container>
                    <Switch>
                       <Route path='/' exact component={Topp}/>
                       <Route path='/sell' component={Sell}/>
                       <Route path='/marketplace' component={Marketplace}/>
                       <Route path='/community' component={Community}/>
                       <Route path='/develop' component={Develop}/>
                       <Route path='/resources' component={Resources}/>
                    </Switch>
                </Container>
        </Router>
    )
}

export default Index
