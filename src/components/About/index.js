import "./index.scss"
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react"
import Loader from "react-loaders"

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {   
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {"About Me".split("")}
                        index = {15}
                    />
                </h1>
                <p>
                I'm a tech enthusiast with two years of experience building software, especially when it comes to automating things and making them work smoothly. I've always been fascinated by how things work, and recently I've been diving deep into computer networking. It's like a whole new world of puzzles and challenges that I'm excited to explore.
                </p>
                <p>
                I believe that understanding the bigger picture is key to success in tech, whether you're building software or managing networks. I'm always learning and growing, and I'm ready to take on new challenges and contribute to a great team.
                </p>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About