import { useState, useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { IndicatorData } from '../DataContext/IndicatorContext';

const useAuth = () => {

  // const navigate = useNavigate();
  const {setIndicator} = IndicatorData();

  const [data, setData] = useState({isLoading:false,apiData:undefined,status:null,serverError:null});

  const token = localStorage.getItem('token');

  useEffect(() => {

    let isMounted = true;

    const fetchData = async () => {
      try {

        setData((prevData) => ({ ...prevData,isLoading: true }));
        
        const {data,status} = await axios.get(`${process.env.REACT_APP_BASE_URL}/authenticate`,{
          withCredentials: true,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
        });

        if(isMounted){
          
          if(status === 200){

              setData(prev => ({...prev,isLoading:false,apiData:data,status:status}));

          }else if(status !== 200){
            setData(prev => ({...prev,isLoading:true}))
          
          }

        }
        
      } catch (error) {
        
        if(isMounted){
            // setIndicator((prev) =>{ return {...prev,loginIndicator:true}})
            // navigate('/')
            setData(prev => ({...prev,apiData:undefined,isLoading:false,serverError:error}))
        }
          
      };
    };

    fetchData();

    return () => {
      isMounted = false;
    };

  }, [token,setIndicator]);
  
  return [data, setData];

};

export default useAuth;
