import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SoundQualityOptions from '../StaticResources/SoundResources';
import { IndicatorData } from '../DataContext/IndicatorContext';
import useAuth from "../customComponent/useAuth";
import CheckIcon from '@mui/icons-material/Check';

const SoundQualityDialog = ({isVisible}) => {

    const [{apiData}] = useAuth()
    const {indicator,setIndicator} = IndicatorData();

    const [shouldRender, setShouldRender] = useState(false);

    const handleSoundQuality = (name)=> {
        if(name === 'HD'){
            if(apiData?.email){
                setIndicator((prev)=>{return{...prev,SoundQuality:name}})
                localStorage.setItem('SoundQuality',name)
            }else{
                setIndicator((prev)=>({...prev,loginIndicator:true}))
            }
        }
        if(name !== 'HD'){
            setIndicator((prev)=>{return{...prev,SoundQuality:name}})
            localStorage.setItem('SoundQuality',name)
        }
        setIndicator((prev)=>{return{...prev,SoundQualityOpen:false}})
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
        <div style={{display:'flex',top:'50%',left:'50%',transform: 'translate(-50%, -50%)',backgroundColor: 'rgba(0, 0, 0, 0.8)',position:'fixed',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',zIndex:1005,border:'none'}}>
            <div style={{position:'fixed',width:'30rem',height:'20rem',listStyle:'none',backgroundColor:'#282c34',color:'white',padding:'20px',borderRadius:'15px',transform:`translate(0%, 0%) scale(${shouldRender ? '1' : '0.9'})`,opacity: shouldRender ? '1' : '0',transition: 'transform 0.3s ease, opacity 0.3s ease'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <p style={{fontSize:'1rem'}}>Sound Quality</p>
                    <CloseIcon onClick={()=>setIndicator((prev)=>{return{...prev,SoundQualityOpen:false}})} style={{color:'gray',fontSize:'30px',cursor:'pointer'}} />
                </div>
                <ul style={{marginTop:'5px'}}>
                    <div>
                        {SoundQualityOptions?.map(({id,name,Quality})=>(
                            <li key={id} onClick={()=>handleSoundQuality(name)} className="menuItem" style={{display:'flex',justifyContent:'space-between',padding:'0.75rem',borderRadius:'0.25rem',fontSize:'1rem',fontWeight:500,height:name === 'HD'&&!apiData?.email?'5rem':'3rem',marginTop:'4px','--tw-bg-opacity': 1,backgroundColor:name===indicator?.SoundQuality&&'rgba(12,15,18,var(--tw-bg-opacity))',alignItems:'center'}}>
                                <div>
                                    {name === 'HD'?
                                        apiData?.email?<span style={{fontSize:'1rem',fontWeight:400}}>{name}</span>:<div><span style={{color:'red',fontSize:'0.8rem',fontWeight:600}}>Login For Free HD Audio</span></div>:
                                    <span style={{fontSize:'1rem',fontWeight:400}}>{name}</span>}
                                    <span style={{fontSize:'0.65rem',fontWeight:400,marginLeft:'2px',color:'gray'}}>{Quality&&Quality}</span>
                                </div>
                                <span>{name===indicator?.SoundQuality&&<CheckIcon style={{fontSize:'1.5rem',padding:'2px'}} />}</span>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default SoundQualityDialog;