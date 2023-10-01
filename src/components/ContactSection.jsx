import React from 'react';
import { Select } from '@mantine/core';
import { motion, useScroll, useTransform } from 'framer-motion';
import Satellite from '../resources/svgs/Satellite.svg';


function ContactSection() {
  const { scrollYProgress } = useScroll()

  const transYSatellite = useTransform(scrollYProgress, [0, 1], [-600, 140]);
  const transXSatellite = useTransform(scrollYProgress, [0, 1], [-250, -20]);

  return (
    <section id='Contact'>
      <div>
        <h2>
          CONTACT
        </h2>
      </div>
      <div className='form-container'>
        <form className='contact-form'>
          <input autoComplete='off' type='text' id='name' placeholder='Name' required></input>
          <input autoComplete='off' type='text' id='name' placeholder='E-Mail' required></input>
          <Select
            radius="xs"
            placeholder="Subject"
            data={[
              { value: 'job', label: 'Job' },
              { value: 'int', label: 'Interview' },
              { value: 'project', label: 'Project' },
              { value: 'personal', label: 'Personal' },
            ]}
            rightSectionWidth={50}
            styles={() => ({
              item: {
                color: 'white',
                fontSize: '1rem',
                borderRadius: '1px',
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: '#2f2f2f',
                    color: 'grey',
                    cursor: 'default',
                  },
                },
                '&[data-hovered]': {
                  backgroundColor: '#FF4450',
                  transition: 'all .1s ease-in'
                },
              }
            })}
            transitionProps={{ transition: 'pop-top-left', duration: 120, timingFunction: 'ease-in' }}

          />
          <textarea autoComplete='off' id="message" name="message" rows="4" required placeholder='Message'></textarea>
          <input value='SEND' name='submit' className='submit-button' type='submit' placeholder='SUBMIT'></input>
        </form>
      </div>
      <motion.div
                initial="hidden"
                whileInView="visible"
                style={{
                    translateY: transYSatellite,
                    translateX: transXSatellite,
                }}>
                <img style={{
                    zIndex: '2',
                    position: 'absolute',
                    right: '2rem',
                    width: '7rem',
                    bottom: '0',
                }} src={Satellite} alt='svg-planet' />
            </motion.div>
    </section>
  )
}

export default ContactSection