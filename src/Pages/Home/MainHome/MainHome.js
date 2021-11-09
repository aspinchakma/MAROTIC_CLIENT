import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigarion/Navigation';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import ProductCategory from '../ProductCategory/ProductCategory';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';

const MainHome = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <ProductCategory></ProductCategory>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default MainHome;