import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [backend, setBackend] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(res=>{
      setBackend(res.data);
    }).catch(err=>{
      console.log(err);
    });
  },[]);

  return (
    <div className="App">
      <h1>{backend}</h1>
    </div>
  );
}

export default App;
