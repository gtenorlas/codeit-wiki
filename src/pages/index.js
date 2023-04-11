import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-gpt3.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icon'

export default function Home () {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image
              src={profilePic}
              alt='CodeIt.Wiki'
              className='w-full h-auto'
            ></Image>
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText
              text='Helping provide solutions through Code and Design.'
              className='!text-5xl !text-left'
            />
            <p className='my-4 text-base'>
            As a highly skilled Full-Stack Developer, I am committed to staying at the forefront of technology trends and constantly enhancing my skill set. With a keen eye for innovation, I am actively seeking new opportunities to leverage my versatile skills and add value to a dynamic team. If you are in need of a dependable and personable Full-Stack Developer who consistently delivers exceptional results, look no further. Let's collaborate to create cutting-edge web applications that propel your business to new heights of success.
            </p>
            <div className='flex items-center self-start mt-2'>
              <Link href='dummy.pdf' target='_blank'
              className="flex item-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              >
                Resume <LinkArrow className="w-6 ml-1"/>
              </Link>
              <Link href='mailto:gene.tenorlas@yahoo.com' target='_blank'
              className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
