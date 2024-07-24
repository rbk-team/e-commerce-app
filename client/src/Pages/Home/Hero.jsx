import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import FlashSales from '../../components/FlashSales';
import Categories from '../../components/Categories';
import BestSellingProducts from '../../components/BestSellingProducts';
import NewArrivals from '../../components/NewArrivals';
import Categorie from '../../components/Categorie';
import OurProducts from '../../components/OurProducts';
import { Button } from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate();

    const handleViewAllProducts = () => {
        navigate('/products');
    };

    return (
        <div>
            <Banner />
            <FlashSales />
            <Categories />
            <BestSellingProducts />
            <Banner />
            <OurProducts />
            <NewArrivals />
            <Categorie />
            <Button className='mt-3' onClick={handleViewAllProducts}>View All Products</Button>
        </div>
    );
};

export default Home;
