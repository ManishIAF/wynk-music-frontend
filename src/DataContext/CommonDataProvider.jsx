import { useContext,createContext,useState } from "react";

const CreateUniversalDataContext = createContext()

const UniversalDataProvider = ({children}) =>{

    const [Data,setData] = useState([])

    return (
        <CreateUniversalDataContext.Provider value={{Data,setData}} >
            {children}
        </CreateUniversalDataContext.Provider>
    )
}

const UniversalDataContext = () => useContext(CreateUniversalDataContext)

export {UniversalDataProvider,UniversalDataContext};