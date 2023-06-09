import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icon'
import portfolio from '../../public/images/projects/portfolio.png'
import interviewScheduler from '../../public/images/projects/interview_scheduler.png'
import learnthis from '../../public/images/projects/learnthis.png'
import tweeter from '../../public/images/projects/tweeter.png'
import spookle from '../../public/images/projects/spookle.png'
import jungle_rails from "../../public/images/projects/jungle_rails.png"
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='relative w-full flex items-center justify-between rounded-br-2xl rounded-3xl
    border border-solid border-dark bg-light shadow-2xl p-8 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl
       dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          dark:bg-light dark:text-dark sm:px-4 sm:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative shadow-xl dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem]
      bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-xs'>{summary}</p>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline md:text-base'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <GithubIcon />
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

      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-8'>
          <AnimatedText
            text='Project&apos;s Creativity & Passion'
            className='mb-12 lg:!text-5xl sm:mb-6 sm:!text-5xl xs:!text-3xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                type='Node.js, Express, React.js, Material UI, PostgreSQL'
                title='LearnThis!'
                img={learnthis}
                github='https://github.com/gtenorlas/lhlfinals'
                link='https://github.com/gtenorlas/lhlfinals'
                summary='Keep your resource bookmarks all in one convenient location while having a quick organizational system and a built in learning program to actually study from your saved materials!'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type='React.js, Jest, Cypress'
                title='Interview Scheduler'
                img={interviewScheduler}
                github='https://github.com/gtenorlas/Interview-Scheduler'
                link='https://github.com/gtenorlas/Interview-Scheduler'
                summary='Front-end app created in React.js. A single page application that allows users to book and cancel interviews.'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type='HTML, Sass, Javascript, jQuery, Ajax'
                title='Tweeter'
                img={tweeter}
                github='https://github.com/gtenorlas/tweeter'
                link='https://github.com/gtenorlas/tweeter'
                summary="Tweeter is a simple, single-page Twitter clone. Twit, like and responsive in different devices."
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                type='Next.js, Tailwind CSS, React.js, Framer Motion'
                title='Code It .Wiki Portfolio'
                img={portfolio}
                github='https://github.com/gtenorlas/codeit-wiki'
                link='https://github.com/gtenorlas/codeit-wiki'
                summary='My portfolio website highlighting my projects, blogs, and skills.'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type='Node.js, Express, EJS, PostgreSQL, Bootstrap, Sass'
                title='Spookle'
                img={spookle}
                github='https://github.com/gtenorlas/midterm-quizapp'
                link='https://github.com/gtenorlas/midterm-quizapp'
                summary="Create a quiz and share it to public or privately to everyone using a link. Reports are generated to the creator of the quiz. "
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type='Ruby, Rails, Bootstrap, PostgreSQL, Stripe'
                title='Jungle Rails'
                img={jungle_rails}
                github='https://github.com/gtenorlas/jungle-rails'
                link='https://github.com/gtenorlas/jungle-rails'
                summary="A full-stack app for an e-commerce site with the integration of Stripe for payment processing."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
