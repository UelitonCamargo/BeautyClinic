import { List } from "@phosphor-icons/react";
import styled from './Header.module.css'

export function Header({ onOpenNewMenu }) {
    return (
        <header className={ styled.containerHeader }>
            <h3>Beauty<span className={ styled.colorClinic }>clinic</span>.</h3>
            <button 
                onClick={ onOpenNewMenu }
                className={ styled.buttonMenuMobile }
            >
                <List />
            </button>
        </header>
    )
}