import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    console.log({ name, email, phoneNumber, message });
  };

  return (
    <>
      <Head>
        <title>Contact - XanderIsWatchingYou</title>
      </Head>
      <div className="fadeInUp flex min-h-screen flex-col items-center justify-center p-5">
        <h1 className="mb-12 text-6xl font-extrabold text-white">
          <span>Contact</span> Us
        </h1>
        <form className="space-y-5 text-black" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="w-full border-2 border-gray-300 p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="w-full border-2 border-gray-300 p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="phoneNumber"
            className="w-full border-2 border-gray-300 p-2"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <textarea
            name="message"
            className="w-full border-2 border-gray-300 p-2"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
