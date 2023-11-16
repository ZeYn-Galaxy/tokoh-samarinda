import Image from 'next/image'
import Abdoul_Moeis_Hassan from './images/Abdoel-Moeis-Hassan.jpeg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="h-screen container mx-auto text-slate-50">
        <div className="flex justify-end w-full sticky top-0 py-6 text-sky-500">
          <Link href={'/'}>Daftar Pahlawan</Link>
        </div>
        <p className='text-center text-5xl text-sky-400 font-semibold uppercase py-5'>Daftar Pahlawan</p>
        <hr />
        <section className='h-screen my-3 flex max-lg:flex-col'>
          <Link href={'/abdoel-moeis-hassan'} className="w-96 h-96 border-2 overflow-hidden rounded-full">
            <Image width={500} height={500} src={Abdoul_Moeis_Hassan} alt='...' className='w-full h-full object-cover bott hover:scale-110 transition-all' />
          </Link>
        </section>
        {/* Footer */}
        <footer className='py-5 text-center text-sm'>Copyright &copy; 2023 By Shafwan</footer>
      </div >
    </>
  )
}
