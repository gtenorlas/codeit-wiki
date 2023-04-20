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
          <Layout>
            <AnimatedText text='I Help Solve Problems Through Code' />
          </Layout>
        </main>
      </Head>
    </>
  )
}

export default about
