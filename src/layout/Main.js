import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Category from '../Pages/Category/Category/Category';
import Footer from '../Pages/SharedPage/Footer/Footer';
import Header from '../Pages/SharedPage/Header/Header';
import LeftSideNav from '../Pages/SharedPage/LeftSideNav/LeftSideNav';


const Main = () => {
    return (
           <div>
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;