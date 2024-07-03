import React from 'react';


const Disclaimer = ({  closeModal ,t}) => {
  return (
    <div className="modal-overlayd">
      <div className="Nmodal" id='nm'>
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>


        <span className='newModal_txt'>

        DISCLAIMER: This site is not a part of the Facebook website or Meta Platforms Inc. FACEBOOK is a trademark of Meta Platforms, Inc. This software operates automatically to execute trades on binary options brokers. Please be aware that all trading carries risks, and while this software aims to provide assistance, it does not guarantee profits or success. We are not financial advisors, brokers, or investment professionals, and thus we cannot offer financial, investment, or legal advice. The information provided by this software is intended for educational and informational purposes only. It is your sole responsibility to assess and manage the risks associated with trading. Before making any investment decisions, we strongly recommend conducting thorough research and consulting with qualified financial advisors. By using this software, you agree that you understand the risks involved in trading and that you will not hold the creators or operators of this software liable for any losses incurred.

<br/><br/>

    </span>
        

      </div>
    </div>
  );
};

export default Disclaimer;
