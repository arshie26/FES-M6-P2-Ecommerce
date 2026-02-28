import { useEffect } from 'react';
import React from 'react'
import Landing from '../components/Landing';
import Highlights from '../components/Highlights';
import Features from '../components/Features';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';

const Home = () => {

    useEffect(() => {
        console.log("At home");
    });

    return (
        <div>
            <Landing />
            <Highlights />
            <Features />
            <Discounted />
            <Explore />
        </div>
    )
}

export default Home