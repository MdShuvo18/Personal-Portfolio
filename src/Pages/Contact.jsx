import { useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7lcakvs', 'template_pm7kwm9', form.current, {
        publicKey: 'Q89Pv34XAsU980whF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;