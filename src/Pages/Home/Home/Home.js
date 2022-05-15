import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Partners from '../Partners/Partners';
import Subscribe from '../Subscribe/Subscribe';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
            <Support></Support>
            <Partners></Partners>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;