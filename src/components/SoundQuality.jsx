import { useState } from "react";
import SoundQualityOptions from "../StaticResources/SoundResources";
import { IndicatorData } from "../DataContext/IndicatorContext";
import CheckIcon from '@mui/icons-material/Check';
import useAuth from "../customComponent/useAuth";
import '../App.css'

const SoundQuality = () =>{

    const [{apiData}] = useAuth()
    const {indicator,setIndicator} = IndicatorData()
    

    const [hover,setHover] = useState(false)

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
    }

    return(
        <div>
            {hover&&<div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{position:'fixed',width:'10rem',bottom:'3.0rem',right:'4rem',listStyle:'none',backgroundColor:'#282c34',color:'white',padding:'5px',borderRadius:'7px'}}>
                <h5>Sound Quality</h5>
                <ul style={{marginTop:'5px'}}>
                    <div>
                        {SoundQualityOptions?.map(({id,name,Quality})=>(
                            <li key={id} onClick={()=>handleSoundQuality(name)} className="menuItem" style={{display:'flex',justifyContent:'space-between',padding:'2px',borderRadius:'4px',height:name === 'HD'&&!apiData?.email?'50px':'30px',marginTop:'4px','--tw-bg-opacity': 1,backgroundColor:name===indicator?.SoundQuality&&'rgba(12,15,18,var(--tw-bg-opacity))',alignItems:'center'}}>
                                <div>
                                    {name === 'HD'?
                                        apiData?.email?<span style={{fontSize:'13px'}}>{name}</span>:<div><span style={{color:'red',fontSize:'10px'}}>Login For Free HD Audio</span></div>:
                                    <span style={{fontSize:'13px'}}>{name}</span>}
                                    <span style={{fontSize:'10px',marginLeft:'2px',color:'gray'}}>{Quality&&Quality}</span>
                                </div>
                                <span>{name===indicator?.SoundQuality&&<CheckIcon style={{fontSize:'20px',padding:'2px'}} />}</span>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>}
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:'flex',cursor:'pointer',alignItems:'center',marginRight:'20px',justifyContent:'center',border:'1px solid #ff0c55',width:'50px',height:'22px',color:'#ff0c55'}}>
                <p>{indicator?.SoundQuality}</p>
            </div>
        </div>
    )

}

export default SoundQuality