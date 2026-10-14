import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePicture from '../../public/images/profile/gpt2.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Code It .Wiki | About Page</title>
        <meta name='keywords' content='about' />
        <meta name='description' content='Code It .Wiki About Page' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light overflow-x-hidden'>
        <Layout className='pt-16 w-full'>
          <AnimatedText
            text='Solving Ignites My Creativity'
            className='mb-10 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8 text-center'
          />

          {/* 12-Column Grid: Image takes 4 columns, Description+Stats takes 8 columns to span full width */}
          <div className='grid w-full grid-cols-12 lg:grid-cols-1 gap-12 sm:gap-8 items-start'>

            {/* Profile Image Card: Left side on desktop (col-span-4), hidden on mobile/tablet */}
            <section className='col-span-4 lg:hidden relative h-max w-full rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light box-border'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePicture}
                alt='Gene Tenorlas'
                className='w-full h-auto rounded-2xl bg-dark dark:bg-light object-cover'
                priority
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
            </section>

            {/* Description + Stats Section: Fills remaining right side completely (col-span-8) */}
            <section className='col-span-8 lg:col-span-1 flex flex-col items-start justify-start w-full box-border'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                About Me
              </h2>
              <p className='font-medium w-full text-base sm:text-sm text-justify'>
                Greetings everyone! My name is Gene Tenorlas, and I am excited
                to introduce myself as a Full-Stack Developer at Code IT Wiki. I
                am passionate about solving complex problems through code and
                creating innovative solutions that push the boundaries of
                technology. As someone who is constantly learning, I strive to
                keep up-to-date with the latest industry trends and developments
                to deliver the best results to our clients.
              </p>
              <p className='my-4 font-medium w-full text-base sm:text-sm text-justify'>
                In addition to my work as a developer, I am also an avid blogger
                and content creator. During my free time, I enjoy sharing my
                knowledge and expertise with others through coding tutorials and
                insightful blog posts on my social media platforms. I strongly
                believe that knowledge is meant to be shared, and I am always
                looking for ways to contribute to the programming community.
              </p>
              <p className='font-medium w-full text-base sm:text-sm text-justify'>
                I am dedicated to helping businesses succeed
                in the digital world. As a Full-Stack Developer, I am committed
                to using my skills and experience to help launch your site and
                turn your ideas into reality. I am excited to collaborate with
                you and help take your business to the next level. Let&apos;s work
                together to create something truly amazing!
              </p>

              {/* Stats Counters Section spanning the full width of the description column */}
              <div className='flex flex-row sm:flex-col md:flex-row items-center justify-between w-full mt-12 gap-6'>
                <div className='flex flex-col items-start sm:items-center md:items-start justify-center'>
                  <span className='inline-block text-6xl xl:text-5xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                    <AnimatedNumbers value={20} />+
                  </span>
                  <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 md:text-base sm:text-sm'>
                    projects completed
                  </h2>
                </div>
                <div className='flex flex-col items-start sm:items-center md:items-start justify-center'>
                  <span className='inline-block text-6xl xl:text-5xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                    <AnimatedNumbers value={30} />+
                  </span>
                  <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 md:text-base sm:text-sm'>
                    blogs/videos completed
                  </h2>
                </div>
                <div className='flex flex-col items-start sm:items-center md:items-start justify-center'>
                  <span className='inline-block text-6xl xl:text-5xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                    <AnimatedNumbers value={6} />+
                  </span>
                  <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 md:text-base sm:text-sm'>
                    years of experience
                  </h2>
                </div>
              </div>

            </section>

          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
