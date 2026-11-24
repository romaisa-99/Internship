
import React, { useState } from 'react'


export const CountContext = React.createContext()

export const ContextParent = ({ children }) => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>
                Count {count}
            </button>

            <CountContext.Provider value={count}>
                {children}
                {/* <MemoizedChildA /> */}
            </CountContext.Provider>
        </>
    )
}
