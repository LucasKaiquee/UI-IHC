'use client';

import './styles.css';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useState } from 'react';
import Swal from 'sweetalert2';
import Confirmation from '../Confirmation';
import Loading from '@/components/Loading';

export default function Card({vacancy}) {
    const [applay, setApplay] = useState(false)
    const [showConfirmButtonm, setShowConfirmButton] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleClick = (action) => {
        if(action === "cancel") {
            document.body.style.overflow = 'hidden';
            setShowConfirmButton(true)
        } else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setApplay(true)
                Swal.fire({
                    position: "top-end",
                    toast: true,
                    icon: "success",
                    title: "Currículo enviado !",
                    showConfirmButton: false,
                    timer: 1500
                })
            }, 2000)
        }
    }

    return(
        <div className="card-container">
            <h1>{vacancy.title}</h1>
            <p className="corporation">{vacancy.corporation} {vacancy.verify ? <RiVerifiedBadgeFill /> : null}</p>
            
            <p>Salário: {vacancy.remuneration}</p>
            <span className="type">{vacancy.type}</span>

            <h3>Requisitos:</h3>
            <div className="skills-container">
                {vacancy.skills.map((skill, index) => (
                    <p key={index} className="skill">{skill}</p>
                ))}
            </div>
            
            <h3>Descrição:</h3>
            <article>
                {vacancy.description}
            </article>
            
           {loading ? <Loading /> :
            <button onClick={() => handleClick(applay ? 'cancel' : 'applay')} className={applay ? "apllay" : null}>{!applay ? "Enviar Currículo" : "Cancelar"}</button>}
            {showConfirmButtonm && <Confirmation setApplay={setApplay} setShowConfirmButton={setShowConfirmButton}/>}
        </div>
    )
}