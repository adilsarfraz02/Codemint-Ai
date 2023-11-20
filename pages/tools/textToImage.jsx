import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.css";
import toast from "react-hot-toast";
import Link from 'next/link';
import { saveAs } from 'file-saver';
import { BsDownload } from 'react-icons/bs'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isImageReadyForDownload, setIsImageReadyForDownload] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    toast.loading('Waiting...');
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({prediction})
      setPrediction(prediction);

    }
    setIsLoading(false);
    setIsImageReadyForDownload(prediction.status === "succeeded"); 
  };

  const handleDownloadImage = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'generated-image.png'); 
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  const back = '< Go back';

  return (
    <div>
      <Link href="/" className='dark:bg-zinc-700/50 bg-zinc-400 shadow-lg absolute mt-5 ml-5 hover:opacity-80 transition-all w-fit px-4 py-2 rounded-3xl'>{back}</Link>
      <Head>
        <title>Image Generator | Codemintai</title>
      </Head>
      <div className={styles.container}>
        <h1 className="text-center text-3xl py-2 mb-6 font-bold text-gray-400">
          <span>Image Generator ✨</span>
        </h1>
        <p className="ml-5 text-[#b232d5]">
          Create Imaginations:
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="prompt" placeholder="Enter a prompt to Generate an image" className="dark:placeholder:text-gray-50/20 text-white placeholder:text-gray-100"/>
          <button type="submit" className={`dark:bg-white bg-black text-white dark:text-black rounded-full px-5 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isLoading ? 'Wait...🤞' : 'Create✨'}
          </button>
        </form>

        {error && <div>{error}</div>}
        {isLoading && <div className='text-4xl text-center transition-all mx-auto w-full grid place-content-center'><div class="custom-loader"/></div>}
        {prediction && (
          <div>
            {prediction.output && (
              <div className={styles.imageWrapper}>
                <img
                  fill
                  src={prediction.output[prediction.output.length - 1]}
                  alt="output"
                  sizes='60vw'
                  className="rounded-2xl bg-gray-300"
                />
              </div>
            )}
            {isImageReadyForDownload && (
              <button
                className="bg-purple-500 hover:bg-purple-800 focus:bg-purple-800  flex items-center gap-2 text-white rounded-2xl px-4 py-2 mt-4"
                onClick={() => handleDownloadImage(prediction.output[prediction.output.length - 1])}
              >
                <span>Download </span> <BsDownload className="font-extrabold"/>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
