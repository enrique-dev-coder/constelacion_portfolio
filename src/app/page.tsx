'use client';
import Hero from '@/components/Hero';
import WorkCard from '@/components/WorkCardTDW';
import WorkCardKidden from '@/components/WorkCardKidden';
// image imports
import TDWlogo from '../../public/assets/tdw.png';
import TDWcel from '../../public/assets/projects/TWD_cel.png';
import TDWPC from '../../public/assets/projects/TDW_PC.png';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div className="w-full bg-blueMain">
        <section className=" mx-auto py-10  ">
          <div className="flex  justify-center">
            <h1
              className="
             text-9xl font-medium my-8 py-1 border-y-2 tracking-widest uppercase border-y-pink-100    
            bg-gradient-to-r  from-pink-100 via-purple-300 to-fuchsia-300 
            inline-block text-transparent bg-clip-text
            md:text-6xl sm:text-5xl "
            >
              Nuestro{<br />} Trabajo
            </h1>
          </div>
          {/*work cards*/}
          <WorkCard
            title="The Dutch Way"
            logo={TDWlogo}
            celImg={TDWcel}
            pcImg={TDWPC}
            instaLink="https://thedutchways.com/"
            instaName="thedutch.way"
            webLink="https://thedutchways.com/"
            features={[
              'Branding para profesor de cursos de holandés.',
              'La cuenta de instagram aumento a más de 6,000 seguidores.',
              'Diseño y desarrollo de página web, optimizada para dispositivo mobiles.',
            ]}
            bgColor="bg-orange-100"
          />
        </section>
      </div>
    </main>
  );
}
