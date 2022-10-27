import {createContext} from 'react';

export const Context = createContext();

export default Provider = ({children}) => {

  const prefix = 'Olá, ';
  const username  = 'Jodean Nascimento';

  return (
    <Context.Provider value={{prefix,username}}>
      {children}
    </Context.Provider>
  )
}