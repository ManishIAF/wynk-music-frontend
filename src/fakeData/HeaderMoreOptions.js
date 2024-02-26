import { IndicatorData } from "../DataContext/IndicatorContext";
import { QueueData } from "../DataContext/QueueDataContext";

const HeaderMoreOptions = ()=>{

    const {AddToQueue} = QueueData()
    const {setIndicator} = IndicatorData()

    const handleAddToPlaylistData = (data) =>{
        localStorage.setItem('AddToPlaylistData',JSON.stringify(data))
        setIndicator({playlistIndicator:true})
    }

    const optionsData = [

        {
            id: 1,
            name : 'Download',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M12 7V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 13L11.6464 15.6464C11.8417 15.8417 12.1583 15.8417 12.3536 15.6464L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"></circle></svg>,
            operation : ()=>setIndicator({linkIndicator: true}),
        },
        {
            id: 2,
            name: 'Add to Queue' ,
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><rect x="3" y="9" width="18" height="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M5 6L6 4H18L19 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 17.1502V13.7694C10 13.4076 10.3724 13.1655 10.7031 13.3125L14.0839 14.8151C14.4609 14.9826 14.4843 15.5087 14.1237 15.7091L10.7428 17.5873C10.4096 17.7725 10 17.5315 10 17.1502Z" fill="white"></path></svg>, 
            operation : AddToQueue,
        },
        {
            id: 3,
            name : 'Save Playlist',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g clip-path="url(#clip0_1569_2985)"><path d="M3 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12.5H8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="17" cy="7" r="5" stroke="#22252C" stroke-width="7" stroke-linecap="round"></circle><circle cx="17" cy="7" r="6" fill="#22252C" stroke="white" stroke-width="1.5" stroke-linecap="round"></circle><path d="M17 5V9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M19 7L15 7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g><defs><clipPath id="clip0_1569_2985"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>,
            operation : handleAddToPlaylistData,
            
        },
        {
            id: 4,
            name : 'Share',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9766 6.87213L8.5231 10.378" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5231 13.622L13.9766 17.1279" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
            operation : ()=>setIndicator({shareIndicator: true}),
        },

    ]

    return optionsData;

}

export default HeaderMoreOptions;