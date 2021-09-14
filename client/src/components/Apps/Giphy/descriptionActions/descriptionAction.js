import { Link } from 'react-router-dom';
import { useState } from 'react';

import { GreenBtn, WhiteBtn } from '../buttons/button';
import Logo from '../logo/logo';

import Modal from '../modal/Modal';

import './descriptionAction.css';


const DescriptionAction = () => {
  const [show, setShow] = useState(false)
  
  return (
    <div className="action-section">
      <Logo />
      <div className="btn-wrapper">
        <GreenBtn>Configuration</GreenBtn>
        <GreenBtn onShow={()=> setShow(true)} >Search Gifs</GreenBtn>
      </div>
      <div className="learn">
        <Link >Learn more & Support</Link>
      </div>
      <div className="categories-section">
        <p>Categories</p>
        <div className="categoryBtns">
          <WhiteBtn >Social & fun</WhiteBtn>
          <WhiteBtn >Essential Apps</WhiteBtn>
        </div>
        
      </div>
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default DescriptionAction;
