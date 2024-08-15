import styles from './styles.module.css';

import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbBriefcase2Filled } from "react-icons/tb";

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <img src="svg/ContratAe.svg" alt="ContratAe Logo" className={styles.logo}></img>

            <div className={styles.nav_container}>
                <ul className={styles.nav_list}>
                    <li className={styles.list_item}><FaHome /> Home</li>
                    <li className={`${styles.list_item} ${styles.selected}`}><TbBriefcase2Filled /> Vagas</li>
                    <li className={styles.list_item}><FaStar /> Favoritos</li>
                    <li className={styles.list_item}>
                        <IoNotifications /> 
                        Notificações
                        <span className={styles.badge}>7</span>
                    </li>
                </ul>

                <div className={styles.user_container}>
                    <span className={styles.user_settings}><IoSettingsSharp /></span>
                    <img src="002640-02-q.jpg" className={styles.user_img}></img>
                </div>
            </div>
        </nav>
    )
}