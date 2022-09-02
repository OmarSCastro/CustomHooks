import { useState } from "react"


export const useCounter = ( initialValue = 10) => {
  
    const [counter, setCounter] = useState( initialValue )

    const incrementar = () => {
        setCounter ( counter+1 );
    }

    const decrementar = () => {
        setCounter ( counter-1 );
    }

    const resetear = () => {
        setCounter ( 0 );
    }

    return {
        counter,
        incrementar,
        decrementar,
        resetear
    }
}


