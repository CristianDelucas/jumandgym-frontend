import React ,{useState,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import whatsapp from '../../assets/img/whatsapp.png';
import logo from '../../assets/img/logo.png';
import { FiXCircle } from "react-icons/fi";
const Whatsapp = () => {

    const [message, setMessage] = useState('')

    const [flag, setflagWhatsapp] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        Aos.init({duration:1000});
        setTimeout(() => {
            if(!open){
                setflagWhatsapp(true)
            }
          }, 60000)
    }
        
    ,[]);


  return (
    <>
        <div className="c-whatsapp">
        {flag?
        <div className='c-whatsapp__card' data-aos="zoom-in">
            <div className='c-whatsapp__card--title'>
                <div className='c-whatsapp__card--title__close_btn' onClick={()=>{setflagWhatsapp(false)}}>
                    <FiXCircle/>
                </div>
                <div className='c-whatsapp__card--title__content'>
                    <div className='c-whatsapp__card--title__content--icon'>
                    <img src={logo} alt="chat_logo" width="40"/>
                    </div>
                    <div>
                        <div className='c-whatsapp__card--title__content--title'>JUM AND GYM</div>
                        <div className='c-whatsapp__card--title__content--state'> 🟢 Conectado</div>
                    </div>
                </div>
            </div>
            <div className='c-whatsapp__card--body'>
                    
                <div className='c-whatsapp__card--body__chat' data-aos="zoom-in">
                <div class="c-whatsapp__card--body__chat__wrapper-arrow">
                </div>
                    <div className='c-whatsapp__card--body__chat--title'>
                        Entrenador
                    </div>
                    <div className='c-whatsapp__card--body__chat--message'>
                        ¡Hola PUMA! 👋 <br/><br/>
                        ¿En que podemos ayudarte?
                    </div>
                    <div className='c-whatsapp__card--body__chat--hour'>
                        16:41
                    </div>
                </div>
            </div>
            <div className='c-whatsapp__card--footer'>
                <div>
                <input type="text" class="c-whatsapp__card--footer__input" placeholder="Escribe tu mensaje..." onChange={event => setMessage(event.target.value)} />
                </div>
                
                <div>
                <a href={'https://wa.me/34641040558?text='+message} target="_blank" className='c-whatsapp__card--footer__btn' rel="noreferrer" styles="color: white; background-color: green;">Empezar Chat</a>
                </div>
            </div>
        </div>
        :<></>}
        <div className="fixed-whatsapp">
            <img src={whatsapp} alt="whatsapp" onClick={()=>{setflagWhatsapp(!flag)}}/>
        </div>
        
        </div>
    </>
  )
}

export default Whatsapp