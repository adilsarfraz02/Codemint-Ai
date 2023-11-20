import Head from 'next/head';
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen 0">
      <Head>
        <title>Privacy Policy - Codemintai</title>
      </Head>
      <div className="container mx-auto py-8 px-3">
      <div className="flex gap-2">
            <Link href="/" className='text-pink-500 transition hover:text-purple-500'>Home</Link>\
            <Link href="#" className='hover:text-purple-500 transition active:text-purple-500'>Privacy Policy</Link>
        </div>
        <h1 className="text-4xl mb-1 ml-2 font-semibold">Privacy Policy</h1>
        <p className="text-gray-600 mb-4 ml-2">
          Last updated: September 15, 2023
        </p>

        <div className="bg-white/10 backdrop-blur-xl text-lg p-4 rounded-2xl shadow-md">
            <div>
                <div className="text-xl mx-12 indent-5 max-md:mx-3">
                 Welcome to <Link href="/" className=" text-blue-500 hover:underline duration-300">Codemintai</Link> 🧞‍♂️, where we are dedicated to providing innovative AI tools and a seamless online experience. This Privacy Policy is designed to inform you about how we collect, use, disclose, and protect your personal information when you interact with our AI tools and visit our website. We value your privacy and are committed to ensuring that your personal data is handled responsibly and in compliance with applicable data protection laws and regulations.
                </div>
                <br />
                <div>
                    <span className="text-blue-500 text-xl font-bold"> 1. Information We Collect 💁:</span><br />
                    <p className="font-bold ml-5">
                    We may collect various types of information from you, including:
                    </p>

                    <p className="indent-5">
                    Personal Information: When you create an account or use our services, we may collect your name, email address, and other contact information.
                    Usage Information: We gather data about how you interact with our website and AI tools, such as your IP address, device information, browser type, and the pages you visit.
                    Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your browsing experience and collect data about your online behavior.
                    
                    </p>
               
                </div>
                <div>
                    <p className="text-blue-500 text-xl font-bold">2. How We Use Your Information ✨:</p>
                    <p className="font-bold ml-5">We use the information we collect for various purposes, including:
                    </p>
                    <p className="indent-5">
                    Providing Services: We use your data to deliver our AI tools and personalize your experience.
                    Communication: We may send you emails or notifications related to your account or services.
                    Analytics: We analyze user data to improve our website and AI tools.
                    Marketing: With your consent, we may use your information for marketing purposes.
                    </p>
                </div>
                <div>
                    <p className="text-blue-500 text-xl font-bold">3. Data Sharing and Disclosure 🥶:</p>
                    <p className="font-bold ml-5">We do not sell your personal information to third parties. However, we may share data with:</p>
                    <p className="indent-5">
                    Service Providers: We may engage third-party service providers to assist us in delivering our services, and they may access your data as necessary.
                    Legal Compliance: We may disclose your information to comply with legal obligations or protect our rights.
                    </p>
                </div>
                <div>
                    <span className="text-blue-500 text-xl font-bold">4. Your Choices 😵:</span>
                    <p className="font-bold pl-5">You have certain rights and choices regarding your data, including:
                    </p>
                    <p className="indent-5">
                    Access: You can request access to the personal information we hold about you.
                    Correction: You can update or correct your data.
                    Deletion: You can request the deletion of your account and data.
                    Opt-Out: You can opt out of marketing communications.</p>
                </div>
                <div>
                  <p className="text-blue-500 text-xl font-bold">5. Security Measures 🪪:</p>
                    <p className="indent-5">
                    We take security seriously and employ industry-standard measures to protect your data from unauthorized access or disclosure.
                    We take reasonable measures to protect against unauthorized access to or alteration of your information by us, but no security system is 100%
                    </p>
                </div>
               <div>
                <p className="text-blue-500 font-bold">6. Children's Privacy 🔐:</p>
                <p className="indent-5">
                    Our services are not intended for individuals under the age of 13, and we do not knowingly collect information from children.
                </p>
               </div>
                <div>
                    <p className="text-blue-500 font-bold">7. Changes to this Policy 👻:</p>
                    <p className="indent-7">
                        We may update this Privacy Policy to reflect changes in our practices or legal requirements. Please review this policy periodically.
                    </p>
                </div>
                <div>
                <p className="text-blue-500 font-bold">8. Contact Us 🙈:</p>
                <p className="">
                If you have questions or concerns about this Privacy Policy or your data, please contact us at <a href='mailto:codemint@pupharma.online' className='font-bold underline'>Codemint@pupharma.online</a>.
                </p>
                Thank you for choosing Codemintai. Your trust is essential to us, and we are committed to maintaining the privacy and security of your data while providing you with top-notch AI tools and services.

                </div>
            </div>
        </div>
        <footer className="pt-2">
          <h1 className="text-center text-lg text-pink-500">© 2023 CodeMintAi —       <a href="https://www.facebook.com/profile.php?id=100014757152336" className="text-zinc-900 dark:text-gray-400 ml-1 hover:text-pink-500" rel="noopener noreferrer" target="_blank">@ADil Sarfraz</a>
          </h1>
        </footer>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
