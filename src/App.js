import React from 'react';
import Card from './Components/Card';
import CompleteProfil from './Components/CompleteProfil';
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

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
       {data && <Route exact path="/" element={<Card data={data}/>} />}
       {data && <Route path="/profil/:id" element={<CompleteProfil data= {data} />} />}
      </Routes>
    </Router>
  );
}
export default App;
