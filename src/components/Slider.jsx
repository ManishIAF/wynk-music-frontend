import React, { useEffect, useRef} from 'react';
import '../styles/slider.css'
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import data from '../fakeData/fakeData';

const Slider = () => {

  const navigate = useNavigate();
  const carouselRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let currentIndex = 0;
  let prevIndex;

  const handlePrev = () => {
    const carousel = carouselRef.current;
    prevIndex = currentIndex;
    currentIndex = (currentIndex - 1 + data?.length) % data?.length;

    carousel.insertBefore(carousel.children[data?.length - 1], carousel.firstChild);
    carousel.style.transform = `translateX(-2200px)`;

    
    setTimeout(() => {
      carousel.style.transform = 'translateX(-1380px)';
      carousel.classList.add('sliding-transition');
    }, 10);

    setTimeout(() => {
      carousel.classList.remove('sliding-transition');
    }, 490);
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    carousel.classList.add('sliding-transition');

    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % data?.length;

    carousel.style.transform = `translateX(-${2200}px)`;

    setTimeout(() => {
      carousel.appendChild(carousel.children[0]);
      carousel.classList.remove('sliding-transition');
      carousel.style.transform = 'translateX(-1380px)';
    }, 500);
  };

  return (
    <div className='Sliderbox'>
      <div class="sliderContainer">
        <div className='imageContainer' ref={carouselRef} style={{transform:'translateX(-1380px)'}}>
          {data?.map((item) => (
            <img
              key={item?.id}
              onClick={()=>navigate(item?.uri,{state:{uri:item?.path,img:item?.img,Banner:item?.Banner,language:item?.language}})}
              className='slidingImage'
              src={item?.img}
              alt=''
              style={{
                cursor:'pointer',
                height: '280px',
                borderRadius: '15px',
              }}
            />
          ))}
        </div>
        <NavigateBeforeIcon
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: '50%',
          fontSize:'40px',
          borderRadius:'50%',  
          left: '100px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      />
    
      <NavigateNextIcon
        onClick={handleNext}
        style={{
          position: 'absolute',
          fontSize:'40px',
          borderRadius:'50%',  
          top: '50%',
          right: '100px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      /> 
      </div>
    </div>
  )
};

export default Slider;