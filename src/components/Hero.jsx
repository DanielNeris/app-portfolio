import { motion } from 'framer-motion'
import CountUp from 'react-countup'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { cvPDF, homeImg, link, logo, testimonial1 } from '../assets'
import { graphcInformations, socialMedias } from '../constants'
import SocialMediasCard from './SocialMediasCard'

const GraphCard = ({ data }) => {
  return (
    <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 hidden">
      {data.map((item, index) => (
        <div className="flex items-center" key={index}>
          <CountUp
            className="bold text-6xl"
            start={0}
            suffix={item.sufix}
            end={item.time}
            duration={4}
            delay={2}
          />
          &nbsp;
          <span
            className="text-[#dfd9ff]"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  )
}

const Hero = () => {
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div className="flex items-center">
            <div>
              <span>
                Senior Software Engineer · Fintech & Decentralized Systems
              </span>
              <h1
                className={`${styles.heroHeadText} lg:text-[70px] text-white`}
              >
                Hi, I'm <span className="text-[#915EFF]">Daniel Neris</span>
              </h1>
              <p
                className={`${styles.heroSubText} mt-2 lg:text-[20px] text-gray`}
              >
                I design and build backend-first, production-grade platforms
              </p>
              <p
                className={`${styles.heroSubText} mt-2 lg:text-[20px] text-gray`}
              >
                for finance, decentralization, and P2P systems.
              </p>
              <div className="md:flex items-center mt-10 text-center">
                <button
                  type="button"
                  onClick={() => window.open(cvPDF, '_blank')}
                  className="bg-transparent border-solid border-2 border-[#915EFF] rounded-full text-white font-bold py-3 px-5 mr-5 mb-10 md:mb-0"
                >
                  <div className="flex justify-center items-center">
                    <span className="mr-3">SEE MY RESUME</span>
                    <img
                      src={link}
                      alt="link"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </button>

                <SocialMediasCard socialMedias={socialMedias} />
              </div>
            </div>
            <div className="flex items-center hidden lg:block">
              <img className="rounded-full" src={homeImg} alt="" width={700} />
            </div>
          </div>
          <GraphCard data={graphcInformations} />
        </div>
      </div>

      {/* <div className="absolute md:bottom-10 none bottom-[-100px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default SectionWrapper(Hero, 'home')
