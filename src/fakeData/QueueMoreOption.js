import { IndicatorData } from "../DataContext/IndicatorContext";
import { QueueData } from "../DataContext/QueueDataContext";

import { SongDataContext } from "../DataContext/SongDataContext";

const QueueMoreOptions = (Id)=>{

    const {setIndicator} = IndicatorData()
    const {RemoveOneFromQueue} = QueueData()
    const {Song} = SongDataContext()

    const handleAddToPlaylistData = (data) =>{
        localStorage.setItem('AddToPlaylistData',JSON.stringify(data))
        setIndicator({playlistIndicator:true})
    }
    
    const MoreOptionsData = [
        {
            id: 1,
            name : 'Download',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M12 7V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 13L11.6464 15.6464C11.8417 15.8417 12.1583 15.8417 12.3536 15.6464L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"></circle></svg>,
            operation : ()=>setIndicator((prev)=>{return{...prev,linkIndicator: true}}),
        },
        {
            id:2,
            name : 'Like this song',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none" class="w-6 h-6"><path d="M11.5344 17.8656L19.1281 10.2719C20.9938 8.39688 21.2656 5.33126 19.5031 3.37188C19.0611 2.87811 18.5231 2.47965 17.9218 2.20084C17.3206 1.92203 16.6689 1.76872 16.0064 1.7503C15.344 1.73187 14.6847 1.84871 14.0689 2.09367C13.4532 2.33863 12.8938 2.70657 12.425 3.17501L11 4.60938L9.77188 3.37188C7.89688 1.50626 4.83126 1.23438 2.87188 2.99688C2.37811 3.4389 1.97965 3.97695 1.70084 4.57816C1.42203 5.17938 1.26872 5.83112 1.2503 6.49358C1.23187 7.15604 1.34871 7.8153 1.59367 8.43108C1.83863 9.04686 2.20657 9.60623 2.67501 10.075L10.4656 17.8656C10.6078 18.0065 10.7999 18.0855 11 18.0855C11.2001 18.0855 11.3922 18.0065 11.5344 17.8656V17.8656Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
        },
        {
            id: 3,
            name : 'View Song details',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-6 h-6"><g clip-path="url(#clip0_2207_1956)"><rect width="24" height="24" fill-opacity="0.1"></rect><path d="M3.75 6H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 12H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 18H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 20.25C17.7426 20.25 18.75 19.2426 18.75 18C18.75 16.7574 17.7426 15.75 16.5 15.75C15.2574 15.75 14.25 16.7574 14.25 18C14.25 19.2426 15.2574 20.25 16.5 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.75 18V10.5L22.5 11.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_2207_1956"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>,
        },
        {
            id: 4,
            name : 'Share',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9766 6.87213L8.5231 10.378" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5231 13.622L13.9766 17.1279" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
            operation : ()=>setIndicator((prev)=>{return {...prev,shareIndicator:true}}),
        },
        {
            id: 5,
            name : 'Add To Playlist',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g clip-path="url(#clip0_1569_2985)"><path d="M3 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12.5H8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="17" cy="7" r="5" stroke="#22252C" stroke-width="7" stroke-linecap="round"></circle><circle cx="17" cy="7" r="6" fill="#22252C" stroke="white" stroke-width="1.5" stroke-linecap="round"></circle><path d="M17 5V9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M19 7L15 7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g><defs><clipPath id="clip0_1569_2985"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>,
            operation : ()=>handleAddToPlaylistData,
        },
        {
            id: 6,
            name : 'Report Abuse',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M4.76971 10.458L7.06999 6.39803C7.64702 5.37958 8.72713 4.75012 9.89768 4.75012L14.3686 4.75012C15.5392 4.75012 16.6193 5.37958 17.1963 6.39803L19.4966 10.458C20.0597 11.4519 20.0597 12.6684 19.4966 13.6622L17.1963 17.7222C16.6193 18.7407 15.5392 19.3701 14.3686 19.3701L9.89768 19.3701C8.72713 19.3701 7.64702 18.7406 7.06999 17.7222L4.76971 13.6622C4.20663 12.6684 4.20663 11.4519 4.76971 10.458Z" stroke="currentColor" stroke-width="1.5"></path><path d="M12 8V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="12" cy="15" r="1" fill="white"></circle></svg>,
        },
        {
            id: 7,
            name : 'Remove',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-6 h-6"><g clip-path="url(#clip0_2207_1958)"><rect width="24" height="24"></rect><path d="M20.25 5.25H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.75 9.75V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.25 9.75V15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_2207_1958"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>,
            operation:()=>RemoveOneFromQueue(Id)
        }
    ]

    return Song?.id !== Id?MoreOptionsData:MoreOptionsData.filter((data)=>data.id !== 7);
 
}

export default QueueMoreOptions;