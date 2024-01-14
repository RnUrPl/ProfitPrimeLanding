import React, { Suspense } from 'react';
import CanvasLoader from './Loader';
 // Create a separate CSS file for styling the modal

const Modal = ({ trader, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>
        <h2>{trader.name}</h2>
        
   
{   trader.modal &&    (  <div className="trader_content">
            <img src={trader.modal}className='trader_modal_img'/>
        </div>
      )}
        
        {trader.video && (

          <div className="trader_content">
            <video src={trader.video} className='trader_modal_img' controls autoPlay />
          </div>
 
        )}
      </div>
    </div>
  );
};

export default Modal;
