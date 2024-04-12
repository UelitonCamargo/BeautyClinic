import { List } from "@phosphor-icons/react";
import styled from './Header.module.css'

export function Header({ onOpenNewMenu }) {
    return (
        <header className={ styled.containerHeader }>
            <h3>Beauty<span className={ styled.colorClinic }>clinic</span>.</h3>
            <nav className={ styled.menuDesktop }>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Depoimentos</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
            <button 
                onClick={ onOpenNewMenu }
                className={ styled.buttonMenuMobile }
            >
                <List />
            </button>
        </header>
    )
}