import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import bootstrap from './boot.png';
import css from './css-iconn.png';
import html from './html-icon.png';
import './index.scss';
import js from './js-icon.png';
import passwordimage from './passwordimage.png';
import blackjackimage from './poker.png';
import react from './react.png';
import portimgone from './ssc2.png';


const Project = (props) => {

    // function Button(props) {
    //     const computedClassName = props.active ? 'active' : 'muted';
    //     return( <button className={computedClassName}>Click Me</button>
    //   }

    //   <Button active/> // <button class="active">Click Me</button>
    //   <Button /> // <button class="muted">Click Me</button>

    return (
        <div className="body">
            <div className='project-container'>
                <div className="images">
                    <img id="image" src={props.image} alt="" />
                </div>
                <h1 className="title">{props.title}</h1>
                <div className='write-up'>
                    {props.blurb}
                </div>
                <div className="icons">
                    <img id="html" src={props.html} alt="" />
                    <img id="css" src={props.css} alt="" />
                    <img id="js" src={props.js} alt="" />
                    <img id="boot" src={props.bootstrap} alt="" />
                    <img id="react" src={props.react} alt="" />

                </div>
                <ul className="details-container">
                    <li className="details"><a href={props.link} target="_blank" className="livedemos">Live Demo</a></li>
                </ul>
            </div>
        </div>
    )
}



const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sscText = "This is a static website for the DJ duo & events company, 'Sunset Social Club'. I built the site in React, used Bootstrap for the styling and included a contact form using Email.js so no back-end was necessary. All the UI/UX was designed by myself.  "
    const randomPassword = "Using HTML, CSS & Vanilla JS as part of the Frontend Developer Career Path on Scrimba I put together a useful random password generator app built. Now, you will never need to think of a new password again!"
    const countdownTimer = "Everybody loves Blackjack so I thought I'd make this game to showcase some JavaScript skills. Just like the random password app, this game was also built on the Frontend Developer Career Path on Scrimba. It uses HTML, CSS & Vanilla JavaScript."
    // if (this.props.React === '') {
    //     return ("ok!")
    // }


    return (
        <>
            <div className='container-projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='snippet-container'>
                    <Project image={portimgone} title={'Sunset Social Club Website'} link={"https://melodic-kulfi-274649.netlify.app/"} blurb={sscText} html={html} css={css} js={js} bootstrap={bootstrap} react={react} />
                    <Project image={passwordimage} blurb={randomPassword} title={'Random Password Generator'} link={"https://eclectic-otter-8c291f.netlify.app/"} html={html} css={css} js={js} bootstrap={bootstrap} react={react} />
                    <Project image={blackjackimage} blurb={countdownTimer} title={'Blackjack Game'} link={"https://timely-dusk-0ea6fe.netlify.app/"} html={html} css={css} js={js} bootstrap={bootstrap} react={react} />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio 