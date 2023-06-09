import Head from 'next/head';
import '../styles/Home.module.css';
import { useState } from 'react';

//Importing Icons
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

//Importing Images
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>React Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>

        <section className="min-h-screen ">
        
          <nav className='py-10 mb-5 flex justify-between text-black'>
          <h1 className='text-xl font-burtons'>developedby ME</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill 
                onClick={() => {setDarkMode(!darkMode)}} 
                className='cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
            </li>
          </ul>
          </nav>

          <div className='text-black text-center p-10'>
          
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Abhishek Negi</h2>
            <h3 className='text-2xl py-3 md:text-3xl'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              Freelancer providing services for programming and design content 
              needs. Join me down below and lets get cracking.
            </p>

          </div>

          <div className='text-5xl flex justify-center gap-16 text-gray-600'>

          <AiFillTwitterCircle/>
          <AiFillLinkedin />
          <AiFillInstagram />

          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-12 overflow-hidden md:h-96 md:w-96'>

          <Image src={deved} layout='fill' objectFit='cover' />

          </div>

        </section>

        <section>

          <div>

            <h3 className='text-3xl pb-1 text-black'>Services I Offer</h3>
            <p className='text-base py-2 leading-8 text-gray-800'>
              Since the beginning pf my journey as a freelance designer 
              developer, I have done remote work for 
              <span className='text-teal-500'> agencies </span> 
              consulted for <span className='text-teal-500'> startups </span> 
              and collaborated with talented people to create digital products 
              for both business and consumer use.
            </p>

            <p className='text-base py-2 leading-8 text-gray-800'>
              I offer from a wide range of services, including brand design, 
              programming and teaching.
            </p>

          </div>

          <div className='lg:flex gap-10'>

            <div className='text-gray-800 text-center shadow-lg p-10 rounded-xl my-10'>

              <Image src={design} width={100} height={100} className='display'/>
              <h3 className='text-black text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core 
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='py-1'>Figma</p>
              <p className='py-1'>Photoshop</p>
              <p className='py-1'>Illustrator</p>

            </div>

            <div className='text-gray-800 text-center shadow-lg p-10 rounded-xl my-10'>

              <Image src={code} width={100} height={100} className='display'/>
              <h3 className='text-black text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core 
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='py-1'>Figma</p>
              <p className='py-1'>Photoshop</p>
              <p className='py-1'>Illustrator</p>

            </div>

            <div className='text-gray-800 text-center shadow-lg p-10 rounded-xl my-10' >

              <Image src={consulting} width={100} height={100} className='display'/>
              <h3 className='text-black text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core 
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='py-1'>Figma</p>
              <p className='py-1'>Photoshop</p>
              <p className='py-1'>Illustrator</p>

            </div>

          </div>

        </section>

        <section>

          <div className='text-black'>

            <h3 className='text-3xl py-1'>Portfolio</h3>

            <p className='text-base py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla laoreet diam sed diam mollis fringilla.
              <span className='text-teal-500'> agencies </span> 
              consulted for <span className='text-teal-500'> startups </span> 
              ut facilisis orci a vehicula feugiat. Maecenas velit tortor, 
              tristique eu diam eu, mattis dictum dolor.
            </p>

            <p className='text-base py-2 leading-8 text-gray-800'>
              Donec finibus risus nec mauris vestibulum sagittis.Cras non nisi 
              ullamcorper, dictum dui id, sodales turpis.
            </p>  

          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>

          </div>

        </section>

      </main>
    </div>
  )
}
