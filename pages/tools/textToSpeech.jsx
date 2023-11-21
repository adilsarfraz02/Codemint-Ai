import React, { useState } from 'react';
import { RiLoader2Fill } from "react-icons/ri";
import axios from 'axios';
import Link from 'next/link';
import audioBufferToWav from 'audiobuffer-to-wav';
import Head from 'next/head';
const TextToSpeechConverter = () => {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('en'); 
  const [speed, setSpeed] = useState('normal');
  const [audioURL, setAudioURL] = useState('');
  const [loading, setLoading] = useState(false)
  const rapidApiKey = '027ef7b1aemshe31fa55458511ebp10db9ejsn8790fc329105';
  const [load,setLoad] = useState(false);

  const convertToSpeech = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://text-to-speach-api.p.rapidapi.com/text-to-speech', {
        text,
        lang,
        speed,
      }, {
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'text-to-speach-api.p.rapidapi.com',
        },
        responseType: 'arraybuffer', 
      });
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await audioContext.decodeAudioData(response.data);

      const wavData = audioBufferToWav(audioBuffer);

      const wavBlob = new Blob([new Uint8Array(wavData)], { type: 'audio/wav' });

      const wavUrl = URL.createObjectURL(wavBlob);

      setLoading(false)

      setAudioURL(wavUrl);
      console.log(wavUrl)
    } catch (error) {
      console.error(error);
      setLoading(false)

    }
  };

  return (
    <div className="min-h-screen p-4 flex flex-col justify-between">
      <Head>
        <title>Text to Speech | Codemintai</title>
      </Head>
      <Link href="/tools" className="bg-zinc-400 max-md:relative max-md:m-2 dark:bg-zinc-700/50 absolute mt-5 ml-5 w-fit px-4 py-2 rounded-3xl hover:opacity-80 transition-all">
        &lt; Go back
      </Link>
      <h1 className="text-3xl font-bold text-gray-400 text-center mb-4">Text to Speech Converter 😍</h1>
      <div className="shadow-lg rounded-lg p-2 dark:bg-black/50">
        <div className="mx-auto w-full flex  max-sm:my-2 max-sm:h-[15rem]  my-4">
        {loading &&(
          <div className='text-4xl text-center transition-all mx-auto w-full grid place-content-center'><div class="custom-loader"/></div>
        )}  
        {audioURL && (
          <div className={`mx-auto ${loading ? 'hidden': 'block' } `}>
            <audio controls="true" className='accent-red-500'
            type="audio/mpeg" src={audioURL}>Your browser does not support the<code>audio</code> element.</audio>
            <a
              href={audioURL}
              download="text-to-speech.wav" 
              className="bg-pink-500 mt-2 text-white px-6 py-2 rounded-full text-center block "
            >
              Download Audio
            </a>
          </div>
        )}
        </div>
        <div className="flex gap-3 max-md:flex-col">
          <input
            type="text"
            id="text"
            value={text} placeholder='Enter Text to Genrate Speech'
            onChange={(e) => setText(e.target.value)}
            className="w-full py-4 px-4 max-md:py-3 text-black border-4 focus:outline-none focus:border-purple-500 placeholder:text-black text-lg  rounded-full"
          />
          <button
          onClick={convertToSpeech}
          className={`dark:bg-gray-50 max-sm:py-2 bg-black text-xl focus:outline-purple-500 
          bg-gradient-to-t from-purple-500 to-pink-500 hover:bg-pink-500 text-white dark:text-black px-8 rounded-full cursor-pointer `}
        >
        {loading ? (<RiLoader2Fill className={loading ? 'animate-spin' : ''}/>) : ('Convert')}
        </button>
        </div >
         <div className="items-center flex max-md:flex-col">
         <label htmlFor="lang" className='p-2'>Select Language:</label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="mt-2 rounded-3xl w-32 bg-zinc-800 p-2 text-white border-2 focus:outline-none focus:border-purple-500"
          >
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select>
            <br className='max-md:block hidden'/>
          <label htmlFor="speed" className=''>&nbsp; Speed: </label>
          <select
            id="speed"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="mt-2 rounded-3xl w-32 bg-zinc-800 p-2 text-white border-2 focus:outline-none focus:border-purple-500"
          >
            <option value="normal">{lang === 'ur' ? 'عام': 'Normal'} </option>
            <option value="slow">{lang === 'ur' ? 'سست': 'Slow'}</option>
            <option value="fast">{lang === 'ur' ? 'تیز': 'Fast'}</option>
          </select>
         </div>
        
      </div>
    </div>
  );
};

export default TextToSpeechConverter;
