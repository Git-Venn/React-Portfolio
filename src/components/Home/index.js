import { Link } from 'react-router-dom'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {   
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>Hi,</span>
                    <br />
                    <span className={letterClass}>I'm</span>
                    <AnimatedLetters letterClass={letterClass} strArray={" Chang Kyle Venn".split("")} index={12}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={"Software Engineer".split("")} index={28}/>
                </h1>
                <h2>Frontend Developer / Javascript Expert / Shopify Freelancer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home