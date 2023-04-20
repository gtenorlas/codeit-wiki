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
              <div>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
              </div>
            </div>
          </Layout>
        </main>
      </Head>
    </>
  )
}

export default about
