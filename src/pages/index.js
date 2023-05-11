import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-gpt1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icon'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Code It .Wiki | Gene Tenorlas Portfolio</title>
        <meta
          name='keywords'
          content='GeneTenorlas,homepage,codeit.wiki,portfolio'
        />
        <meta name='description' content='Homepage' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-4 sm:pt-0'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 pr-8 md:w-full md:pr-0 md:h-auto'>
              <Image
                src={profilePic}
                alt='CodeIt.Wiki'
                className='w-full h-auto pr-8 lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              ></Image>
            </div>
            <div
              className='w-1/2 flex flex-col items-center self-center
          lg:w-full lg:text-center'
            >
              <AnimatedText
                text='Helping provide solutions through Code and Design.'
                className='!text-5xl !text-left
              xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl
              '
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a highly skilled Full-Stack Developer, I am committed to
                staying at the forefront of technology trends and constantly
                enhancing my skill set. With a keen eye for innovation, I am
                actively seeking new opportunities to leverage my versatile
                skills and add value to a dynamic team. If you are in need of a
                dependable and personable Full-Stack Developer who consistently
                delivers exceptional results, look no further. Let's collaborate
                to create cutting-edge web applications that propel your
                business to new heights of success.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='https://resume.creddle.io/resume/8x8kylcpyj1'
                  target='_blank'
                  className='flex item-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
              md:p-2 md:px-4 md:text-base
              '
                >
                  Resume <LinkArrow className='w-6 ml-1' />
                </Link>
                <Link
                  href='mailto:gene.tenorlas@yahoo.com'
                  target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
              md:text-base
              '
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline=block w-24 md:hidden'>
          <Image src={lightBulb} alt='CodeIt.Wiki' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
