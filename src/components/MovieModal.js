import React from 'react';

const MovieModal = ({show, onClose, children }) => {           

  return(
    <div className="modal fade show" id="exampleModal" tabIndex="-1" style={{display: 'block'}}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content p-0">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
          {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal;