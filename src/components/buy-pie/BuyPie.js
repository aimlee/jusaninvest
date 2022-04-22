import {useState} from 'react'
import './Buypie.css'
import './modal.css';


function Buypie() {
    const [modealShow, setModalShow ] = useState(false)

    const toggleModal = () => {
        setModalShow(!modealShow);
    }

    return(
    <div className="wrapper-buy-pie">
        <Modal show={modealShow} handleClose={toggleModal}/>
        <button className="btn-buy-pie" onClick={toggleModal}>
            Купить пай
        </button>
    </div>
    );
}

function Modal({handleClose, show}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className="btn-buy-pie" type="button" onClick={handleClose}>
                    Спасибо
                </button>
            </section>
        </div>
    )
}

export default Buypie;
