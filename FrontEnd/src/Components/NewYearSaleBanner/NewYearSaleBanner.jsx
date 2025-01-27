import React from 'react'
import {Link} from 'react-router-dom'
import SaleBanner from "../../assets/Images/SaleBanner.png";

function NewYearSaleBanner() {
  const handleClick = () => {
    // You can define the URL you want to redirect to
    window.location.href = ''; // Replace with your desired URL
  };
  return (
    <div className='mt-20 mb-20 flex justify-center'>
      {/* <Link onClick={handleClick} className='cursor-pointer'> */} 
      {/* uncomment the link tag when the sale is live */}
      <img src={SaleBanner} alt="Sale Banner" className='max-w-full h-auto'/>
      {/* </Link> */}
    </div>
  )
}

export default NewYearSaleBanner