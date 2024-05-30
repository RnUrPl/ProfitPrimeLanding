import React from 'react';


const ForexModal = ({  closeModal ,t}) => {
  return (
    <div className="modal-overlay">
      <div className="Nmodal" id='nm'>
        <button className="close-button" onClick={closeModal}>
        ✖
        </button>


        <span className='newModal_txt'>

        {t("f1")}
<br/><br/>

<span className='bold'>{t("f2")}
</span><br/><br/>
{t("f3")}
<br/><br/>
{t("f4")}
<br/><br/>
<span className='bold'>{t("f5")}</span><br/><br/>
{t("f6")}<br/><br/>

{t("f7")}
<br/><br/>
<span className='bold'>{t("f14")}</span> <br/><br/>

{t("f15")}
<br/><br/>
<span className='bold'>{t("f8")}</span> <br/><br/>

{t("f9")}
<br/><br/>
<span className='bold'>{t("f16")}</span> <br/><br/>

{t("f17")}
<br/><br/>
<span className='bold'>{t("f10")}</span><br/><br/>

{t("f11")}
<br/><br/>
<span className='bold'>
{t("f12")}
</span><br/><br/>

{t("f13")}  </span>
        

      </div>
    </div>
  );
};

export default ForexModal;
