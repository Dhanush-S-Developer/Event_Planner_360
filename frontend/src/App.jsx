import {useEffect, useState} from 'react'

import axios from 'axios'

import Auth from './forms/Auth';

function App() {
  // const [backend, setBackend] = useState('');

  // useEffect(()=>{
  //   axios.get('http://localhost:3001/')
  //   .then(res=>{
  //     setBackend(res.data);
  //   }).catch(err=>{
  //     console.log(err);
  //   });
  // },[]);

  return (
    <div>
      <Auth/>
    </div>
  );
}

export default App;
