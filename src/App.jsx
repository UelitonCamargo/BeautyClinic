import { useState } from "react";
import { Header } from "./components/Header";

import Modal from 'react-modal'
import { NewModalMenu } from "./components/NewModalMenu";

Modal.setAppElement('#root') //Acessibilidade

export function App() {
  const [ isNewMenuModalOpen, setIsNewMenuModalOpen ] = useState(false)

  function handleOpenNewMenu() {
      setIsNewMenuModalOpen(true)
  }

  function handleCloseNewMenu() {
      setIsNewMenuModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewMenu={ handleOpenNewMenu }/>
      <NewModalMenu 
        isOpen={ isNewMenuModalOpen }
        onRequestClose={ handleCloseNewMenu }
      />
      
    </>
  )
}


