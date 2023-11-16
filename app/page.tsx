import Image from 'next/image'
import Abdoul_Moeis_Hassan from './images/Abdoel-Moeis-Hassan.jpeg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="h-screen container mx-auto text-slate-50">
        {/* <div className="flex justify-end w-full sticky top-0 py-6 text-sky-500">
          <Link href={'/'}>Daftar Pahlawan</Link>
        </div> */}
        <p className='text-center text-5xl text-sky-400 font-semibold uppercase py-5'>Daftar Pahlawan</p>
        <hr />
        <section className='h-screen my-3 flex max-lg:flex-col max-lg:px-5'>
          <Link href={'/abdoel-moeis-hassan'} className="w-48 h-48 overflow-hidden rounded-full shadow-[0px_0px_35px_-15px_#38bdf8] ">
            <Image width={500} height={500} src={Abdoul_Moeis_Hassan} alt='...' className='w-full h-full object-cover hover:scale-110 transition-all' />
          </Link>
        </section>
        {/* Footer */}
        <footer className='py-5 text-center text-sm'>Copyright &copy; 2023 By Shafwan</footer>
      </div >
    </>
  )
}
