import React from 'react';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    }, []);

    // basename={process.env.PUBLIC_URL}
  return (
    <Router >
      <Routes>
       {data && <Route path="/" element={<Home data={data}/>} />}
       {data && <Route path="/profile/:id" element={<Profile data= {data} />} />}
       <Route path="*" element= {<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
