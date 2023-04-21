import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>Code It .Wiki | About Page</title>
        <meta name='keywords' content='about' />
        <meta name='description' content='About Page' />
        <main className='flex w-full flex-col items-center justify-center'>
          <Layout className='pt-16'>
            <AnimatedText text='I Help Solve Problems Through Code' />
            <div className='grid w-full grid-cols-8 gap-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                  About Me
                </h2>
                <p>
                  Greetings everyone! My name is Gene Tenorlas, and I am excited
                  to introduce myself as a Full-Stack Developer at Code IT Wiki.
                  I am passionate about solving complex problems through code
                  and creating innovative solutions that push the boundaries of
                  technology. As someone who is constantly learning, I strive to
                  keep up-to-date with the latest industry trends and
                  developments to deliver the best results to our clients.
                </p>
                <p>
                  In addition to my work as a developer, I am also an avid
                  blogger and content creator. During my free time, I enjoy
                  sharing my knowledge and expertise with others through coding
                  tutorials and insightful blog posts on my social media
                  platforms. I strongly believe that knowledge is meant to be
                  shared, and I am always looking for ways to contribute to the
                  programming community.
                </p>
                <p>
                  At Code IT Wiki, we are dedicated to helping businesses
                  succeed in the digital world. As a Full-Stack Developer, I am
                  committed to using my skills and experience to help launch
                  your site and turn your ideas into reality. I am excited to
                  collaborate with you and help take your business to the next
                  level. Let's work together to create something truly amazing!
                </p>
              </div>
            </div>
          </Layout>
        </main>
      </Head>
    </>
  )
}

export default about
