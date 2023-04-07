import React, { useState } from 'react';
import './styles.css';

const AddTeamForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessLevel, setAccessLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform actions with form data here
    console.log({
      name,
      username,
      mobile,
      email,
      password,
      accessLevel
    });

    // Clear form fields
    setName('');
    setUsername('');
    setMobile('');
    setEmail('');
    setPassword('');
    setAccessLevel('');
  };

  return (
    <form onSubmit={handleSubmit}>
       <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Add Team Form</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
  Mobile Number:
  <input type="tel" pattern="[0-9]{10}" value={mobile} onChange={(e) => setMobile(e.target.value)} />
</label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Access Level:
        <select value={accessLevel} onChange={(e) => setAccessLevel(e.target.value)}>
          <option value="">Select Access Level</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTeamForm;
