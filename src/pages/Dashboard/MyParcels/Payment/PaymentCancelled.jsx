import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
  return (
    <div>
      <h2 className="text-4xl">Payment is Cancelled. Please try again.</h2>
      <Link to='/dashboard/my-payment'>
      <button className='btn btn-primary text-black'>Try Again</button></Link>
    </div>
  );
};

export default PaymentCancelled;