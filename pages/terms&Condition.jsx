import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Codemintai</title>
      </Head>
         
      <div className="container mx-auto py-8 px-3">
      <div className="flex gap-2">
            <Link href="/" className='text-pink-500 transition hover:text-purple-500'>Home</Link>\
            <Link href="#" className='hover:text-purple-500 transition active:text-purple-500'>Privacy Policy</Link>
        </div>
        <h1 className="text-4xl mb-1 ml-2 font-semibold">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4 ml-2">
          Last Updated:  September 05, 2023
        </p>

        <div className="bg-white/10 backdrop-blur-xl text-lg px-6 py-9 rounded-2xl shadow-md duration-300">
          <div>
            <div className="text-2xl mx-12 indent-5 max-md:mx-3">
              Welcome to <Link href="/" className="text-blue-500 hover:underline duration-300">CodeMintAI 👋</Link>, where we are dedicated to providing innovative AI tools and a seamless online experience. These Terms and Conditions are designed to inform you about the rules and regulations for using our AI tools and visiting our website
            </div>
            <br />
            <div>
              <span className="text-blue-500 text-xl font-bold">1. Use of AI Tools ✨:</span><br />
              <p className=" ml-5">
                CodeMintAI provides a range of AI tools and resources for educational and informational purposes. You agree to use these tools in accordance with applicable laws and regulations. You may not use our AI tools for any unlawful, harmful, or unauthorized purposes. CodeMintAI is not responsible for the consequences of your use of these tools, and we do not guarantee their accuracy or suitability for your specific needs. Any reliance you place on such tools is strictly at your own risk.
              </p>
            </div>
            <div>
              <p className="text-blue-500 text-xl font-bold">2. Privacy and Data Usage 🫠:</p>
              <p className=" ml-5">Protecting your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using CodeMintAI, you consent to the practices outlined in our Privacy Policy.</p>
            </div>
            <div>
              <p className="text-blue-500 text-xl font-bold">3. Intellectual Property 🎃:</p>
              <p className="ml-5">All content, including text, graphics, logos, and software, on this website is the property of CodeMintAI or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without explicit permission from CodeMintAI.</p>
            </div>
            <div>
              <p className="text-blue-500 text-xl font-bold">4. Disclaimer 😳:</p>
              <p className="ml-5">While we strive to provide accurate and up-to-date information, CodeMintAI makes no warranties or representations of any kind, either express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website. Your use of the website and its content is at your own risk.</p>
            </div>
            <div>
              <p className="text-blue-500 text-xl font-bold">5. Limitation of Liability ♾️: </p>
              <p className="ml-5">In no event shall CodeMintAI be liable for any direct, indirect, consequential, punitive, special, or incidental damages, including, without limitation, damages for loss of data or profit, arising out of or in connection with the use or performance of the website or the information, services, or related graphics contained on the website.</p>
            </div>
            <div>
              <p className="text-blue-500 text-xl font-bold">6. Governing Law 🦄:</p>
              <p className="ml-5">These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], and you agree to submit to the exclusive jurisdiction of the courts in [Your Jurisdiction] for the resolution of any disputes.</p>
            </div>
          </div>
        </div>
        <footer className="pt-2">
          <h1 className="text-center text-lg text-pink-500">© 2023 CodeMintAi —
            <a href="https://www.facebook.com/profile.php?id=100014757152336" className="text-zinc-900 dark:text-gray-400 ml-1 hover:text-pink-500" rel="noopener noreferrer" target="_blank">@ADil Sarfraz</a>
          </h1>
        </footer>
      </div>
    </>
  );
};

export default Terms;
