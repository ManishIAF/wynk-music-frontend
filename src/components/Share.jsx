import {useEffect,useState } from 'react';
// import { useLocation } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import whatsapp from '../fakeImage/whatsapp.png'
import facebook from '../fakeImage/facebook.png'

import { Button } from '@mui/material';
import { IndicatorData } from '../DataContext/IndicatorContext';

const Share = ({isVisible}) => {

    const currentURL = window.location.href;
    const {setIndicator} = IndicatorData();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isVisible) {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 100);

        return () => clearTimeout(timer);
        }
        return () => {};
    }, [isVisible]);

    function myFunction() {
        var copyText = document.getElementById("myInput");
        navigator.clipboard.writeText(copyText.value);
    }

    return (
        <div style={{display:'flex',top:'50%',left:'50%',marginLeft:'5px',transform: 'translate(-50%, -50%)',backgroundColor: 'rgba(0, 0, 0, 0.8)',position:'fixed',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',zIndex:1005,border:'none'}}>
            <div style={{marginLeft:'4px',marginBottom:'5px',width:'500px',height:'280px',transform:`translate(0%, 0%) scale(${shouldRender ? '1' : '0.9'})`,opacity: shouldRender ? '1' : '0',transition: 'transform 0.3s ease, opacity 0.3s ease',borderRadius:'20px',backgroundColor:'rgba(33,37,45)'}}>
                <div style={{display:'flex'}}>
                    <div style={{width:'100%',padding:'20px',marginTop:'8px',marginBottom:'8px'}}>
                        <p style={{fontSize:'25px',fontWeight:'bold'}}>Share</p>
                    </div>
                    <div style={{marginRight:'5px',marginTop:'5px'}}>
                        <CloseIcon onClick={()=>setIndicator((prev)=>{return{...prev,shareIndicator:false}})} style={{color:'gray',fontSize:'30px',marginRight:'20px',marginTop:'20px',cursor:'pointer'}} />
                    </div>
                </div>
                <div style={{borderTop:'1px solid white',width:'100%'}} ></div>
                <div style={{display:'flex',marginTop:'50px',marginLeft:'40px'}}>
                    <div style={{fontSize:'13px',lineHeight:'40px',color:'gray'}}>
                        <Button onClick={()=>{setIndicator((prev)=>{return{...prev,shareIndicator:false}})}} style={{width:'40px',height:'65px',border:'1px solid white',borderRadius:'50%'}} variant='outlines'>
                            <img src={whatsapp} alt='' style={{width:'30px',height:'30px',color:'green',fontSize:'30px'}} />
                        </Button>
                        <p>Whatsapp</p>
                    </div>
                    <div style={{marginLeft:'50px', fontSize:'13px',lineHeight:'40px',color:'gray'}}>
                        <Button onClick={()=>{setIndicator((prev)=>{return{...prev,shareIndicator:false}})}} style={{width:'40px',height:'65px',border:'1px solid white',borderRadius:'50%'}}>
                            <img src={facebook} alt='' style={{width:'30px',height:'30px',color:'green',fontSize:'30px'}} />
                        </Button>
                        <p>Facebook</p>
                    </div>
                    <div style={{marginLeft:'50px', fontSize:'13px',lineHeight:'40px',color:'gray'}}>
                        <Button onClick={()=>{setIndicator((prev)=>{return{...prev,shareIndicator:false}})}} style={{width:'40px',height:'65px',border:'1px solid white',borderRadius:'50%'}}>
                            <TwitterIcon style={{color:'skyblue',fontSize:'30px'}} />
                        </Button>
                        <p>Twitter</p>
                    </div>
                    <div style={{marginLeft:'50px', fontSize:'13px',lineHeight:'40px',color:'gray'}}>
                        <Button onClick={()=>{setIndicator((prev)=>{return{...prev,shareIndicator:false}});myFunction()}} id="myInput" value={currentURL} style={{width:'40px',height:'65px',border:'1px solid white',borderRadius:'50%'}}>
                            <ContentCopyIcon style={{color:'skyblue',fontSize:'30px'}} />
                        </Button>
                        <p>Copy URL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;