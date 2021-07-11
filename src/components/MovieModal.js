import React from 'react';

const MovieModal = ({show, onClose, children }) => {           

  return(
    <div>
      <section className="modal-main">
        {children}
        <button onClick={onClose}>close</button>
      </section>
    </div>
  )
}

export default MovieModal;