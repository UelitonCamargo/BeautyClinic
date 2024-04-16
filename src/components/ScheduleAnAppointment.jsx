import { Clock } from '@phosphor-icons/react'
import styled from './ScheduleAnAppointment.module.css'

import sloganImg from '../assets/slogan1.png'

export function ScheduleAnAppointment() {
    return (
        <section className={ styled.schedule }>
            <div className={ styled.text }>
                <h1>Elevando beleza e estilo, a estética que transforma.</h1>
                <p>Na nossa clínica, a beleza é mais do que aparência, É uma jornada para o empoderamento pessoal e confiança.</p>
                <a href="#">
                    <Clock />
                    Agendar um horário
                </a>
            </div>

            <div className={ styled.image }>
                <img className={ styled.sloganImage } src={ sloganImg } alt="Aplicação de máscara no rosto" />
                <div className={ styled.fundoImage }></div>
            </div>
        </section>
    )
}