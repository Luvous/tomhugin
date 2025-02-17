import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import RocketShip from '../resources/svgs/RocketShip.svg';
import Planet from '../resources/svgs/Planet.svg';
import Moon from '../resources/svgs/Moon.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';


function Home() {
    const { scrollYProgress } = useScroll()
    const transY = useTransform(scrollYProgress, [0, 1], [-200, 890]);
    const transX = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const transYMoon = useTransform(scrollYProgress, [0, 1], [-150, 250]);
    const transXMoon = useTransform(scrollYProgress, [0, 1], [40, -150]);
    const transYPlanet = useTransform(scrollYProgress, [0, 1], [-100, -350]);


    return (
        <section>
            <motion.div
                className='first-planet'
                initial="hidden"
                whileInView="visible"
                style={{
                    translateY: transYPlanet
                }}>
                <img src={Planet} alt='svg-planet' />
            </motion.div>
            <motion.div
                className='second-planet'
                whileHover={{ rotate: 1 }}
                initial="hidden"
                whileInView="visible"
                style={{
                    translateY: transYMoon,
                    translateX: transXMoon
                }}>
                <img src={Moon} alt='svg-moon' />
            </motion.div>
            <div className='page-title'>
                <div>TOM<br />VARELA</div>
            </div>
            <motion.div
                whileHover={{ rotate: 1.8 }}
                initial="hidden"
                whileInView="visible"
                style={{
                    translateY: transY,
                    translateX: transX,
                }}>
                <img className='rocket-ship' src={RocketShip} alt='svg-rocketship' />
            </motion.div>
            <div className='subtitle'>
                <div> DEVELOPER <br /> & <br /> DESIGNER </div>
            </div>
            <hr />
            <ProjectsSection />
            <hr />
            <ContactSection />
            <Footer />
        </section>
    )
}

export default Home