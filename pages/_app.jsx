import './globals.css'
import {useState} from 'react'
import Router from 'next/router';
import PageLoader from '../components/PageLoader';
import { SessionProvider,useSession } from "next-auth/react"
import Head from 'next/head'

export const metadata = {
    title: 'CodeMint Ai | The  ',
    description: 'The Platform of Ai Tools | ADil Sarfraz',
    keywords: 'artificial intelligence, machine learning, deep learning,adil,adil sarfraz',
    url: 'http://localhost:3000',
    site_name: 'CodeMintai',
    type: 'website',
    robots: 'index, follow',
    locale: 'en',
    twitter: 'https://twitter.com/adilsarfr00',
    facebook: 'https://www.facebook.com/profile.php?id=100014757152336',
    instagram: 'https://www.instagram.com/a4adilsarfraz',
    pinterest: 'https://in.pinterest.com/adilsarfr00/',
    linkedin: 'https://www.linkedin.com/in/adilsarfr00/',
    author: 'ADil Sarfraz',
    // opengraph twitter
}
const MyApp = ({ Component, session, pageProps }) => {
    const [loading ,setLoading] = useState(false)

    Router.events.on('routeChangeStart', () => {
        setLoading(true)
    });
    Router.events.on('routeChangeComplete', () => {
        setLoading(false)
    } ); 
    Router.events.on('routeChangeError', () => 
    {
    
    });  
    
    return (
        <SessionProvider session={session}>
            <Head>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content="Codemint Ai | The Group of Ai Tools" />
            <meta property="og:image" content="https://img.playbook.com/Fba0LGBhwfNByCpwV-PUwutZtJO7uihDJCbaylJhgxI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZlZDE1YjRk/LTcxMjctNDhlYy1h/MGQ4LTI1MWExNTg3/Y2M0Ng" />
            <meta property="twitter:description" content="https://img.playbook.com/Fba0LGBhwfNByCpwV-PUwutZtJO7uihDJCbaylJhgxI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZlZDE1YjRk/LTcxMjctNDhlYy1h/MGQ4LTI1MWExNTg3/Y2M0Ng" />
            <meta property="og:title" content="Codemint Ai | The Group of Ai Tools" />
            <meta property="og:url" content="https://codemint-ai.vercel.app" />
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <link rel="shortcut icon" href="https://img.playbook.com/Fba0LGBhwfNByCpwV-PUwutZtJO7uihDJCbaylJhgxI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZlZDE1YjRk/LTcxMjctNDhlYy1h/MGQ4LTI1MWExNTg3/Y2M0Ng" type="image/x-icon" />
            </Head>
            {loading ? <PageLoader /> : (
                <>
                    <Component {...pageProps} />
                </>
            )
        }
       
        </SessionProvider>
    )
}

export default MyApp;

