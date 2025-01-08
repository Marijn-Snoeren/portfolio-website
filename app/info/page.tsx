import React from 'react';

const Info = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col text-black">
      <div className="container mx-auto px-4 sm:px-6 pt-8 lg:px-8 flex flex-col min-h-screen">
        <main className="flex-grow">
          <p className="text-left pt-6 sm:pt-8 md:pt-12 lg:pt-16 text-sm sm:text-base leading-relaxed">
          Hoi, ik ben [jouw naam] en ik studeer ICT - Media Design aan Fontys Tilburg. Ik ben gepassioneerd door het combineren van technologie en ontwerp om gebruiksvriendelijke en functionele oplossingen te creëren. Tijdens mijn studie ben ik bezig om zowel creatief als technisch te denken, en ik ben altijd bezig met het verbeteren van mijn vaardigheden.
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Ik werk met verschillende tools en technieken, zoals HTML, CSS, JavaScript, Next.js, GSAP, Framer, WordPress, Storyblok, Photoshop, Illustrator en Figma. Ik heb ervaring met het ontwikkelen van websites, het ontwerpen van grafische materialen en het werken aan andere digitale projecten. Mijn focus ligt op het leveren van werk dat niet alleen goed functioneert, maar ook visueel aantrekkelijk en gebruiksvriendelijk is.
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Ik ben altijd op zoek naar nieuwe uitdagingen en mogelijkheden om mijn vaardigheden verder te ontwikkelen. Als je meer wilt weten over mijn werk of een project wilt bespreken, neem dan gerust contact met me op!
          </p>
        </main>
    
        <footer className="mt-8 sm:mt-12 mb-6 sm:mb-8">
          <div className="grid grid-cols-4 sm:flex sm:flex-row justify-between items-center gap-4">
            <a href="https://www.facebook.com/marijnsnoeren" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/marijnsnoeren/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/marijnsnoeren_" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.twitter.com/jiramgfx" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Info;

