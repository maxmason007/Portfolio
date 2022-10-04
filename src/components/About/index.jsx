import { faCss3, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p className="bio">I'm an ambitious front-end developer looking for a role in established IT companies with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                    <p className="bio">I'm quietly confident, naturally curious, and perpetually working on improving my chops on design problem at a time.</p>
                    <p className="bio">If I need to define myself in one sentence that would be a family person, a music fanatic and man u fan. And of course, tech obsessed!</p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD810" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD810" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About 