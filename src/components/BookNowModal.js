import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const BookNowModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', { name, email, phone });
      console.log(response.data);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={toggleModal}>Book Now</button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
};

export default BookNowModal;
