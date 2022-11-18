import FadeWords from '../components/Fadewords';
import BounceLetter from '../components/BounceLetter';
import { basicInfo, occupations, socials } from '../constants/siteInfo';

function Home() {
  return (
    <div>
      <main>
        <section className="hero min-h-screen" id="hero">
          <div className="hero-content text-center">
            <div className="max-w-screen-lg">
              <h1 className="flex justify-center cursor-pointer text-4xl md:text-4xl md:mb-2 lg:text-8xl ">
                {basicInfo.author.split('').map((letter, index) => (
                  <BounceLetter letter={letter} key={`letter-${index}`} />
                ))}
              </h1>
              <div className="divider my-0 md:my-2" />
              <FadeWords
                words={occupations}
                className="text-xl md:text-2xl lg:text-4xl mb-8"
              />
              <div className="flex gap-2 items-center justify-center">
                {socials.map(({ name, url }, index) => (
                  <a key={`social-${index}`} href={url}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
