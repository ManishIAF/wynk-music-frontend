import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IndicatorData } from "../DataContext/IndicatorContext";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import '../App.css'
import useFetch from '../customComponent/fetch';
import axios from 'axios';
import { Button } from '@mui/material';
import useAuth from '../customComponent/useAuth';

const AddToPlaylist = ({isVisible}) =>{

    const [{apiData:authValue}] = useAuth();
    const [{apiData:userplaylist},,setParams] = useFetch('userplaylist')
    const {setIndicator} = IndicatorData()
    const [inputValue,setInputValue] = useState('')
    const [open,setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [selectedLanguages,setLanguages] = useState([]);
    const [apiData,setData] = useState({isLoading:true,apiData:undefined,status:null,serverError:null});

    const token = localStorage.getItem('token');

    const choosePlaylist = (name) =>{

        if(selectedLanguages.includes(name)){
            removefromPlaylist(name)
            setParams('')
            return setLanguages(selectedLanguages.filter((item)=>item!==name))
        }
        if(!selectedLanguages.includes(name)){
            SavePlaylist(name)
            setParams('')
            setLanguages([...selectedLanguages,name])
        }
    
    }

    const handleInput = (e) =>{

        setInputValue(e.target.value)

    }

    const removefromPlaylist = async(name) =>{

        const datatoremove = JSON.parse(localStorage.getItem('AddToPlaylistData'));
    
        const url = `${process.env.REACT_APP_BASE_URL}/userplaylist?name=${name}`;
    
        const { data } = await axios.delete(url, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: { songs: datatoremove }, 
        });
    
        if (data) {
            console.log(data);
        }

    }

    const SavePlaylist = async (name) =>{
        
        const datatoSave = JSON.parse(localStorage.getItem('AddToPlaylistData'))

        const {data} = await axios.post(`http://localhost:8000/userplaylist`,{
            name:name,
            songs:datatoSave
        },{
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        if(data){
            console.log(data)
        }
    }

    const CreateNewPlaylist = () =>{
        setIndicator((prev)=>{return{...prev,playlistIndicator:false}});
        choosePlaylist(inputValue)
    }   

    useEffect(() => {

        if(!apiData?.email){
            const fetchAuthData = async () => {
                try{

                    const {data,status} = await axios.get(`http://localhost:8000/authenticate`,{
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if(status === 200){
                        setData(prev => ({...prev,isLoading:false,apiData:data,status:status}));
                    }else if(status !== 200){
                        setData(prev => ({...prev,isLoading:false,apiData:data,status:status}));
                        setIndicator((prev)=>{return{...prev,loginIndicator:true,playlistIndicator:false}})
                    }
                }catch(error){
                    setData(prev => ({...prev,isLoading:false,serverError:error}));
                    setIndicator((prev)=>{return{...prev,loginIndicator:true,playlistIndicator:false}})
                }

            }

            fetchAuthData();
        }
        if (isVisible) {

            const timer = setTimeout(() => {
                setShouldRender(true);
            }, 100);

            return () => {
                clearTimeout(timer);
            }
        }
        return () => {};
    }, [isVisible,setIndicator,selectedLanguages,apiData?.email,token]);

    return(
        <div style={{display:'flex',top:'50%',left:'50%',transform: 'translate(-50%, -50%)',backgroundColor: 'rgba(0, 0, 0, 0.95)',position:'fixed',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',zIndex:1005,border:'none'}}>
            {!open&&<div style={{marginLeft:'4px',width:'510px',height:'auto',transform:`translate(0%, 0%) scale(${shouldRender ? '1' : '0.9'})`,opacity: shouldRender ? '1' : '0',transition: 'transform 0.3s ease, opacity 0.3s ease',borderRadius:'15px',backgroundColor:'rgba(33,37,45)'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginLeft:'20px',marginRight:'20px',marginBottom:'5px'}}>

                    <h5 style={{fontSize:'23px'}}>Add To Playlist</h5>
                    <CloseIcon className='loginCrossIcon' onClick={()=>{setIndicator((prev)=>{return{...prev,playlistIndicator:false}});}} style={{fontSize:'20px'}} />

                </div>
                <div style={{height:'0.01rem',marginRight:'20px',marginLeft:'20px','--tw-border-opacity':1,backgroundColor:'rgba(75,85,99,var(--tw-border-opacity))'}}></div>

                <ul style={{marginTop:'15px',paddingBottom:'10px',paddingRight:'15px'}}>
                    <div className='hideScrollbar' style={{paddingLeft:'20px',height:'310px',overflowY:'auto',overflowX:'hidden'}}>
                        
                        {!userplaylist&&<li onClick={()=>choosePlaylist('Liked Songs')} style={{display:'flex',cursor:'pointer',justifyContent:'space-between',height:'40px',marginTop:'4px',alignItems:'center'}}>
                            <div style={{display:'flex',gap:'15px',alignItems:'center',marginTop:'12px'}}>
                                <img src="https://img.wynk.in/unsafe/60x60/filters:no_upscale():strip_exif():format(webp)/https://wynk-music-cms.s3.ap-south-1.amazonaws.com/like_playlist/Round%403x.png" alt=''/>
                                <p style={{fontSize:'1.05rem',color:'white'}}>Liked Songs</p>
                            </div>
                            <span>{selectedLanguages?.includes('Liked Songs')?<CheckIcon style={{fontSize:'23px',padding:'2px'}} />:<AddIcon style={{fontSize:'23px',padding:'2px'}} />}</span>
                        </li>}
                        {userplaylist&&userplaylist?.map(({id,title,img,songIds},index)=>(
                            <li key={id} onClick={()=>{choosePlaylist(title)}} style={{display:'flex',cursor:'pointer',justifyContent:'space-between',height:'40px',marginTop:index===0?'12px':'40px',alignItems:'center'}}>
                                <div style={{display:'flex',gap:'15px',alignItems:'center'}}>
                                    <div style={{fontSize:'1rem',fontWeight:600}}>
                                        <img src={title === 'Liked Songs'?"https://img.wynk.in/unsafe/60x60/filters:no_upscale():strip_exif():format(webp)/https://wynk-music-cms.s3.ap-south-1.amazonaws.com/like_playlist/Round%403x.png":img} alt='' style={{width:'60px',height:'60px',borderRadius:title==="Liked Songs"?'50%':"7px"}}/>
                                    </div>
                                    <div>
                                        <p style={{color:'white',fontSize:'1rem'}}>{title}</p>
                                        <p style={{color:'gray',fontSize:'0.7rem'}}>{songIds?.length}</p>
                                    </div>
                                </div>
                                <span>{selectedLanguages?.includes(title)?<CheckIcon style={{fontSize:'25px',padding:'2px',marginRight:'5px'}} />:<AddIcon style={{fontSize:'25px',padding:'2px',marginRight:'10px'}} />}</span>
                            </li>
                        ))}
                    </div>
                </ul>
                
                <div style={{height:'0.01rem',marginRight:'20px',marginLeft:'20px','--tw-border-opacity':1,backgroundColor:'rgba(75,85,99,var(--tw-border-opacity))'}}></div>

                <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'15px'}}>
                    <Button variant="outlined" onClick={()=>setOpen(true)} style={{textTransform: 'none',height:'40px',width:'130px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',borderRadius:'20px',border:'1px solid white' , color:'white'}}>
                       <AddIcon /> <p style={{fontSize:'15px',fontWeight:600}}>Create New</p>
                    </Button>
                </div>
            </div>}
            {open&&<div style={{width:'515px',height:'auto',transform:`translate(0%, 0%) scale(${shouldRender ? '1' : '0.9'})`,opacity: shouldRender ? '1' : '0',transition: 'transform 0.3s ease, opacity 0.3s ease',borderRadius:'15px',backgroundColor:'rgba(33,37,45)'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px',marginLeft:'20px',marginRight:'20px',marginBottom:'`5px'}}>

                    <div style={{lineHeight:'30px'}}>
                        <h5 style={{fontSize:'25px'}}>Create New Playlist</h5>
                        <p style={{fontSize:'13px',color:'gray'}}>And don't forget to share it with your friends</p>
                    </div>
                    <CloseIcon className='loginCrossIcon' onClick={()=>{setIndicator((prev)=>{localStorage.removeItem('AddToPlaylistData'); return{...prev,playlistIndicator:false}});}} style={{fontSize:'20px'}} />

                </div>
                <div style={{height:'0.01rem',marginRight:'20px',marginLeft:'20px','--tw-border-opacity':1,backgroundColor:'rgba(75,85,99,var(--tw-border-opacity))'}}></div>

                <ul style={{marginTop:'15px',paddingBottom:'15px',paddingRight:'15px'}}>
                    
                    <div className='hideScrollbar' style={{display:'grid',gridTemplateColumns:'1fr',padding:'2px 2px 2px 20px',height:'auto',overflowY:'auto',overflowX:'hidden'}}>
                        <input onChange={handleInput} type='text' placeholder='Give your playlist a name' style={{height:'40px',border:'1px solid white',fontSize:'15px',fontWeight:600,backgroundColor:'rgba(12,15,18)',color:'white',borderRadius:'4px',paddingLeft:'10px'}} />
                    </div>
                </ul>
                
                <div style={{height:'0.01rem',marginRight:'20px',marginLeft:'20px','--tw-border-opacity':1,backgroundColor:'rgba(75,85,99,var(--tw-border-opacity))'}}></div>

                <div style={{display:'flex',gap:'10px',float:'right',alignItems:'center',padding:'15px'}}>
                    <Button variant="outlined"  onClick={()=>{localStorage.removeItem('AddToPlaylistData');setIndicator((prev)=>{return{...prev,playlistIndicator:false}});}} style={{textTransform: 'none',height:'40px',width:'75px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',borderRadius:'20px',border:'1px solid white' , color:'white'}}>
                        Cancel
                    </Button>
                    <Button variant="outlined" onClick={(e)=>inputValue&&CreateNewPlaylist(e)} style={{textTransform: 'none',cursor:!inputValue&&'no-drop',height:'40px',width:'90px',borderRadius:'20px',border:inputValue?'none':'1px solid white' , color:'white','--tw-bg-opacity':1,backgroundColor:inputValue&&'rgba(220,38,38,var(--tw-bg-opacity))'}}>
                        save
                    </Button>
                </div>
            </div>}
        </div>
    )

}

export default AddToPlaylist