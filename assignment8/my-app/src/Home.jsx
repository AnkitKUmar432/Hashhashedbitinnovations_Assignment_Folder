import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
      <h1>Movie Booking App</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: '0.5rem',margin:"auto 2em" }}>
       
        <div
          style={{
            width: "250px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/images/movies1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <h3 style={{ margin: "10px 0", color: 'blue' }}>New Movies</h3>

          <Link to="/BookMovies">
            <button
              style={{
                marginBottom: "10px",
                opacity: 0.9,
                border: "none",
                cursor: "pointer",
                padding:"0.5em 0.9em",
                borderRadius:'1rem',
                fontSize:'1rem'
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
 <div
          style={{
            width: "250px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/images/movies1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <h3 style={{ margin: "10px 0", color: 'blue' }}>New Movies</h3>

          <Link to="/BookMovies">
            <button
              style={{
                marginBottom: "10px",
                opacity: 0.9,
                border: "none",
                cursor: "pointer",
                padding:"0.5em 0.9em",
                borderRadius:'1rem',
                fontSize:'1rem'
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
         <div
          style={{
            width: "250px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/images/movies1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <h3 style={{ margin: "10px 0", color: 'blue' }}>New Movies</h3>

          <Link to="/BookMovies">
            <button
              style={{
                marginBottom: "10px",
                opacity: 0.9,
                border: "none",
                cursor: "pointer",
                padding:"0.5em 0.9em",
                borderRadius:'1rem',
                fontSize:'1rem'
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
         <div
          style={{
            width: "250px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "white",
            backgroundImage: "url('/images/movies1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <h3 style={{ margin: "10px 0", color: 'blue' }}>New Movies</h3>

          <Link to="/BookMovies">
            <button
              style={{
                marginBottom: "10px",
                opacity: 0.9,
                border: "none",
                cursor: "pointer",
                padding:"0.5em 0.9em",
                borderRadius:'1rem',
                fontSize:'1rem'
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
