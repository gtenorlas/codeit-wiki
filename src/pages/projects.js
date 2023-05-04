import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'


const projects = () => {
  return (
    <>
      <Head>
        <title>Code It .Wiki | Projects Page</title>
        <meta name='keywords' content='projects, codeitwiki, codeit' />
        <meta name='description' content='Projects Page' />
      </Head>

      <main className='w-full mb-16 fle flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Learning is key in solving"/>
        </Layout>
      </main>
    </>
  )
}

export default projects
