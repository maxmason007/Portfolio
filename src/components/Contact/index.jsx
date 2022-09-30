import emailjs from '@emailjs/browser';
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const Contact = () => {

    // const gaEventTracker = useAnalyticsEventTracker('send');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f1i2k13', 'template_gv6dstj', form.current, '9BYin_SuswFPDzS_T')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // emailjs.send('service_f1i2k13', 'template_12bti7w', emailContent, '9BYin_SuswFPDzS_T')




    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p className='contact-text'>
                        I am interested in freelance opportunities - especially ambitous or large projects. However, if you have any other requests or questions, don't hesitate to contact me use the below form. Or you can email me directly at masonmax@hotmail.co.uk
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} onClick={() => gaEventTracker('send')}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input name="submit" type="submit" value="SEND" className="flat-button" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* <div className='info-map'>
                    Max Mason,
                    <br />
                    UK,
                    <br />
                    Torquay
                    <br />
                    <span>masonmax@hotmail.co.uk</span>
                </div> */}
                <div className='map-wrap'>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                This is where I'm based! Lets go have a coffee :D
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact