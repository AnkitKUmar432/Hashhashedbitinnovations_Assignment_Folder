import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function MovieDetail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const navigate = useNavigate();
   const bookId = "Movie" + Math.floor(50+Math.random()*100);
    // console.log("dd",bookId);
  let submitForm = (e) => {
    e.preventDefault();
    if (!name || !email || !number || !date || !slot) {
      alert("Please fill all fields before booking!");
      return;
    }
 
    
    let bookDetails = {
      bookId,
      name,
      email,
      number,
      date,
      slot
    };

    if (bookDetails) {
      localStorage.setItem("bookedDetails", JSON.stringify(bookDetails));
      alert("booked")
      navigate('/BookedDetails')
    }
    let getDetails = localStorage.getItem('bookedDetails')
    console.log(getDetails);

  }
  return (
    <div className=''
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>Enter Details to Book Seat</h2>
      <form onSubmit={submitForm}
        style={{
          display: "flex",
          flexDirection: 'column',
          width: '50%',
          margin: "auto",
          gap: '1rem'
        }}
      >

        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type="number" name='number' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Contact' />
        <input type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
        {/* <input type="text" name='slot' value={slot} onChange={(e) => setSlot(e.target.value)} /> */}
        <select name="slot" value={slot} onChange={(e) => setSlot(e.target.value)} id="">
          <option value="">-- Select Slot --</option>
          <option value="Morning (10:00 AM)">Morning (10:00 AM)</option>
          <option value="Afternoon (1:00 PM)">Afternoon (1:00 PM)</option>
          <option value="Evening (4:00 PM)">Evening (4:00 PM)</option>
          <option value="Night (7:00 PM)">Night (7:00 PM)</option>

        </select>

        <button type='submit'>Book Now</button>

      </form>

    </div>
  )
}

export default MovieDetail