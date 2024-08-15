import { GoAlertFill } from "react-icons/go";

import "./styles.css";

export default function Confirmation({setShowConfirmButton, setApplay}) {
    return (
        <div className="confirmation"> 
            <div className="confimation-container">
                <i><GoAlertFill /></i>

                <p>Deseja cancelar candidatura para essa vaga ?</p>
                
                <div>
                    <button className="button-manter"
                    onClick={() => {
                        setShowConfirmButton(false)
                        document.body.style.overflow = 'scroll';
                    }}
                    >
                        Manter
                    </button>
                    <button className="button-cancel"
                    onClick={() => {
                        setApplay(false)
                        setShowConfirmButton(false)
                        document.body.style.overflow = 'scroll';
                    }}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}