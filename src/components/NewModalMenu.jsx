import Modal from 'react-modal'
import styled from './NewModalMenu.module.css'
import { X } from '@phosphor-icons/react'

export function NewModalMenu({ isOpen, onRequestClose }) {
    return (
        <Modal 
            isOpen={ isOpen }
            onRequestClose={ onRequestClose }
            overlayClassName="react-modal-overlay" //Zera o layout do modal
            className="react-modal-content" //Zera o layout do conteudo
        >
           <X className={ styled.buttonClosedMenu } onClick={ onRequestClose }/> 
            <nav className={ styled.menuMobile }>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Depoimentos</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </Modal>
    )
}