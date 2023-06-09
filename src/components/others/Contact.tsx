import Link from "next/link";
import React, { useRef } from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const emailjsKey: any = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  const [state, handleSubmit] = useForm('xnqykdqr');
  if (state.succeeded) {
    return (
      <div className="w-full py-10 bg-[#333] ">
        <p className="text-xl text-center text-green-500">
          Thank you for your participation!{" "}
        </p>
        <p className="text-lg text-center w-4/5 mt-3 mx-auto text-green-400">
          We assure you that we will promptly get in touch with you at the
          earliest opportunity.
        </p>

      </div>
    );
  }

  return (
    <div
      id="contact"
      className="text-white h-auto w-full m-auto bg-[#333333] py-20"
    >
      <div className="mx-auto w-11/12 xl:flex lg:flex md:flex sm:block xs:block xxs:block items-start">
        <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
          <h2 className="text-4xl mb-5">Contact Me</h2>
          <p className="text-xl">
            Get in touch with me by filling out this form regarding any inquiry
            you have.
          </p>
          <ul className="w-11/12">
            <li className="flex items-center mt-3">
              <AiFillPhone className="text-white mr-3 text-2xl"></AiFillPhone>
              <Link
                className="text-xl text-[#8AC7FF]"
                href="tel:+8801738945678"
              >
                +880 1738 945678
              </Link>
            </li>
            <li className="flex items-center mt-3">
              <AiFillMail className="text-white mr-3 text-2xl"></AiFillMail>
              <Link
                className="text-xl text-[#8AC7FF]"
                href="mailto:faridmurshed9@gmail.com"
              >
                faridmurshed9@gmail.com
              </Link>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-11/12 xs:w-11/12 xxs:w-11/12 flex flex-col mx-auto sm:mt-10 xs:mt-10 xxs:mt-10"
        >
          {/* input fields wrapper started*/}
          <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-4 mb-3">
            <div>
              <label className="text-md uppercase" htmlFor="">
                name
              </label>
              <br />
              <input
                className="w-full h-14 mt-2 outline-none border-none rounded-md bg-[#222222]"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div>
              <label className="text-md uppercase" htmlFor="">
                email
              </label>
              <br />
              <input
                className="w-full h-14 mt-2 outline-none border-none rounded-md bg-[#222222]"
                type="email"
                required
                id="email"
                name="email"
              />
            </div>
          </div>
          {/* input fields wrapper ended*/}

          <div>
            <label htmlFor="" className="text-md uppercase">
              message
            </label>
            <br />
            <textarea
              required
              id="message"
              name="message"
              className="w-full resize-none h-[150px] mt-2 outline-none border-none rounded-md bg-[#222222]"
            />
          </div>
          <button
            type="submit"
            className="btn bg-[#8AC7FF] uppercase w-full py-3 mt-2 text-[#333333] rounded-md "
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
