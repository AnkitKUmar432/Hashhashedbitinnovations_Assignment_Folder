import React, { useEffect, useState } from 'react'

function BookedDetails() {
  const [data, setData] = useState(null)

  useEffect(() => {
    let bookedData = localStorage.getItem('bookedDetails');
    if (bookedData) {
      setData(JSON.parse(bookedData));
    }
  }, [])

  return (
    <div>
      <h2>Your Booking Details</h2>

      {data ? (
        <div>
          <p><strong>BookingId:</strong> {data.bookId}</p>

          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Contact:</strong> {data.number}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <p><strong>Slot:</strong> {data.slot}</p>
        </div>
      ) : (
        <p>No Booking Found</p>
      )}
    </div>
  )
}

export default BookedDetails
