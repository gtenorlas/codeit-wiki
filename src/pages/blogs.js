import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedBlog = ({ img, title, time, summary, link }) => {
  return (
    <li>
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <Link href={link} targt='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2'>{title}</h2>
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
          <ul className='grid grid-col-2 gap-16'>
            <li>Featured Blog1</li>
            <li>Featured Blog2</li>
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default blogs
