import { useState } from "react";
import {AiTwotonePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
      

    
  return (
    <div className="flex flex-wrap  mx-auto mb-7 justify-evenly overflow-y-hidden items-center  bg-gray-50 w-screen h-screen">
      <div className="contact-left">
      <img src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png" alt="contact" />
      </div>
      <div className="flex flex-col items-center justify-center text-xl">
      <h1 className=" font-bold text-gray-950 text-4xl mb-2">Contact us</h1>
                <form onSubmit={handleSubmit} className="flex flex-col p-3 justify-center items-center">
                <input type="text" placeholder="Name" required className=" p-3 m-3 rounded-md box-border shadow w-96 border-2 border-solid border-gray-300"/>
                    <input type="email" placeholder="Email" required className="p-3 m-3 rounded-md box-border shadow-md w-96 border-2 border-solid border-gray-300"/>
                    <textarea placeholder="Type your Message here..." required className="p-3 m-3 rounded-md box-border shadow-md w-96 border-2 border-solid border-gray-300"></textarea>
                    <button type="submit" className="py-3 px-4 m-3 bg-blue-500  shadow border-none rounded-md box-border cursor-pointer hover:bg-green-950 ">Submit</button>
                    {message && <span>Thanks for contacting Babynama, We will reply ASAP.</span>}
                </form>
      <div className="flex gap-10 text-sm font-light">
        <div className="flex">
          <AiTwotonePhone
            className="font-bold text-xl  cursor-pointer"
            onClick={() => window.location.href = 'tel:+917303786959'}

          />
          <p style={{ display: 'none' }}>
            +91 7303786959
          </p>
        </div>
        <div className="flex box-border gap-1">
          <FiMail
            className="mt-1 text-xl  text-red-800 cursor-pointer"
            onClick={() => window.location.href = 'mailto:contact@gangahealth.com'}

          />
          <p style={{ display: 'none' }}>
            contact@gangahealth.com
          </p>
        </div>
      </div>
    </div>
    </div>
  );
    };

export default Contact;
