import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (path,options={}) => {

  const {skip} = options;
  const [data, setData] = useState({isLoading:false,apiData:undefined,status:null,serverError:null});
  const [Params,setParams] = useState('')

  const token = localStorage.getItem('token');

  useEffect(() => {

    let isMounted = true;

    if(skip){
      return;
    }

    const fetchData = async () => {
      try {

        setData((prevData) => ({ ...prevData,isLoading: true }));
        
        const {data,status} = await axios.get(`${process.env.REACT_APP_BASE_URL}/${path}`,{
          params:Params,
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

              setData(prev => ({...prev,isLoading:false,serverError:error}))

          }
          
      };
    };

    fetchData();

    return () => {
      isMounted = false;
    };

  }, [path,Params,skip,token]);

  return [data, setData,setParams,Params];
};

export default useFetch;
