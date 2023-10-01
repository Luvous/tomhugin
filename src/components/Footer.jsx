import React from 'react'
import FooterS from '../resources/svgs/FooterS.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

function Footer() {
    const { scrollYProgress } = useScroll()
    const transY = useTransform(scrollYProgress, [0, 1], [-150, 400]);

    return (
        <section id='Footer'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                style={{
                    position: 'relative',
                    zIndex: '5',
                    translateY: transY
                }}>
                <h4 style={{
                    position: 'relative',
                    zIndex: '5',
                    width: '100%',
                    color: 'var(--main-black)',
                    fontSize: '2.2rem',
                    fontWeight: '600',
                }}>FOLLOW ME</h4>
            </motion.div>


            <div className='socials-cont'>
                <a href='/'>
                        <Icon icon="formkit:twitter" width="50" />
                </a>
                <a href='/'>
                        <Icon icon="ant-design:behance-circle-filled" width="55" />
                </a>
                <a href='/'>
                        <Icon icon="bi:github" width="50" />
                </a>
            </div>
            <img style={{
                marginTop: '15rem',
                position: 'relative',
                bottom: '-2rem',
                width: '100%',
            }} src={FooterS} alt='svg' />
        </section>
    )
}

export default Footer