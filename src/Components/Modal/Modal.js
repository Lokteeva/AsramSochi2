import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn2">
        Контакты
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className='Candara2'>Наши контакты</h2>
                <div >     
                    <p className='Candara2'>Адрес: г. Сочи, ул. Фурманова, д. 38</p>     
                    <p className='Candara2'>По вопросам организации:<br/>+7-988-487-65-27 Ольга 
                    </p>
                </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
