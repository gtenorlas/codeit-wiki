import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-gpt.png'
import AnimatedText from '@/components/AnimatedText'

export default function Home () {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className="pt-0">
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={profilePic} alt="CodeIt.Wiki" className="w-full h-auto"></Image>
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text="Turning Vision Into Reality With Code and Design." className='!text-6xl'/>
            <p>As a skilled developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and blogs, showcasing my experticse in React.js and web development.</p>
          </div>
        </div>
      </Layout>
    </main>
  )
}
