import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, {'font': []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
}

const formats = [  'header', 'font', 'size',  'bold', 'italic', 'underline', 'strike', 'blockquote',  'list', 'bullet', 'indent',  'link', 'image', 'video']

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
  const [contactDetails, setContactDetails] = useState('');
  const [cancellationPolicy, setCancellationPolicy] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  }

  const handleItineraryChange = (value) => {
    setItinerary(value);
  }

  const handleThingsToCarryChange = (value) => {
    setThingsToCarry(value);
  }

  const handlePickUpPointChange = (value) => {
    setPickUpPoint(value);
  }

  const handleIncludesChange = (value) => {
    setIncludes(value);
  }

  

  const handleContactDetailsChange = (value) => {
    setContactDetails(value);
  }

  const handleCancellationPolicyChange = (value) => {
    setCancellationPolicy(value);
  }

  const handleChange = (value) => {
    setDescription(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title,
      description,
      locations,
      fromDate,
      toDate,
      actualPrice,
      discountedPrice,
      itinerary,
      thingsToCarry,
      pickUpPoint,
      includes,
      contactDetails,
      cancellationPolicy
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post('/api/products', data, config);

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
    <div className="form-container">
      <label className="form-label">Description:</label>
      <ReactQuill 
        value={description} 
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Enter description here"
      />
    </div>
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
    <div className="form-container">
      <label className="form-label">Itinerary:</label>
      <ReactQuill 
        value={itinerary} 
        onChange={handleItineraryChange}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Enter itinerary here"
      />
    </div>
    <div className="form-container">
      <label className="form-label">Things to Carry:</label>
      <ReactQuill 
        value={thingsToCarry} 
        onChange={handleThingsToCarryChange}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Enter things to carry here"
      />
    </div>
    <div className="form-container">
      <label className="form-label">Pick Up Point:</label>
      <ReactQuill 
        value={pickUpPoint} 
        onChange={handlePickUpPointChange}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Enter pick up point here"
      />
    </div>
    <label>
     Cost Includes:
      <textarea value={includes} onChange={(e) => setIncludes(e.target.value)} />
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
