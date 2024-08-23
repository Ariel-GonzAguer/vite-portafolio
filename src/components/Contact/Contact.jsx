import React from 'react'
import styles from './Contact.module.css'

import github from '/icons/github_png.png'
import linkedin from '/icons/linkedin.svg'
import gmail from '/icons/gmail.svg'

export default function Contact() {
  return (
    <>
      <section id='contact' className={styles.contactSection}>
        <h2 className={styles.contactH2}>Lets Work Together!</h2>
        <p>
          I would love to work alongside You and your team.<br />
          Count on me to work alone or shoulder to shoulder with great people.<br />
          In this moment I can work in person (depending on location) or remotely, full-time, part-time or on a project basis.<br />
          Working together, I know we can achieve something sharp and beautiful.
        </p>

        <div className={styles.contactLinks}>

        <a href="https://www.linkedin.com/in/ariel-gonzales-ag%C3%BCero-959293276/" target="_blank" rel="noreferrer"><img
          src={linkedin} alt="Linkedin logo" className={styles.linkedinImg} /></a>
          
          <a href="https://github.com/Ariel-GonzAguer" target="_blank" rel="noreferrer"><img src={github} alt="GitHub logo"
            className={styles.githubImg} /></a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ariegonzaguer@gmail.com" target="_blank" rel="noreferrer"><img
            src={gmail} alt="Gmail logo" className={styles.gmailImg} /></a>

        </div>

      </section>
    </>
  )
}