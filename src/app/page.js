"use client"

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { FaSearch } from "react-icons/fa";

import styles from "./page.module.css";
import vacancy_list from "@/data/vacancy.json"
import FatFooter from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [pageSelected, setPageSelected] = useState(1)
  const paginationList = [1, 2, 3, 4, 5]

  return (
    <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>Vagas</h1>

        <p className={styles.search_title}>Busque Sua Próxima Oportunidade !</p>
        <div className={styles.search}>
            <input placeholder="Cargo ou palavra-chave" className={styles.input}/>
            <button className={styles.button}>Buscar <FaSearch /></button>
        </div>

        <div className={styles.container_vacancy}>
            <h2>Publicadas recentemente</h2>
            {vacancy_list.map((vacancy, index) => (
                <Card key={index} vacancy={vacancy}/>
            ))}
        </div>

        <div className={styles.pagination}>
            <p className={styles.pagination_button} onClick={() => 
              setPageSelected(pageSelected != 1 ? (pageSelected - 1) : pageSelected)
            }>
              Anterior
            </p>
            {paginationList.map((number, index) => (
              <div key={index} 
                className={number === pageSelected ? styles.pagination_number_selected : styles.pagination_number}
                onClick={() => setPageSelected(index + 1)}
                >{number}</div>
            ))}
            <p className={styles.pagination_button} onClick={() => 
                setPageSelected(pageSelected != 5 ? (pageSelected + 1) : pageSelected)
            }>Próximo</p>
        </div>

        <FatFooter />
    </main>
  );
}
