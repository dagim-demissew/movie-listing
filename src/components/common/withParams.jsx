import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const withParams = (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate()
    return <WrappedComponent {...props} params={params} navigate={navigate} />;
  };
};

export default withParams;
