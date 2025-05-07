import React from 'react'
import "./about.css"
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className='about_container'>
            <div className='about_content'>
                <motion.h2
                    className='title'
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    About FADAMOS STORE
                </motion.h2>
                <motion.p
                    className='about'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    FADAMOS STORES is a full-retail store 
                    offering only the best selection of luxury items. 
                    We take pride in our ability to provide the finest quality, be it of products or
                    services. You won't regret patronising us. 
                </motion.p>
                <motion.p
                    className='about'
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    FADAMOS also possesses a plethora of brand new stuffs; not limited to but including 
                    the best of the best, and much more! Our experienced and 
                    knowledgeable staff is 100% dedicated to providing exceptional service and expertise 
                    in all things. What are you waiting for? <br></br><strong>Patronise us today!</strong>
                </motion.p>
                <motion.div
                    className='btn_container'
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.6}}
                >
                    <NavLink to="/">
                        <motion.button
                            className='btn'
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                            SHOP NOW
                        </motion.button>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
