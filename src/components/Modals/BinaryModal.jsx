import React from 'react';
 // Create a separate CSS file for styling the modal

const BinaryModal = ({ t, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="Nmodal" id='nm'>
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>


        <span className='newModal_txt'>

        {t("mb1")}
<br/><br/>

<span className='bold'>One Leg:
<br/><br/>
</span >
{t("mb2")}
<br/><br/>

<span className='bold'>Two Leg Lock:
</span><br/><br/>


{t("mb3")}
<br/><br/>
<span className='bold'>Multi Leg Spread:
</span> <br/><br/>

{t("mb4")}
<br/><br/>
<span className='bold'>Two Leg Simple Hedge:
</span><br/><br/>

{t("mb5")}
<br/><br/>
<span className='bold'>{t("mb6")}
</span><br/><br/>
{t("mb7")}
  </span>
        

      </div>
    </div>
  );
};

export default BinaryModal;
