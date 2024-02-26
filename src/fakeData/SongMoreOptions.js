import { IndicatorData } from "../DataContext/IndicatorContext";
import { QueueData } from "../DataContext/QueueDataContext";

const SongMoreOptions = ()=>{

    const {setIndicator} = IndicatorData()
    const {AddToQueue} = QueueData()
    
    const handleAddToPlaylistData = (data) =>{
        localStorage.setItem('AddToPlaylistData',JSON.stringify(data))
        setIndicator({playlistIndicator:true})
    }

    const MoreOptionsData = [
        {
            id: 1,
            name : 'Free Download',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M12 7V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 13L11.6464 15.6464C11.8417 15.8417 12.1583 15.8417 12.3536 15.6464L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"></circle></svg>,
            operation : ()=>setIndicator({linkIndicator: true}),
        },
        {
            id:2,
            name : 'Set Free Hellotume',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="inline-block"><path d="M14.2351 2.99991C14.2426 2.99991 14.2426 2.99991 14.2351 2.99991ZM14.2351 2.99991C14.2426 2.99991 14.2501 2.99991 14.2501 2.99991H14.2351ZM20.0776 12.3524C19.2526 13.7474 18.0301 14.8649 16.5601 15.5474C15.0151 16.2074 13.4251 16.4849 11.6776 16.5149C10.9351 16.5374 9.75008 16.4999 9.75008 16.4999L10.8751 14.6249C9.32258 13.8224 8.19758 12.4274 7.71758 10.7399C7.29008 9.16491 7.53758 7.48491 8.40758 6.11241C9.68258 4.16241 11.9251 2.99241 14.2426 2.99991C15.4201 2.99991 16.5826 3.29241 17.6176 3.84741C19.1626 4.63491 20.3176 6.02991 20.7976 7.69491C21.2251 9.27741 20.9626 10.9724 20.0776 12.3524Z" stroke="currentColor" stroke-width="1.5"></path><path d="M14.077 11.6297C14.077 12.0708 13.7161 12.4317 13.275 12.4317C12.8339 12.4317 12.473 12.0708 12.473 11.6297C12.473 11.1886 12.8339 10.8277 13.275 10.8277C13.7161 10.8277 14.077 11.1886 14.077 11.6297ZM16.884 6.41675C16.884 6.19219 16.6996 6.01575 16.483 6.01575H14.478C14.2615 6.01575 14.077 6.19219 14.077 6.41675V10.2503C13.8364 10.114 13.5718 10.0257 13.275 10.0257C12.3928 10.0257 11.671 10.7475 11.671 11.6297C11.671 12.5119 12.3928 13.2337 13.275 13.2337C14.1572 13.2337 14.879 12.52 14.879 11.6297V6.81775H16.483C16.6996 6.81775 16.884 6.64131 16.884 6.41675Z" fill="white"></path><path d="M4.65917 12.8283L4.65923 12.8284L4.67152 12.8218C4.70455 12.8039 4.74911 12.8046 4.78593 12.8352C5.02689 13.2101 5.19576 13.6376 5.27922 14.0907L5.28272 14.1097L5.28721 14.1285C5.30462 14.2017 5.28707 14.2757 5.24939 14.3273L4.7059 14.8284L4.32473 15.1799L4.51888 15.6606C5.22203 17.4018 6.57106 18.7859 8.26727 19.5249L8.69375 19.7107L9.0497 19.4112L9.61303 18.9371C9.72131 18.8821 9.84122 18.8679 9.95898 18.8954C10.4096 19.023 10.8433 19.2258 11.2482 19.4913C11.2482 19.4929 11.248 19.4944 11.2476 19.4959C11.2472 19.4979 11.2463 19.5002 11.2442 19.5032L11.2328 19.5196L11.2222 19.5366C10.9211 20.0213 10.4103 20.3094 9.8766 20.3151C8.31215 20.0767 6.87745 19.2915 5.80349 18.09L5.79494 18.0804L5.78607 18.0712C5.07083 17.324 4.23798 16.1695 3.90042 15.0903C3.73336 14.5562 3.70816 14.1061 3.81154 13.7526C3.90694 13.4264 4.13485 13.0998 4.65917 12.8283Z" stroke="currentColor" stroke-width="1.5"></path></svg>,
        },
        {
            id: 3,
            name : 'Share',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9766 6.87213L8.5231 10.378" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5231 13.622L13.9766 17.1279" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
            operation : ()=>setIndicator({shareIndicator:true}),
        },
        {
            id: 4,
            name : 'Play Next',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M13.875 12L9.375 9V15L13.875 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.625 9V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
            operation : AddToQueue,
        },
        {
            id: 5,
            name : 'Add To Playlist',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g clip-path="url(#clip0_1569_2985)"><path d="M3 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12.5H8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="17" cy="7" r="5" stroke="#22252C" stroke-width="7" stroke-linecap="round"></circle><circle cx="17" cy="7" r="6" fill="#22252C" stroke="white" stroke-width="1.5" stroke-linecap="round"></circle><path d="M17 5V9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M19 7L15 7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g><defs><clipPath id="clip0_1569_2985"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>,
            operation : handleAddToPlaylistData,
        },
        {
            id: 6,
            name : 'Report Abuse',
            Icon : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline-block" stroke="currentColor"><path d="M4.76971 10.458L7.06999 6.39803C7.64702 5.37958 8.72713 4.75012 9.89768 4.75012L14.3686 4.75012C15.5392 4.75012 16.6193 5.37958 17.1963 6.39803L19.4966 10.458C20.0597 11.4519 20.0597 12.6684 19.4966 13.6622L17.1963 17.7222C16.6193 18.7407 15.5392 19.3701 14.3686 19.3701L9.89768 19.3701C8.72713 19.3701 7.64702 18.7406 7.06999 17.7222L4.76971 13.6622C4.20663 12.6684 4.20663 11.4519 4.76971 10.458Z" stroke="currentColor" stroke-width="1.5"></path><path d="M12 8V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><circle cx="12" cy="15" r="1" fill="white"></circle></svg>,
        }
    ]

    return MoreOptionsData

}

export default SongMoreOptions;