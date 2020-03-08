import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Service from '../../components/service/Service';
import Stats from '../../components/stats/Stats';
import Portfolio from '../../components/portfolio/Portfolio';
import Team from '../../components/team/Team';


class Home extends Component {
    
    render() {
        return (
            <>
                <Header></Header>
                <Banner></Banner>
                <About></About>
                <Service></Service>
                <Stats></Stats>
                <Portfolio></Portfolio>
                <Team></Team>
            </>
        );
    }
}

export default Home;