import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icon'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article>
      <Link href={link} target='_blank'>
        <Image src={img} alt={title} className='w-full auto' />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target='_blank'>
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target='_blank'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

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
          <AnimatedText text='Solving is part of learning' />
        </Layout>
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-12'><FeaturedProject /></div>
          <div className='col-span-6'>Project-1</div>
          <div className='col-span-6'>Project-2</div>
          <div className='col-span-12'>Featured Project</div>
          <div className='col-span-6'>Project-3</div>
          <div className='col-span-6'>Project-4</div>
        </div>
      </main>
    </>
  )
}

export default projects
