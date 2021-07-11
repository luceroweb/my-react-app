import React from 'react';

const MovieModal = ({show, onClose, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";               

  return(
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={onClose}>close</button>
      </section>
    </div>
  )
}

export default MovieModal;