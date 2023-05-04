import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icon'
import portfolio from '../../public/images/projects/portfolio.png'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full auto' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          '
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article>
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full auto' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          '
          >
            Visit
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
          <AnimatedText text='Solving is part of learning' className='mb-16' />

          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                type='Featured Project'
                title='Code It .Wiki Portfolio'
                img={portfolio}
                github='/'
                link='/'
                summary='This is my portfolio website that I created using Next.js, Tailwind CSS, and Framer Motion.'
              />
            </div>
            <div className='col-span-6'>
              <Project
                type='Project'
                title='Quiz App'
                img='quiz'
                github='/'
                link='/'

              />
            </div>
            <div className='col-span-6'>Project-2</div>
            <div className='col-span-12'>Featured Project</div>
            <div className='col-span-6'>Project-3</div>
            <div className='col-span-6'>Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
