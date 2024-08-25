import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

import styles from "./Contact.module.css";

export const ContactFormEmailJS = () => {
  const form = useRef();

  async function sendEmail(e) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "portafolioService",
        "portafolio_template_1",
        form.current,
        {
          publicKey: "_NRDta8MNg0agxoFR",
        }
      );

      toast.success("Your message has been sent successfully. I will contact you as soon as possible.");
      e.target.reset();
    } catch (error) {
      toast.error("Oh no! Something went wrong. Please try again later.");
    }
  }

  return (
    <>
      <Toaster richColors position="bottom-center" closeButton />
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <h3>Send me a message!</h3>

        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required rows="10" cols="32" id="message" />

        <input type="submit" value="SEND MESSAGE" />
      </form>
    </>
  );
};
