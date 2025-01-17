import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './Components/Loder'; // Assuming you have a Loader component

// import Login from '';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h2 style={{
            textAlign: "center",
            marginTop: "10rem",
            fontSize: '40px',
            color: "#050505"
          }} >404 Not found</h2>} />



        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
