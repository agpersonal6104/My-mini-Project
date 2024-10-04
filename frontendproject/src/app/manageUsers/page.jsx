'use client';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const manageUser = () => {
  
  const [userList, setUserList] = useState([]);
  const fetchUsersData = async () => {

    
    const res = await axios.get('http://localhost:6000/user/getall');
    console.log(res.status);
    console.table(res.data);
    setUserList(res.data);
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  const deleteUser = (id) => {
    axios.delete('http://localhost:6000/user/delete/'+id)
    .then((result) => {
      toast.success('User deleted Successfully!');
      fetchUsersData();
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to delete user!');
    });
  }

  const displayusers = () => {
    
    if(userList.length === 0)
    {
      return <p>Loading.... Please Wait!</p>
    }
    else
    {
      return <table className='w-full border-2 border-blue-500'>
        <thead className='text-left text-white bg-blue-500'>
          
          <tr>
            <th className='p-3 text-lg'>ID</th>
            <th className='p-3 text-lg'>Name</th>
            <th className='p-3 text-lg'>Email</th>
            <th className='p-3 text-lg'>City</th>
            <th colSpan={2}>Actions</th>
            </tr>
          
        </thead>
        
        <tbody>
          {
            userList.map((user) => {
              return <tr key={user._id} className='border border-blue-500'>
                
                <td className='p-3'> {user._id} </td>
                <td className='p-3'>{user.name}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.city}</td>
                <td>
                  <button className='px-3 py-1 text-white bg-red-500 rounded-full'
                  onClick={ () => { deleteUser(user._id)} }
                  >
                    Delete</button>
                </td>
                <td>
                  <Link href={'/updateUser/'+user._id} className='px-3 py-1 text-white bg-blue-500 rounded-full'>Edit</Link>
                </td>
                
              </tr>
            } )
          }
        </tbody>
      </table>  
    }
  }
    
  return (
    <div>
      <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
        <h1 className='mt-5 text-3xl font-bold text-center'>ManageUser</h1>
        {displayusers()}
      </div>
    </div>
  )
}

export default manageUser;