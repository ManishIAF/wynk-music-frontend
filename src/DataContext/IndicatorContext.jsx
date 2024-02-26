import React, { createContext, useState ,useContext } from "react";

const createIndicatorContext = createContext();

const Indicator = ({children})=>{

    const [indicator, setIndicator] = useState({loginIndicator:false,playlistIndicator:false,languageSelection:false,SoundQualityOpen:false,SoundQuality:localStorage.getItem('SoundQuality')||'Auto' ,linkIndicator:false,QueueIndicator:false,shareIndicator:false,searchIndicator:false});

    return(
        <createIndicatorContext.Provider value={{indicator,setIndicator}}>
            {children}
        </createIndicatorContext.Provider> 
    )

}

const IndicatorData = () => useContext(createIndicatorContext)

export {Indicator,IndicatorData};