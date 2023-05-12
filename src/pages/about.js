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
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Solving Ignites My Creativity'
            className='mb-10 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <section className='col-span-3 flex flex-col items-start justify-start
            xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                About Me
              </h2>
              <p className='font-medium'>
                Greetings everyone! My name is Gene Tenorlas, and I am excited
                to introduce myself as a Full-Stack Developer at Code IT Wiki. I
                am passionate about solving complex problems through code and
                creating innovative solutions that push the boundaries of
                technology. As someone who is constantly learning, I strive to
                keep up-to-date with the latest industry trends and developments
                to deliver the best results to our clients.
              </p>
              <p className='my-4 font-medium'>
                In addition to my work as a developer, I am also an avid blogger
                and content creator. During my free time, I enjoy sharing my
                knowledge and expertise with others through coding tutorials and
                insightful blog posts on my social media platforms. I strongly
                believe that knowledge is meant to be shared, and I am always
                looking for ways to contribute to the programming community.
              </p>
              <p className='font-medium'>
                At Code IT Wiki, we are dedicated to helping businesses succeed
                in the digital world. As a Full-Stack Developer, I am committed
                to using my skills and experience to help launch your site and
                turn your ideas into reality. I am excited to collaborate with
                you and help take your business to the next level. Let&apos;s work
                together to create something truly amazing!
              </p>
            </section>
            <section className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
            xl:col-span-4 md:order-1 md:col-span-8
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePicture}
                alt='Gene Tenorlas'
                className='w-full h-auto rounded-2xl bg-dark dark:bg-light'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </section>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  blogs/videos completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  )
}

export default about
