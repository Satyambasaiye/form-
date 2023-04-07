import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [locations, setLocations] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [actualPrice, setActualPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [image, setImage] = useState(null);
  const [itinerary, setItinerary] = useState('');
  const [thingsToCarry, setThingsToCarry] = useState('');
  const [pickUpPoint, setPickUpPoint] = useState('');
  const [includes, setIncludes] = useState('');
  const [excludes, setExcludes] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [cancellationPolicy, setCancellationPolicy] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('locations', locations);
    formData.append('fromDate', fromDate);
    formData.append('toDate', toDate);
    formData.append('actualPrice', actualPrice);
    formData.append('discountedPrice', discountedPrice);
    formData.append('itinerary', itinerary);
    formData.append('thingsToCarry', thingsToCarry);
    formData.append('pickUpPoint', pickUpPoint);
    formData.append('includes', includes);
    formData.append('excludes', excludes);
    formData.append('contactDetails', contactDetails);
    formData.append('cancellationPolicy', cancellationPolicy);

    if (image !== null) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('/api/products', formData);

    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Trek Form</h1>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
  Description:
  < ReactQuill value={description} onChange={setDescription} />
</label>
      <label>
        Locations:
        <input type="text" value={locations} onChange={(e) => setLocations(e.target.value)} />
      </label>
      <label>
        From Date:
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
      </label>
      <label>
        To Date:
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
      </label>
      <label>
        Actual Price:
        <input type="number" value={actualPrice} onChange={(e) => setActualPrice(e.target.value)} />
      </label>
      <label>
        Discounted Price:
        <input type="number" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} />
      </label>
      <label>
      Itinerary:
      <textarea value={itinerary} onChange={(e) => setItinerary(e.target.value)} />
    </label>
      <label>
      Things to Carry:
      <textarea value={thingsToCarry} onChange={(e) => setThingsToCarry(e.target.value)} />
    </label>
    <label>
      Pick Up Point:
      <input type="text" value={pickUpPoint} onChange={(e) => setPickUpPoint(e.target.value)} />
    </label>
    <label>
      Includes:
      <textarea value={includes} onChange={(e) => setIncludes(e.target.value)} />
    </label>
    <label>
      Excludes:
      <textarea value={excludes} onChange={(e) => setExcludes(e.target.value)} />
    </label>
    <label>
      Contact Details:
      <input type="text" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} />
    </label>
    <label>
      Cancellation Policy:
      <textarea value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} />
    </label>
    <label></label>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
