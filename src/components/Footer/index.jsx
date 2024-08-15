"use client"

import styles from './styles.module.css';

import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { useState, useRef } from 'react';
import Swal from 'sweetalert2';

export default function FatFooter() {
    const email = useRef('')
    const [isValid, setIsValid] = useState(true)

    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setIsValid(emailRegex.test(email.current.value))
        if(emailRegex.test(email.current.value)) {
            Swal.fire({
                position: "top-end",
                toast: true,
                icon: "success",
                title: "Email cadastrado !",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

  return (
    <footer className={styles.fatFooter}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contato</h3>
          <ul>
            <li>(83) 1234-5678</li>
            <li>contratae@contato.com</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Nossas redes</h3>
          <FaLinkedin />
          <GrInstagram />
          <FaFacebookSquare />
        </div>
        <div className={styles.column}>
          <h3>Newsletter</h3>
          <p>Assine nossa newsletter para receber dicas sobre carreira.</p>
          <div className={styles.input_valid}>
            <input
              type="email"
              placeholder="Seu e-mail"
              className={styles.input}
              ref={email}
            />
            {!isValid && <span>Email inválido</span>}
            <button type="submit" onClick={isValidEmail} className={styles.button}>
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 ContratAe. <br />
            Uma empresa do Grupo Securitas Inc. <br />
            Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
