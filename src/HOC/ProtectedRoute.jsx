// import { useEffect } from 'react';
// import { useLocation,Navigate } from 'react-router-dom';
import useAuth from '../customComponent/useAuth';

const ProtectetComponent = ({ children }) => {
      
      const [{apiData}] = useAuth();
      // const location = useLocation();

      return apiData?.email && children ;
};

export default ProtectetComponent;