import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-[1200px] py-10">
      <div className="wrapper bg-gray-50 px-4 py-8 shadow-lg rounded-md sm:px-10">
        <div className="mb-10 text-gray-900 w-full">
          <h1 className="text-3xl font-bold uppercase">Get in touch!</h1>
          <span>Please allow 24 Hours for a response</span>
          <div className="flex gap-3 w-full items-center mt-2">
            <span className="text-2xl p-1 rounded-full text-gray-50 bg-sky-400">
              <FaFacebookF />
            </span>
            <span className="text-2xl p-1 rounded-full text-gray-50 bg-sky-400">
              <FaTwitter />
            </span>
            <span className="text-2xl p-1 rounded-full text-gray-50 bg-sky-400">
              <FaYoutube />
            </span>
            <span className="text-2xl p-1 rounded-full text-gray-50 bg-sky-400">
              <AiFillInstagram />
            </span>
          </div>
        </div>

        <form className="space-y-6">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 bg-gray-900 focus:outline-sky-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 bg-gray-900 focus:outline-sky-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 bg-gray-900 focus:outline-sky-400"
          />
          <textarea
            className="block w-full rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 bg-gray-900 focus:outline-sky-400"
            placeholder="Your Message"
            style={{ resize: "none" }}
            cols={5}
            rows={10}
          />
          <button
            type="submit"
            className="w-1/2 bg-sky-400 p-2 rounded-md text-gray-50 shadow-lg hover:bg-sky-300 duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;