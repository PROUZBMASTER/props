import axios from 'axios';
import React, { useEffect, useState } from 'react'
import About from './components/About/About';
function App() {
    const[user, setUser] = useState()

    const getUser = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res =>{
            setUser(res.data)
        }))
    }

    useEffect(()=>{
        getUser()
    }, [])

 return(
  <>
    {user?.map(item => {
        return(
            <>
            <About name={item?.name} />
            </>
        )
    })}
  
  </>
 )
}

export default App;
