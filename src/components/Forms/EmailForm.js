import { useState } from 'react';

export const Form = ({ logFormData }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    logFormData(formData);
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={(e) => onInputChange(e)}
          type="text"
          name="firstName"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={(e) => onInputChange(e)} type="text"
          name="lastName"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => onInputChange(e)} type="text"
          name="email"
        />
      </div>
      <button>Submit</button>
    </form>
  )
}