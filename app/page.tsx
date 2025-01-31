import { BrainCogIcon, GlobeIcon, ServerCogIcon, ZapIcon } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';




const feature= [
  {
    name: 'Store Your PDF Documents', 
    description: 'Keep all your PDF documents in one place. Access them from anywhere, anytime.',
    icon: ServerCogIcon,
  },
  {
    name: 'Blazing Fast Responses', 
    description: 'Get instant responses to your queries. No more waiting for the document to load.',
    icon: ZapIcon,
  },
  {
  name: 'Chat Memorization',
  description: 'Our chat system remembers your conversations. No more repeating yourself.',
  icon: BrainCogIcon,
  },
  {
    name: 'Cross-Platform Support',
    description: 'Chat PDF works on all devices. Access your documents from anywhere.',
    icon: GlobeIcon,
  }
];

export default function Home() {

  return (
    <main className="overflow-y-scroll p-2 bg-gradient-to-l from-green-500 to-yellow-500 flex-1 ">
      <div className="bg-black py-24 rounded-md text-white">
        <p className="text-center sm:text-lg text-sm font-serif">Your Favourite Document Assistant</p>
        <h1 className="sm:text-5xl font-bold text-center mt-5 text-2xl font-res" id="title">Transform your <span className="w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-yellow-600  to-purple-600">PDF</span> <br/> into Interactive Conversations!</h1>
        <p className="text-center mt-7 text-xl font-sans">Introducing <mark className="uppercase text-yellow-950 p-2 font-bold rounded-2xl ml-2 font-serif">Chat PDF</mark></p>
        <p className="text-center mt-10 text-md w-72 sm:w-full font-sans place-self-center">Join millions of students, researchers, and professionals to chat with any PDF,<br /> <b>extract insights</b>, and get <b>instant answers</b> with AI</p>
      <Link href="/dashboard" className="flex place-self-center justify-center items-center mt-10 bg-gradient-to-br from-indigo-500 to-green-500  rounded-3xl outline-none font-bold w-32 h-12 ">Get Started</Link>
      <div className="flex flex-col items-center mt-80 sm:mt-36 w-full justify-center flex-wrap scale-90 sm:scale-100 p-2 sm:p-0 ">
        <Image unoptimized src="/6538baee3c6e8b4a3ea418bc_Chat-with-any-pdf.jpg" width="585" height="72" alt="image" className="h-50 w-44 sm:w-fit sm:h-80 scale-125 sm:scale-100 sm:z-10 sm:mr-1 tr -translate-y-56  sm:translate-y-14 "/>
        <Image unoptimized src="/blank-form-laptop-computer-frame-white-background-add-template-infographic-presentation-advertisement-blank-170934006.webp" width="940" height="100" alt="laptop" className="place-self-center -mt-96 rounded-3xl shadow-none sm:shadow-default border-2 border-black" />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center sm:gap-2 mt-10">
        {feature.map((item, index) => (
          <div key={index} className="flex flex-col items-center mt-8 sm:mt-5 w-64 sm:w-full" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center">
            <item.icon className="text-4xl text-yellow-500" />
            <h2 className="text-lg sm:text-2xl font-bold mt-0 sm:mt-2">{item.name}</h2>
            <p className="text-center mt-2">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
