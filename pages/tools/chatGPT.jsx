import React, { useState } from 'react';
import axios from 'axios';
import { FiSend, FiUser } from 'react-icons/fi';
import { AiOutlineLoading, AiOutlineSend } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import Footer from "../../components/Footer"

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const rapidApiKey = '027ef7b1aemshe31fa55458511ebp10db9ejsn8790fc329105';

  const handleSubmit = async () => {
    try {
        setIsLoading(true)
      const response = await axios.post('https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask', {
        query: input,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com',
        },
      });
      const botResponse = response.data; 
        console.log(botResponse);      

      setMessages([
        ...messages,
        { text: input, sender: 'user' },
        { text: botResponse.response, sender: 'bot' },
      ]);

      setInput('');
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  };
 
  const back = '< Go back'
  return (
    <div className=" min-h-screen p-4 flex flex-col justify-between">
      <Link href="/tools" className='dark:bg-zinc-500/50 max-sm:my-1 max-sm:mx-1 max-md:relative bg-zinc-400 absolute mt-5 ml-5 hover:opacity-80 transition-all w-fit px-4 py-2 rounded-3xl'>{back}</Link>
    <Head>
    <title>ChatGPT | Codemintai</title>
    </Head>
      <div className="dark:bg-black/50  shadow-lg p-2 rounded-lg">
      <h1 className="text-center text-3xl font-bold text-gray-400"> <span>Codemint ChatGPT ✨</span></h1>
       <div className="">
  
        <div className="h-[28rem] mb-12 overflow-y-auto grid max-sm:m-0 max-sm:mx-0 max-sm:w-full max-sm:h-[25.7rem]  mx-36 my-4">
          {isLoading && 
          <div className='text-4xl text-center transition-all mx-auto w-full grid place-content-center'><div class="custom-loader"/></div>}          {messages.map((message, index) => (
                <div key={index} className={`flex items-center gap-2 text-lg px-3 py-2  h-fit rounded-xl w-fit ${message.sender === 'user' ? 'font-sans bg-gray-200 mb-5 pt-3 text-black' : 'text-left bg-pink-500 '}`}>
                    <span className="text-black/70 font-semibold text-xl">
                        {message.sender === 'user' ? <FiUser className='text-xl text-white w-auto h-auto bg-pink-500 p-3 rounded-full '/>: ' ChatGPT : '}
                    </span>
                <pre className='font-sans flex flex-wrap w-full h-auto transition-all'> {message.text}</pre>
                </div>
            ))}
        </div>
       </div>
        <form className="mt-1 justify-center flex"  >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-3/4 py-2  px-8 outline-offset-1 focus:outline-2 focus:outline-dashed transition focus:outline-pink-500/70 h-16 text-black border shadow-xl dark:shadow-black rounded-l-full text-lg"
          />
          <button type='submit' onClick={handleSubmit}
          className={`bg-gradient-to-tr btn-shdow text-xl from-pink-500 to-purple-500 text-white px-4 py-2 rounded-r-full focus:outline-dashed focus:outline-white  ${
            isLoading ? 'opacity-50' : ''
            }`}
            disabled={isLoading}
            >
            {isLoading ? <AiOutlineLoading className="animate-spin transition-all mr-2 text-xl" /> : <AiOutlineSend  className='text-3xl mx-3'/>}
          </button>
        </form>
        <p className='text-center pt-1 opacity-75'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <Link href="/privacyPolicy" className='underline'>Codemint ChatGPT October Version@2023</Link></p>
      </div>
      <Footer/>
    </div>
  );
};

export default Chatbot;
