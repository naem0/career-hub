import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='md:container md:mx-auto'>
            <Header></Header>
            <div className=" mt-10">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;