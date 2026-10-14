import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import orm from '../../public/images/blogs/orm_javascript_002.png'
import java from '../../public/images/blogs/javaspring_001.png'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(1)
  const imgRef = useRef(null)

  const handleMouse = event => {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  const handleMouseLeave = event => {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opancity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 auto hidden absolute rounded-lg md:!hidden'
      />
    </Link>
  )
}

const Blog = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    '
    >
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedBlog = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
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
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2
          className='capitalize text-2xl font-bold my-2 mt-4 hover:underline hover:underline-offset-2
        xs:text-lg'
        >
          {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>
        {time}
      </span>
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
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Stay up-to-date with Blogs'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
            <FeaturedBlog
              title='Building a Full-Stack Application with Spring Boot, PostgreSQL, and Java'
              summary='Explain what Spring Boot is and provide a quick example on how to get started with it.'
              time='30 min read'
              link='https://medium.com/@masterpieces79/building-a-full-stack-application-with-spring-boot-postgresql-and-java-c8468d97a0e7'
              img={java}
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
              title='Building a Full-Stack Application with Spring Boot, PostgreSQL, and Java'
              summary='Explain what Spring Boot is and provide a quick example on how to get started with it.'
              date='May 21, 2023'
              link='https://medium.com/@masterpieces79/building-a-full-stack-application-with-spring-boot-postgresql-and-java-c8468d97a0e7'
              img={java}
            />
            <Blog
              title='ORMs for JavaScript'
              summary='Explain what ORM is and provide known ORMs in Javascript.'
              date='January 17, 2023'
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
