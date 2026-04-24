import React, { useEffect, useState } from 'react'
import axios from 'axios'

type user = {
    name:string,
    email:string
}
function Fetch() {
    const[data,setData] = useState<user[]>([])

    useEffect(()=>{
        const fetchuser = async()=>{
            try {
                const res =await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(res.data);
                
                setData(res.data)

                
            } catch (error) {
                console.log(error);
                
                
            }

        }
        fetchuser()
    },[])
  return (
    <div>
        {data.map((dt,index)=>(
            <div key={index}>
                {dt.name}
                <p>{dt.email}</p>
                </div>
            
        ))}
    </div>
  )
}

export default Fetch