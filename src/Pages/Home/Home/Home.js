import React from 'react';
import Header from '../../Shared/Header/Header';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;