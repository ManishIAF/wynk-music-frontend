import { useEffect, useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { IndicatorData } from '../DataContext/IndicatorContext';
import { useError } from '../DataContext/ErrorProvider';

import {veryfyEmail} from '../Validations/ValidatePhone';

const LoginWynk = ({isVisible}) => {

    const {Error,setError} = useError();
    const {setIndicator} = IndicatorData();
    const [loginInput , setLoginInput] = useState({email:null,OTP:null,OTPStatus:false});
    const [shouldRender, setShouldRender] = useState(false);

    const handleOTP = (e) => {

        e.preventDefault();

        if(!veryfyEmail(loginInput?.email)){
            return setError('Enter a valid email address');
        }else 
        if(veryfyEmail(loginInput?.email)){
            
            setError('');
 
            axios.post(`${process.env.REACT_APP_BASE_URL}/login/sendotp`,{email:loginInput?.email})
            .then((response)=>{
                if(response?.status===200){
                    setLoginInput((prev)=>({...prev,OTPStatus:true}));
                }
            }).catch((err)=>{
                setError(err?.response?.data?.message);
            })
        }
    }
    
    const handleLogin = (e) => {
        
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{email:loginInput?.email,OTP:loginInput?.OTP?.length === 4 ?loginInput?.OTP:e?.target?.value})
        .then((response)=>{
            if(response?.status===200){
                localStorage.setItem('token',response?.data?.token);
                setLoginInput((prev)=>({...prev,OTPStatus:true}));
                setIndicator((prev)=>{return{...prev,loginIndicator:false}});
            }
        }).catch((err)=>{
            setError(err?.response?.data?.message);
        })
    }

    useEffect(() => {

        if (isVisible) {

            const timer = setTimeout(() => {
                setShouldRender(true);
            }, 100);

            return () => clearTimeout(timer);
        }

        return () => {};

    }, [isVisible]);

    return (
        <div style={{display:'flex',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor:'hsla(0,0%,5%,.5)',backdropFilter:'blur(20px)',opacity:1,position:'fixed',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',zIndex:1005,border:'none'}}>
            <div style={{display:'flex',marginLeft:'4px',width:'50%',height:'73%',transform: `translate(0%, 0%) scale(${shouldRender ? '1' : '0.9'})`,opacity: shouldRender ? '1' : '0',transition: 'transform 0.3s ease, opacity 0.3s ease',borderRadius:'10px','--tw-bg-opacity': 1,backgroundColor: 'rgba(3,4,4,var(--tw-bg-opacity))'}}>
                <img src='https://wynk.in/_next/static/media/login.62a05998.png' alt="img" style={{width:'42%',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px'}} />
                <div style={{marginLeft:'35px',height:'100%'}}>
                    <CloseIcon className='loginCrossIcon' onClick={()=>{setIndicator((prev)=>{return{...prev,loginIndicator:false}});setError('')}} style={{float:'right',marginTop:'20px',fontSize:'25px',marginRight:'20px'}} />
                    <div style={{display:'grid',gridTemplateRows:'3fr 1fr',height:'100%',width:'100%'}}>
                        <div>
                            <div style={{color:'white',marginBottom:'10px'}}>
                                <div style={{paddingRight:'50px'}}>
                                    <h1>
                                        Login/Sign Up
                                    </h1>
                                    {!loginInput?.OTPStatus&&
                                        <p style={{fontSize:'15px',marginTop:'10px',lineHeight:'20px',color:'rgba(183,192,196,1)'}}>
                                            Get a personalised experience, and access all
                                            your music
                                        </p>
                                    }
                                    {loginInput?.OTPStatus&&
                                        <p style={{paddingTop:'15px'}}>
                                            <span>OTP sent to {loginInput?.email} </span>
                                            <span style={{cursor:'pointer',color:'red'}} onClick={()=>{setLoginInput((prev)=>({...prev,email:null,OTP:null,OTPStatus:false}));setError('')}}>Edit</span>
                                        </p>
                                    }
                                </div>
                            </div>
                            <form>
                                <div >
                                    {!loginInput?.OTPStatus&&
                                        <div style={{display:'flex',overflow:'hidden',marginBottom:'15px',height:'50px',borderTopLeftRadius:'7px',borderBottomLeftRadius:'7px'}}>
                                            <input 
                                                autoComplete='off' 
                                                value={loginInput?.email} 
                                                onChange={(e)=>{
                                                        setLoginInput((prev)=>({...prev,email:e.target.value}))
                                                        if(Error){
                                                            setError('');
                                                        }
                                                    }
                                                } 
                                                placeholder="Enter Your E-mail" 
                                                style={{
                                                    paddingLeft:'10px',
                                                    borderTopRightRadius:'7px',
                                                    borderBottomRightRadius:'7px',
                                                    fontSize:'15px',
                                                    fontWeight:'bold',
                                                    width:'300px',
                                                    '--tw-bg-opacity': 1,
                                                    backgroundColor:'rgba(27,27,28,var(--tw-bg-opacity))',
                                                    color:'whitesmoke',
                                                    border:'none',
                                                    outline: 'none'
                                                }} 
                                            />
                                        </div>
                                    }
                                    {loginInput?.OTPStatus&&
                                        <div>
                                            <input 
                                                type="tel"
                                                pattern="[0-9]" 
                                                maxLength="4" 
                                                autoComplete='off' 
                                                value={loginInput?.OTP} 
                                                onChange={(e)=>{
                                                    
                                                    setLoginInput((prev)=>({...prev,OTP:e.target.value}));
                                                    
                                                    if(Error&&e.target.value.length===3){
                                                        setError('');
                                                    }
                                                    if(e.target.value.length===4){
                                                        handleLogin(e)
                                                    }

                                                } }
                                                placeholder="Enter OTP" 
                                                style={{
                                                    paddingLeft:'10px',
                                                    marginTop:'25px',
                                                    fontSize:'15px',
                                                    fontWeight:'bold',
                                                    borderRadius:'7px',
                                                    width:'230px',
                                                    height:'50px',
                                                    '--tw-bg-opacity': 1,
                                                    backgroundColor:'rgba(27,27,28,var(--tw-bg-opacity))',
                                                    color:'whitesmoke',
                                                    border:'none',
                                                    outline: 'none'
                                                }} 
                                            />
                                        </div>
                                    }
                                </div>
                                {Error&&<p style={{color:'red',fontSize:'12px',marginTop:'10px',marginBottom:'10px'}}>{Error}</p>}
                                <div>
                                    {!loginInput?.OTPStatus&&
                                        <button className='btnHover' onClick={(e)=>{!Error&&loginInput?.email&&handleOTP(e)}} style={{cursor:!Error&&loginInput?.email ? 'pointer' : "no-drop",justifyContent:'center',borderRadius:'0.375rem',padding:'0.75rem 2.188rem',fontSize:'1rem',lineHeight:'1.5rem',fontWeight:500,backgroundImage: 'unset',backgroundColor:'linear-gradient(142.41deg,#fff 15.41%,#000 269.3%)',color:'rgba(12,15,18,1)'}}>
                                            Send OTP
                                        </button>
                                    }
                                    {loginInput?.OTPStatus&&
                                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px',paddingRight:'2rem'}}>
                                            <button className='btnHover' onClick={(e)=>handleOTP(e)} style={{justifyContent:'center',borderRadius:'0.375rem',padding:'0.75rem 2.188rem',fontSize:'1rem',lineHeight:'1.5rem',fontWeight:500,backgroundImage: 'unset',backgroundColor:'linear-gradient(142.41deg,#fff 15.41%,#000 269.3%)',color:'rgba(12,15,18,1)',border:'none'}}>
                                                Resend OTP
                                            </button>
                                            <button className='btnHover' onClick={(e)=>handleLogin(e)} style={{cursor:loginInput?.OTP ? loginInput?.OTP?.length === 4 ? 'pointer' : 'no-drop':'no-drop' ,justifyContent:'center',borderRadius:'0.375rem',padding:'0.75rem 2.188rem',fontSize:'1rem',lineHeight:'1.5rem',fontWeight:500,backgroundImage: 'unset',backgroundColor:'linear-gradient(142.41deg,#fff 15.41%,#000 269.3%)',color:'rgba(12,15,18,1',border:'none'}}>
                                                Continue
                                            </button>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                        <div>
                            <div style={{display:'flex',alignItems:'center',gap:'22px'}}>
                                <p style={{fontSize:'13px',color:'rgba(183,192,196)',fontWeight:'bold'}}>
                                    Available on
                                </p>
                                <img src='https://wynk.in/_next/static/media/apple-store.fd317c9d.png' alt='' style={{width:'100px'}} />
                                <img src='https://wynk.in/_next/static/media/play-store.28ce99c9.png' alt='' style={{width:'100px'}} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginWynk;