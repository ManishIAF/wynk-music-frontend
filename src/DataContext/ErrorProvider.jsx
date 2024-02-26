import { createContext,useContext,useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({children}) => {

    const [Error,setError] = useState('');

    return (
        <ErrorContext.Provider value={{Error,setError}}>
            {children}
        </ErrorContext.Provider>
    )
}

const useError = () => useContext(ErrorContext);

export {ErrorProvider,useError};