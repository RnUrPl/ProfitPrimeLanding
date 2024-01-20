import React from 'react';


const TradersModal = ({ trader, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>
        <h2>{trader.name}</h2>
        
   
{   trader.modal &&    (  <div className="trader_content">
            <img src={trader.modal}className='trader_modal_img' alt='trader_modal_img'/>
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

export default TradersModal;
