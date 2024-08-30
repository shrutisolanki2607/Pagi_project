import React, { useState } from 'react'
import { useEffect } from 'react';
import UserData from './UserData';
const API = "https://randomuser.me/api/?results=100"

function DataFetching() {

    const[users,setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const getUsers = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return users.slice(startIndex, endIndex);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    
   const fetchUsers = async(url) =>{
        try{
           
           const res = await fetch(url)
           const data = await res.json();
           if(data.results.length>0){
            setUsers(data.results);
           }
        }catch (e){
           console.error(e)
        }
   }
 

    useEffect(()=>{
        fetchUsers(API)
    },[])

  return (
    < div className='overflow-x-hidden w-[95vw] mx-auto'>
        <h1 className='m-2 text-3xl font-bold text-center text-blue-800'>Pagination Project</h1>
        <table className='min-w-full my-10 text-center'>
            <thead className='bg-blue-100 divide-x divide-blue-800'>
                <th className='py-3 px-10 text-left text-xs font-medium  text-white-500 uppercase tracking-wider'></th>
                <th className='py-3 px-20 text-left text-xs font-medium  text-white-500 uppercase tracking-wider'>Name</th>
                <th className='py-3 px-20 text-left text-xs font-medium  text-white-500 uppercase tracking-wider '>Gender</th>
                <th className='py-3 px-20 text-left text-xs font-medium  text-white-500 uppercase tracking-wider'>Email</th>
                <th className='py-3 px-20 text-left text-xs font-medium  text-white-500 uppercase tracking-wider'>Phone</th>
                <th className='py-3 px-20 text-left text-xs font-medium  text-white-500 uppercase tracking-wider'>City</th>
            </thead>
            <tbody className='divide-y divide-black "'>
                <UserData users={getUsers()}/>
            </tbody>
        </table>
        <div className="flex justify-between items-center">
            <nav >
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                             Previous
                        </button>
                    </li>
                {/* {[...Array(Math.ceil(users.length / rowsPerPage)).keys()].map((page) => (
                    <li key={page + 1}>
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight ${
                            currentPage === page + 1
                            ? "text-blue-600 border border-blue-300 bg-blue-50"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            }`}
                            >
                            {page + 1}
                        </button>
                    </li>
                 ))} */}
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(users.length / rowsPerPage)}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                     Next
                    </button>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center'>
              <label htmlFor='rowsPerPage' className='text-blue-800 font-medium mr-2'>Rows per page:</label>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                  }}
                >
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={40}>40</option>
                  <option value={55}>55</option>
                  <option value={70}>70</option>
                  <option value={85}>85</option>
                  <option value={100}>100</option>
                </select>
        </div>
    </div>
       
        
</div>


    
  )
}

export default DataFetching