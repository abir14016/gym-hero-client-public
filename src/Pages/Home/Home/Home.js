import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Partners from '../Partners/Partners';
import Subscribe from '../Subscribe/Subscribe';
import Success from '../Success/Success';
import Support from '../Support/Support';
import './Home.css'

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
            <Support></Support>
            <Partners></Partners>
            <Subscribe></Subscribe>
            <Success></Success>
        </div>
    );
};

export default Home;