import React, { useState } from "react";


export default function ModalZayavka() {
  const [modal, setModalZayavka] = useState(false);

  const toggleModalZayavka = () => {
    setModalZayavka(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModalZayavka} className="btn1">
        Оставить заявку
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModalZayavka} className="overlay"></div>
          <div className="modal-content">
            <h2 className='Candara2'>Заполните форму</h2>
                <div >     
                   <input></input>
                </div>
            <button className="close-modal" onClick={toggleModalZayavka}>
              X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
