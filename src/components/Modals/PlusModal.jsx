import React from 'react';


const PlusModal = ({  closeModal ,t}) => {
  return (
    <div className="modal-overlay">
      <div className="Nmodal" id='nm'>
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>


        <span className='newModal_txt'>

        {t("p1")}
<br/><br/>
<span className='bold'>{t("p1_1")}
</span><br/><br/>
{t("p1_2")}
<br/><br/>
<span className='bold'>{t("p2")}
</span><br/><br/>
{t("p3")}
<br/><br/>
<span className='bold'>{t("p4")}</span><br/><br/>
{t("p5")}<br/><br/>


<span className='bold'>{t("p6")}</span> <br/><br/>

{t("p7")}
<br/><br/>

</span>

        

      </div>
    </div>
  );
};

export default PlusModal;
