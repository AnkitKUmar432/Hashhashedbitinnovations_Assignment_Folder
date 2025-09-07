import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import BookedDetails from "./BookedDetails";

function App() {
  return (
    // <>hhhhh</>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BookMovies" element={<MovieDetail />} />
      <Route path="/BookedDetails" element={<BookedDetails />} />
    </Routes>
  );
}

export default App;
