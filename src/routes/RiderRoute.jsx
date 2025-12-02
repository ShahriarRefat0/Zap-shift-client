import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../Components/Loading/Loading';

const RiderRoute = ({ children }) => {
  const { loading } = useAuth()
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) return <Loading></Loading>
  if (role !== 'rider') {
    return <Forbidden></Forbidden>
  }
  return children
};

export default RiderRoute;