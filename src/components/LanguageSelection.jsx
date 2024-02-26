import { useEffect, useState } from 'react';
import Languages from '../fakeData/Languages'
import CloseIcon from '@mui/icons-material/Close';
import { IndicatorData } from "../DataContext/IndicatorContext";
import { useError } from '../DataContext/ErrorProvider';
import CheckIcon from '@mui/icons-material/Check';
import '../App.css'
import { Button } from '@mui/material';

const LanguageSelection = ({isVisible}) =>{

    const {Error,setError} = useError();
    const {setIndicator} = IndicatorData()
    const [shouldRender, setShouldRender] = useState(false);
    const [selectedLanguages,setLanguages] = useState([...JSON.parse(localStorage.getItem('Saved_Language'))])

    const handleLanguageSelection = (name) =>{

        if(selectedLanguages?.length === 4){
            setError('You can select only 4 languages')
        }

        if(selectedLanguages.includes(name)){
            if(Error){
                setError('')
            }
            return setLanguages(selectedLanguages.filter((item)=>item!==name))
        }
        if(selectedLanguages?.length < 4 && !selectedLanguages.includes(name)){
            if(Error){

                setError('')

            }
            setLanguages([...selectedLanguages,name])
        }
    
    }

    const SaveLanguage = (e) => {

        e.preventDefault()

        localStorage.setItem('Saved_Language',JSON.stringify(selectedLanguages))
        setIndicator((prev)=>{return{...prev,languageSelection:false}});

    }

    useEffect(() => {

        if(selectedLanguages?.length === 0){
            setError('Please select at least one Language')
        }

        if (isVisible) {
            const timer = setTimeout(() => {
                setShouldRender(true);
            }, 100);

            return () => clearTimeout(timer);
        }
        return () => {};
    }, [isVisible,selectedLanguages]);

    return(
        <div style={{display:'flex',top:'50%',left:'50%',marginLeft:'5px',transform: 'translate(-50%, -50%)',backgroundColor: 'rgba(0, 0, 0, 0.8)',position:'fixed',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',zIndex:1005,border:'none'}}>
            <div style={{marginLeft:'4px',width:'550px',height:'auto',transform:`translate(0%, 0%) scale(${shouldRender ? '1' : '0.9'})`,opacity: shouldRender ? '1' : '0',transition: 'transform 0.3s ease, opacity 0.3s ease',borderRadius:'20px',backgroundColor:'rgba(33,37,45)'}}>
                
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px',marginLeft:'20px',marginRight:'20px',marginBottom:'15px'}}>

                    <h5 style={{fontSize:'25px'}}>Select Music Language[s]</h5>
                    <CloseIcon className='loginCrossIcon' onClick={()=>{setIndicator((prev)=>{return{...prev,languageSelection:false}});setError('')}} style={{fontSize:'30px'}} />

                </div>
                <div style={{height:'0.01rem',marginRight:'20px',marginLeft:'20px','--tw-border-opacity':1,backgroundColor:'rgba(75,85,99,var(--tw-border-opacity))'}}></div>

                <ul style={{marginTop:'15px',paddingBottom:'30px',paddingRight:'15px'}}>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',columnGap:'20px',rowGap:'13px',paddingLeft:'20px'}}>
                        {Languages?.map(({id,writtenInNativeLanguage,writtenInEnglishLanguage})=>(
                            <li key={id} onClick={()=>handleLanguageSelection(writtenInEnglishLanguage)} className="menuItem" style={{display:'flex',justifyContent:'space-between',padding:'2px',borderRadius:'6px',height:'40px',marginTop:'4px','--tw-bg-opacity': 1,backgroundColor:selectedLanguages?.includes(writtenInEnglishLanguage)&&'rgba(12,15,18,var(--tw-bg-opacity))',alignItems:'center'}}>
                                <div>
                                    <span style={{marginLeft:'5px',fontSize:'1rem',fontWeight:600}}>{writtenInNativeLanguage}</span>
                                    <span style={{fontSize:'0.7rem',marginLeft:'2px',color:'gray'}}>{writtenInEnglishLanguage&&writtenInEnglishLanguage}</span>
                                </div>
                                <span>{selectedLanguages?.includes(writtenInEnglishLanguage)&&<CheckIcon style={{fontSize:'25px',padding:'2px'}} />}</span>
                            </li>
                        ))}
                    </div>
                    {Error&&<p style={{display:'flex',justifyContent:'center',color:'red',fontSize:'13px',fontWeight:600}}>{Error}</p>}
                </ul>
                
                <div style={{height:'0.01rem',marginRight:'20px',marginLeft:'20px','--tw-border-opacity':1,backgroundColor:'rgba(75,85,99,var(--tw-border-opacity))'}}></div>

                <div style={{display:'flex',gap:'10px',float:'right',paddingRight:'20px',paddingBottom:'15px'}}>
                    <Button variant="outlined" onClick={()=>{setIndicator((prev)=>{return{...prev,languageSelection:false}});setError('')}} style={{fontFamily:'inherit',textTransform: 'none',height:'40px',width:'110px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',marginTop:'20px',borderRadius:'20px',border:'1px solid white' , color:'white'}}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={(e)=>{(selectedLanguages?.length > 0)&&SaveLanguage(e);}} style={{fontFamily:'inherit',textTransform: 'none',height:'40px',width:'110px','--tw-bg-opacity':1,backgroundColor:'rgba(220,38,38,var(--tw-bg-opacity))',marginTop:'20px',borderRadius:'20px'}}>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default LanguageSelection