import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium font-serif'>
        Hello <br />

        <span className='text-3xl font-semibold'>
          
          {/* {userData?.data.firstName || 'Adnan'}👋 */}
          {/* {props?.firstName || 'Adnan'}👋 */}
          {props.data.firstName || 'Admin'}👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-[#3F362F] text-base font-medium text-white px-5 py-2 rounded-md'
      >
        Log Out - {props.data.firstName}
      </button>
    </div>
  );
};

export default Header;
