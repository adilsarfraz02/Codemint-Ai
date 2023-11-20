import Link from 'next/link'
import React from 'react'
import {Card, CardBody, Image, CardFooter} from "@nextui-org/react";

const dataTools = [
    {
        title: 'Codemint ChatGPT',
        link: '/tools/chatGPT',
        img: 'https://img.playbook.com/C4dz56bmMyqwT9cq_4BDDGz2PLCQPnWRsGamslYPDto/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE2YmNkZjNm/LTNiOTgtNGI3OC04/ODRiLWRmNjIzZTc1/Y2IyYQ'
    },
    {
        title: 'Text To Speech',
        link: '/tools/textToSpeech',
        img: 'https://img.playbook.com/z2gp0sItWlkXokpswtIctZAFNmrdROW3k1BLHsWh20g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NiYjIyYWNl/LTgxMGEtNDg3NC1h/NjZkLWM4YmVhMzQ1/ZjViZA'
    },
    {
        title: 'Image Generator',
        link: '/tools/textToImage',
        img: 'https://img.playbook.com/1MXl_RvMN6Rh3pVWF8DMHnS7pZmtwJn8-t9Yu9vxud0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdjYzc5ZGFh/LWFkYjUtNDVlMS04/ZTJhLTgzMDkwMDc1/YTI2MQ'
    }
]

function ToolsSec() {
    return (
        <main className='py-12'>
            <h1 className="text-center text-5xl text-transparent bg-clip-text 
        bg-gradient-to-bl font-bold from-pink-500 to-violet-500">
                Our Tools
            </h1>
            <div className="grid grid-cols-3 py-12 max-md:grid-cols-2 gap-6 px-4 max-sm:grid-cols-1 w-full h-auto">
                {dataTools.map((item, index) => (
                    <Link href={item.link} className='bg-zinc-400/10 rounded-xl hover:text-purple-500 transition' key={index}>
                        <Card className="py-4">
                            
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    alt={item.title}
                                    className="object-cover h-[280px] rounded-xl w-[460px]"
                                    src={item.img}
                                    fill
                                />
                            </CardBody>
                            <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                                <p className="text-center  text-2xl tracking-wide">{item.title}</p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}


            </div>
        </main>
    )
}

export default ToolsSec
