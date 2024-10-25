import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {   
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_3dn10cw', 'template_mbz58zj', refForm.current, 'FqgrvfkWgmOf5DJSI')
        .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
     )
    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={"Contact Me".split("")} index={15} letterClass={letterClass}/>
                </h1>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                To contact me directly, you can email me at:
                <span>kylevennchang@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[3.1570601060125667, 101.71242225033744]} zoom={3}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[3.1570601060125667, 101.71242225033744]}>
                        <Popup>Malaysia</Popup>
                    </Marker>

                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact