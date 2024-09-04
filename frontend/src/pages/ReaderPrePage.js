import React, { useState,useEffect } from 'react';
import PostFooter from '../components/PostFooter';
import PageHeader from '../components/Header';
import Navbar from '../components/navbar'; // Ensure correct casing for imports
import Footer from '../components/Footer';
import ReportBug from '../components/ReportBug';
import ReaderPre from '../components/ReaderPremium';

import { useSelector, useDispatch } from 'react-redux';



const ReaderPrePage = () => {


  const isNavbarVisible = useSelector((state) => state.userData.barsClick);
  
  

  return (
    <div>
      
      <PageHeader  />
      {isNavbarVisible && (
        <div className="lg:hidden ">
          <Navbar />
        </div>
      )}
      <div className="hidden lg:block">
        <Navbar />
      </div>


        <ReaderPre/>        
        <Footer/>
        <PostFooter />
      </div>
    
  );
};

export default ReaderPrePage;