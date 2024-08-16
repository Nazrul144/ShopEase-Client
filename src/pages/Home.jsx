import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';


const Home = () => {
 
    return (
        <div>
            <div>
            <Helmet>
                <title>ShopEase | Home</title>
            </Helmet>
            </div>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;