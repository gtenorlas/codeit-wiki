import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePicture from '../../public/images/profile/gpt1.png'

const about = () => {
  return (
    <>
      <Head>
        <title>Code It .Wiki | About Page</title>
        <meta name='keywords' content='about' />
        <meta name='description' content='About Page' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Solving Ignites My Creativity'
            className='mb-10'
          />
          <div className='grid w-full grid-cols-8 gap-16'>
            <section className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
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
                you and help take your business to the next level. Let's work
                together to create something truly amazing!
              </p>
            </section>
            <section className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image
                src={profilePicture}
                alt='Gene Tenorlas'
                className='w-full h-auto rounded-2xl'
              ></Image>
            </section>
            <div className='col-span-2 flex flex-col items-end justify-content'>
              <div>
                <span>20+</span>
                <h2>projects completed</h2>
              </div>
              <div>
                <span>20+</span>
                <h2>projects completed</h2>
              </div>
              <div>
                <span>20+</span>
                <h2>projects completed</h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
