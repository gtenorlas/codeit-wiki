import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import orm from '../../public/images/orm.png'

const FeaturedBlog = ({ img, title, time, summary, link }) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <Link href={link} targt='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline hover:underline-offset-2'>{title}</h2>
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
            <FeaturedBlog title="ORMs for JavaScript" summary="Explain what ORM is and provide known ORMs in Javascript." time="9 min read" link="https://medium.com/@masterpieces79/orms-for-javascript-43ef4e10d9e8" img={orm}/>
            <FeaturedBlog title="ORMs for JavaScript" summary="Explain what ORM is and provide known ORMs in Javascript." time="9 min read" link="https://medium.com/@masterpieces79/orms-for-javascript-43ef4e10d9e8" img={orm}/>
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default blogs
