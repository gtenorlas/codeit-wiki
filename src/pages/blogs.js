import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import orm from '../../public/images/orm.png'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  return (
    <Link href={link} target='_blank'>
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <Image
        src={img}
        alt={title}
        className='w-96 auto hidden absolute rounded-lg'
      />
    </Link>
  )
}

const Blog = ({ img, title, date, link }) => {
  return (
    <li
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4
    '
    >
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4'>{date}</span>
    </li>
  )
}

const FeaturedBlog = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} targt='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline hover:underline-offset-2'>
          {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  )
}

const blogs = () => {
  return (
    <>
      <Head>
        <title>Code It .Wiki | Blogs Page</title>
        <meta name='keywords' content='blogs, codeitwiki, codeit' />
        <meta name='description' content='Blogs Page' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text='Stay up-to-date with Blogs' className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedBlog
              title='ORMs for JavaScript'
              summary='Explain what ORM is and provide known ORMs in Javascript.'
              time='9 min read'
              link='https://medium.com/@masterpieces79/orms-for-javascript-43ef4e10d9e8'
              img={orm}
            />
            <FeaturedBlog
              title='ORMs for JavaScript'
              summary='Explain what ORM is and provide known ORMs in Javascript.'
              time='9 min read'
              link='https://medium.com/@masterpieces79/orms-for-javascript-43ef4e10d9e8'
              img={orm}
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
            All Blogs
          </h2>
          <ul>
            <Blog
              title='ORMs for JavaScript'
              summary='Explain what ORM is and provide known ORMs in Javascript.'
              date='April, 5 2023'
              link='https://medium.com/@masterpieces79/orms-for-javascript-43ef4e10d9e8'
              img={orm}
            />
            <Blog
              title='ORMs for JavaScript'
              summary='Explain what ORM is and provide known ORMs in Javascript.'
              date='April, 5 2023'
              link='https://medium.com/@masterpieces79/orms-for-javascript-43ef4e10d9e8'
              img={orm}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default blogs
