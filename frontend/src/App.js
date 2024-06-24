import {useEffect, useState} from 'react'

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
    <div className="w-full h-dvh">
      <h1 className='flex text-4xl'>{backend}</h1>
    </div>
  );
}

export default App;
