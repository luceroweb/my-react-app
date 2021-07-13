import React from 'react';

const MovieModal = ({show, onClose, children }) => {           

  return(
    <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" style={{display: 'block'}}>
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content p-0">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div class="modal-body">
          {children}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal;