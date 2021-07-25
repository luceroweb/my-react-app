import React, { useState } from 'react';

// Class based components
const ShowSearch = ({ setTitleSearchTerm, setTitleSearchType }) => {
  const [ formData, setFormData ] = useState(
    {
      titleSearchTerm: '',
      titleSearchType: '',
    }
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTitleSearchTerm(formData.titleSearchTerm);
    setTitleSearchType(formData.titleSearchType || 'movie');
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="row">
      <div className="col text-center">
        <form 
          className="form mb-3" 
          onSubmit={(e) => onFormSubmit(e)}
        >
          <input
            type="text"
            name="titleSearchTerm"
            className="form-control d-inline"
            placeholder="Enter movie, series, or episode name..."
            required
            onChange={(e) => onInputChange(e)}
            style={{width:'19em',marginRight:'8px'}}
            value={formData.titleSearchTerm}
          />
          <select
            name="titleSearchType"
            className="form-select d-inline"
            placeholder="Type"
            value={formData.titleSearchType}
            onChange={(e) => onInputChange(e)}
            style={{width:'7em',marginRight:'8px'}}
          >
            <option value="" disabled>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          <button type="submit" className="btn btn-primary d-inline">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ShowSearch;