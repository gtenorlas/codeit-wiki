import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>Code It .Wiki | About Page</title>
        <meta name='keywords' content='about' />
        <meta name='description' content='About Page' />
        <main>
          <AnimatedText text='I Help Solve Problems Through Code' />
        </main>
      </Head>
    </>
  )
}

export default about
