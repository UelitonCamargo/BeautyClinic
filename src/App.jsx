import { useState } from "react";
import { Header } from "./components/Header";

import Modal from 'react-modal'

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

      <Modal 
        isOpen={ isNewMenuModalOpen }
        onRequestClose={ handleCloseNewMenu }
      >
               <h1>oiii</h1> 
      </Modal>
    </>
  )
}


