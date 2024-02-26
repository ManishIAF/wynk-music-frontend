import { useNavigate } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Link } from 'react-router-dom';

const InfoPanal = () => {

    const navigate = useNavigate()

    return(
        <div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderRadius:'4px',marginLeft:'90px',marginRight:'90px',marginTop:'50px',height:'70px'}}>
                <div style={{display:'flex',justifyContent:'space-between',padding:'20px',alignItems:'center','--tw-border-opacity': 1,border:'1px solid rgba(55,65,81,var(--tw-border-opacity))',borderLeft:'none',borderRight:'none',width:'100%',height:'100%'}}>
                    <div style={{display:'flex',fontSize:'13px',fontWeight:'bold','--tw-text-opacity': 1,color:'rgba(255,255,255,var(--tw-text-opacity))'}}>
                        <p>
                            <Link to="https://wynk.in/corporate" style={{textDecoration:'none','--tw-text-opacity': 1,color:'rgba(255,255,255,var(--tw-text-opacity))'}}>
                                <span>ABOUT US</span>
                            </Link>
                            <span style={{marginLeft:'5px'}}>
                                |
                            </span>
                            <Link to="privacy_policy" style={{textDecoration:'none','--tw-text-opacity': 1,color:'rgba(255,255,255,var(--tw-text-opacity))'}}>
                                <span style={{marginLeft:'5px'}}>
                                    PRIVACY POLICY
                                </span>
                            </Link>
                            <span style={{marginLeft:'5px'}}>
                                |
                            </span>
                            <Link to="tnc" style={{textDecoration:'none','--tw-text-opacity': 1,color:'rgba(255,255,255,var(--tw-text-opacity))'}}>
                                <span style={{marginLeft:'5px'}}>
                                    TERMS OF USE
                                </span>
                            </Link>
                            <span style={{marginLeft:'5px'}}>
                                |
                            </span>
                            <Link to="https://wynk.in/corporate/contact" style={{textDecoration:'none','--tw-text-opacity': 1,color:'rgba(255,255,255,var(--tw-text-opacity))'}}>
                                <span style={{marginLeft:'5px'}}>
                                    CONTACT US
                                </span>
                            </Link>
                            <span style={{marginLeft:'5px'}}>
                                |
                            </span>
                            <Link to="https://wynk.in/airtel-hellotunes" style={{textDecoration:'none','--tw-text-opacity': 1,color:'rgba(255,255,255,var(--tw-text-opacity))'}}>
                                <span style={{marginLeft:'5px'}}>
                                    HELLOTUNES
                                </span>
                            </Link>
                        </p>
                    </div>
                    <div style={{display:'flex',gap:'20px'}}>
                        <button onClick={()=>window.open('https://www.facebook.com/WynkMusic', '_blank')} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid white',color:'white',fontSize:'13px',fontWeight:'bold',cursor:'pointer',background:'none'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" id="facebook"><path fill="none" d="M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"></path><path fill="#FFF" d="M13.69 24.903h3.679v-8.904h2.454l.325-3.068h-2.779l.004-1.536c0-.8.076-1.229 1.224-1.229h1.534V7.097h-2.455c-2.949 0-3.986 1.489-3.986 3.992v1.842h-1.838V16h1.838v8.903z"></path></svg>
                        </button>
                        <button onClick={()=>window.open('https://twitter.com/WynkMusic', '_blank')} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid white',color:'white',fontSize:'13px',fontWeight:'bold',cursor:'pointer',background:'none'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" id="twitter"><path fill="white" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path></svg>
                        </button>
                        <button onClick={()=>window.open('https://www.instagram.com/wynkmusic/', '_blank')} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid white',color:'white',fontSize:'13px',fontWeight:'bold',cursor:'pointer',background:'none'}}>
                            <InstagramIcon />
                        </button>
                        <button onClick={()=>window.open('https://www.youtube.com/channel/UC3uWLPqsBOlYS6FLhWYwxJg', '_blank')} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid white',color:'white',fontSize:'13px',fontWeight:'bold',cursor:'pointer',background:'none'}}>
                            <YouTubeIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginLeft:'90px',marginRight:'90px',marginTop:'20px'}}>
                <div style={{width:'65%'}}>
                    <p style={{color:'gray',fontSize:'12px'}}>
                        Wynk Music is the one-stop music app for the latest to the greatest songs that you love. Play your favourite music online for free or download 
                        mp3. Enjoy from over 22 Million Hindi, English, Bollywood, Regional, Latest, Old songs and more.
                    </p>
                </div>
                <div>
                    <p style={{color:'gray',fontSize:'12px',fontWeight:'bold'}}>
                        2023 © All Rights Reserved | Airtel Digital Limited
                    </p>
                </div>
            </div>
        </div>

    )

}

export default InfoPanal;