import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';


const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [locations, setLocations] = useState('');
  const [date, setDate] = useState('');
  const [actualPrice, setActualPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to store the form data
    const formData = new FormData();

    // Append each form input to the FormData object
    formData.append('title', title);
    formData.append('description', description);
    formData.append('locations', locations);
    formData.append('date', date);
    formData.append('actualPrice', actualPrice);
    formData.append('discountedPrice', discountedPrice);

    // Append the selected file(s) to the FormData object
    if (image !== null) {
      formData.append('image', image);
    }

    try {
      // Send a POST request to the server with the FormData object as the body
      const response = await axios.post('/api/products', formData);

      // TODO: Handle successful response (e.g. redirect to product list page)
    } catch (error) {
      // TODO: Handle error (e.g. display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Locations:
        <input type="text" value={locations} onChange={(e) => setLocations(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Actual Price:
        <input type="text" value={actualPrice} onChange={(e) => setActualPrice(e.target.value)} />
      </label>
      <label>
        Discounted Price:
        <input type="text" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
