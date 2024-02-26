import { useContext,createContext,useState} from "react";

const createArtistsContext = createContext();

const ArtistsDataProvider = ({ children }) => {

    const [Artists,setArtists] = useState([])

    return (
        <createArtistsContext.Provider value={{Artists,setArtists}}>
            {children}
        </createArtistsContext.Provider>
    )

}

const ArtistsDataContext = () => useContext(createArtistsContext)

export {ArtistsDataProvider,ArtistsDataContext};
