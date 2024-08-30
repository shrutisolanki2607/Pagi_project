import React, { useState } from 'react'

function UserData({users}) {
    
    const [rowColors, setRowColors] = useState({});

    const handleChange = (id) => {
        const currentColor = rowColors[id] || "bg-blue-50";
        const newColor = currentColor === "bg-blue-50" ? "bg-blue-100" : "bg-blue-50"; 
        setRowColors({ ...rowColors, [id]: newColor }); 
    };

    
      
      
      
    
  return (
    <>
       {
        users.map((curUser)=>(
                
                <tr className={`divide-x divide-blue-800 text-center ${rowColors[curUser.login.uuid] || "bg-blue-50"}`}key={curUser.login.uuid}>
                    <td> <input type='checkbox' onChange={()=>handleChange(curUser.login.uuid) } ></input></td> 
                    <td className='py-4 px-12 whitespace-nowrap text-sm font-medium text-gray-900 '>{curUser.name.first}{" "}{curUser.name.last}</td>
                    <td className='py-4 px-12 whitespace-nowrap text-sm font-medium text-gray-900'>{curUser.gender}</td>
                    <td className='py-4 px-12 whitespace-nowrap text-sm font-medium text-gray-900'>{curUser.email}</td>
                    <td className='py-4 px-12 whitespace-nowrap text-sm font-medium text-gray-900'>{curUser.phone}</td>
                    <td className='py-4 px-12 whitespace-nowrap text-sm font-medium text-gray-900'>{curUser.location.city}</td>
                </tr>
            ))
      } 
    </>
  )
}

export default UserData