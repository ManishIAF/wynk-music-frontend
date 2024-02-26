import {useState,useEffect,createContext,useContext } from "react"

import { SongDataContext } from "./SongDataContext";

const QueueContext = createContext() 

const QueueDataContext = ({children})=>{

    const {Song,setSong} = SongDataContext()

    const recentSongs = JSON.parse(localStorage.getItem('Recently Played Songs')) ? [...JSON.parse(localStorage.getItem('Recently Played Songs'))] : []
    const [queueData,setQueueData] = useState(localStorage.getItem('QueueData')&&JSON.parse(localStorage.getItem('QueueData')));
    const [songStatus,setSongStatus] = useState({completed:false,suffle:false,repeatAll:false,repeatOne:false})

    useEffect(()=>{

        if(songStatus?.completed&&songStatus?.repeatAll){

            const songIndex = queueData?.findIndex((item)=>item?.id === Song?.id)

            if(songIndex !== -1 && songIndex !== queueData?.length - 1){
                setSongStatus((prev)=>({...prev,completed:false}))
                setSong(queueData[songIndex+1])
                localStorage.setItem('CurrentSong',JSON.stringify(queueData[songIndex+1]))
                localStorage.setItem('Recently Played Songs',JSON.stringify([...recentSongs,queueData[songIndex+1]]))
            }
            else{
                setSongStatus((prev)=>({...prev,completed:false}))
                setSong(queueData[0])
                localStorage.setItem('CurrentSong',JSON.stringify(queueData[0]))

            }
        }

    },[songStatus.completed,songStatus?.repeatAll,songStatus?.repeatOne,Song,setSong,queueData,Song?.id])

    const Suffle = async()=>{

        const DataToShuffle = [...queueData];
      
        const currentSongIndex = await Promise.resolve(DataToShuffle?.findIndex((item)=>item?.id === Song?.id))

        if(currentSongIndex&&currentSongIndex !== -1){
            [DataToShuffle[0],DataToShuffle[currentSongIndex]] = [DataToShuffle[currentSongIndex],DataToShuffle[0]];
        }

        for (let i = 1; i < DataToShuffle?.length - 1; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            if(j !== 0){

                [DataToShuffle[i], DataToShuffle[j]] = [DataToShuffle[j], DataToShuffle[i]];
            }
        }
      
        const suffledQueueData = [...DataToShuffle];
        setQueueData(suffledQueueData);
        localStorage.setItem('QueueData',JSON.stringify(suffledQueueData))
    }

    const playnext = () =>{

        const songIndex = queueData?.findIndex((item)=>item?.id === Song?.id)

        if(songIndex !== -1 && songIndex !== queueData?.length - 1){
            setSong(queueData[songIndex+1])
            localStorage.setItem('CurrentSong',JSON.stringify(queueData[songIndex+1]))
            localStorage.setItem('Recently Played Songs',JSON.stringify([...recentSongs,queueData[songIndex+1]]))
        }

    }

    const playprevious = () =>{

        const songIndex = queueData?.findIndex((item)=>item?.id === Song?.id)
            
        if(songIndex !== -1 && songIndex !== 0){
        
            setSong(queueData[songIndex-1])
            localStorage.setItem('CurrentSong',JSON.stringify(queueData[songIndex-1]))
                localStorage.setItem('Recently Played Songs',JSON.stringify([...recentSongs,queueData[songIndex-1]]))
        
        }
    }

    const AddOnlyOneToQueue = (Data)=>{
        if(Data?.length === 1){
            setQueueData(Data)
            localStorage.setItem('QueueData',JSON.stringify(Data))
            setSong(...Data)
            localStorage.setItem('CurrentSong',JSON.stringify(...Data))
            localStorage.setItem('Recently Played Songs',JSON.stringify([...recentSongs,...Data]))
        }
    }

    const AddToQueue = (Data) =>{

        if(Data?.length === 1){
            if((queueData?.length === 0)||(queueData?.length === 1 && queueData[0]?.id !== Data[0]?.id)){
                if(queueData?.length === 0){
                    setSong(...Data)
                    localStorage.setItem('CurrentSong',JSON.stringify(...Data))
                    localStorage.setItem('Recently Played Songs',JSON.stringify([...recentSongs,...Data]))
                }
                setQueueData((prev)=>{
                    
                    localStorage.setItem('QueueData',JSON.stringify([...prev,...Data]))
                    return [...prev,...Data]
                })
            }

            if(queueData?.length >= 2){

                    const isPresent = queueData?.find((item)=>item?.id === Data[0]?.id)
                
                    if(!isPresent){
                        
                        setQueueData((prev)=>{
                           
                            let DataToMenupulate = [...prev]
                            const songIndex = DataToMenupulate?.findIndex((item)=>item?.id === Song?.id)
                            DataToMenupulate.splice(songIndex+1,0,...Data)
                            localStorage.setItem('QueueData',JSON.stringify([...DataToMenupulate]))
                            return [...DataToMenupulate]
                        
                        })
                        
                    }
            }

        }
        else if(Data?.length > 1){

            const DataToAdd = Data?.filter((datum)=>{
                return queueData?.every((dataAvailable)=>dataAvailable?.id !== datum?.id)
            })
            if(!Song?.id){
                setSong(DataToAdd[0])
                localStorage.setItem('CurrentSong',JSON.stringify(DataToAdd[0]))
                localStorage.setItem('Recently Played Songs',JSON.stringify([...recentSongs,DataToAdd[0]]))
            }
            setQueueData((prev)=>{
                localStorage.setItem('QueueData',JSON.stringify([...prev,...DataToAdd]))
                return [...prev,...DataToAdd]
            })
        
        }
    }

    const RemoveOneFromQueue = (Id) =>{

        const NewQueue = queueData?.filter((item)=>item.id !== Id)
        localStorage.setItem('QueueData',JSON.stringify(NewQueue))
        setQueueData(NewQueue)

    }

    const RemoveAllFromQueue = () =>{

        setSong({})
        localStorage.removeItem('CurrentSong')
        setQueueData([])
        localStorage.removeItem('QueueData')

    }

    return(
        <QueueContext.Provider value={{queueData,setQueueData,AddToQueue,AddOnlyOneToQueue,Suffle,RemoveOneFromQueue,RemoveAllFromQueue,songStatus,setSongStatus,playnext,playprevious}} >
            {children}
        </QueueContext.Provider>
    )

}

const QueueData = ()=>useContext(QueueContext);

export {QueueDataContext,QueueData}
