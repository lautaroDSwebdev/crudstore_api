import React, { createContext } from 'react'


const CreateContextProv = createContext()

export const ContextProvider = ({children}: {children: React.ReactNode}) => {


  return (
    <CreateContextProv.Provider value={``} >
        {children}
    </CreateContextProv.Provider>
  )
}
