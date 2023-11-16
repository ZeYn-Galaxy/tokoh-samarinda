import Image from 'next/image'
import Abdoul_Moeis_Hassan from './images/Abdoel-Moeis-Hassan.jpeg'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className="container mx-auto text-slate-50">
                <div className="flex justify-end w-full sticky top-0 py-6 text-sky-500">
                    <Link href={'/'}>Daftar Pahlawan</Link>
                </div>
                {/* Navbar */}
                {/* Abdoel Moeis Hassan */}
                <section className="py-10 flex item relative max-lg:flex-col max-lg:px-5">
                    <div className="w-2/5 max-lg:w-full max-lg:flex max-lg:justify-center">
                        <Image width={500} height={500} src={Abdoul_Moeis_Hassan} alt='...' className='bg-cover rounded-full max-lg:w-80 max-lg:h-80  w-96 h-96 shadow-[0px_0px_35px_-15px_#38bdf8]' />
                    </div>
                    <div className="w-3/5 max-lg:w-full max-lg:pt-5">
                        <p className='text-sky-400 text-sm'>Gubernur Kalimatan Timur ke 2</p>
                        <span className='text-3xl font-semibold'>Abdoel Moeis Hassan</span>
                        <p className='text-sky-400 uppercase pt-10 text-2xl'>Masa Jabatan</p>
                        <hr className='my-2' />
                        <span className=' mt-3'>10 Agustus 1962 – 14 September 1966</span>
                        <hr className='my-2' />
                        <div className="flex">
                            <span className='w-32'>Pendahulu	APT</span>
                            <span>|
                                Pranoto
                            </span>
                        </div>
                        <div className="flex mt-2">
                            <span className='w-32'>Pengganti</span>
                            <span>|
                                Soekadio
                            </span>
                        </div>
                        <hr className="my-2" />
                        <p className='text-sky-400 uppercase pt-10 text-2xl'>Informasi pribadi</p>
                        <hr className="my-2" />
                        <div className="flex mt-2">
                            <span className='w-1/4'>Lahir</span>
                            <span className='w-3/4'>| 2 Juni 1924</span>
                        </div>
                        <div className="flex mt-2">
                            <span className='w-1/4'>Meninggal</span>
                            <span className='w-3/4'>|
                                21 November 2005 (umur 81)
                                Jakarta, Indonesia
                            </span>
                        </div>
                        <div className="flex mt-2">
                            <span className='w-1/4'>Partai Politik</span>
                            <span className='w-3/4'>|
                                Partai Nasional Indonesia (1950-1970)
                            </span>
                        </div>
                        <div className="flex mt-2">
                            <span className='w-1/4'>Istri</span>
                            <span className='w-3/4'>|
                                Fatimah
                            </span>
                        </div>
                        <div className="flex mt-2">
                            <span className='w-1/4'>Anak</span>
                            <p className='w-3/4'>|
                                Zulchadriansyah
                                <br />
                                &ensp;Julian Anwarie
                                <br />
                                &ensp;Taufik Siradjudin
                                <br />
                                &ensp;Chaidir Aulia
                                <br />
                                &ensp;Farid Hamdi
                                <br />
                                &ensp;Olvia Afiaty
                                <br />
                                &ensp;Johny Janwarie
                            </p>
                        </div>
                        <div className="flex mt-2">
                            <span className="w-1/4">Orang Tua</span>
                            <p className='w-3/4'>|
                                Mohammad Hassan (ayah),
                                Asiah (ibu)
                            </p>
                        </div>
                        <div className="flex mt-2">
                            <span className="w-1/4">Kerabat</span>
                            <p className='w-3/4'>|
                                Mohammad Saleh (kakek), Muhammad Syarkawie Hassan (adik)
                            </p>
                        </div>
                        <div className="flex mt-2">
                            <span className="w-1/4">Profesi</span>
                            <span className='w-3/4'>| Politisi</span>
                        </div>
                    </div>
                </section>
                {/* Cerita */}
                <section className='max-lg:px-5 mt-44 max-lg:mt-0'>
                    <p className='my-5 text-5xl text-center text-sky-400 uppercase font-semibold'>Cerita</p>
                    <p className='indent-8 text-sm'>
                        <b>Haji Abdoel Moeis Hassan</b> (2 Juni 1924 – 21 November 2005) adalah seorang tokoh pemuda pergerakan kebangsaan di Samarinda pada masa 1940–1945 dan pemimpin perjuangan diplomasi politik untuk kemerdekaan Republik Indonesia di wilayah Kalimantan Timur pada masa 1945–1949. Sejak remaja, ia mengikuti aktivitas pergerakan kebangsaan di Samarinda dan belajar masalah politik pada A.M. Sangadji. Pada tahun 1940, ia mendirikan Roekoen Pemoeda Indonesia (Roepindo) dan menjadi ketuanya. Bersama A.M. Sangadji, ia mendirikan lembaga pendidikan bernama Balai Pengadjaran dan Pendidikan Ra'jat pada tahun 1942. Ia bergabung dalam Panitia Persiapan Penyambutan Kemerdekaan Republik Indonesia (P3KRI) untuk mewujudkan Proklamasi Negara Indonesia di Samarinda tahun 1945 dan mendirikan Ikatan Nasional Indonesia (INI) Cabang Samarinda yang bertujuan menentang pendudukan Belanda di Samarinda setahun setelahnya. Tahun 1947 ia menjadi ketua Front Nasional sebagai koalisi organisasi yang mendukung RI dan menentang federasi yang dibentuk Belanda.
                    </p>
                    <p className='mt-3 text-sm'>
                        Pada akhir tahun 1949, bersama Front Nasional, ia menuntut kepada pemerintah lokal untuk keluar dari Republik Indonesia Serikat (RIS) dan bergabung dengan RI-Yogya. Tuntutannya tercapai dengan berintegrasinya Keresidenan Kalimantan Timur ke wilayah RI pada tanggal 10 April 1950. Ia mengadakan Kongres Rakyat Kaltim pada 1954 untuk menuntut pembentukan Provinsi Kalimantan Timur supaya pembangunan dapat meningkat. Tahun 1956, tuntutan dipenuhi dan 9 Januari 1957 Kaltim resmi berdiri sebagai provinsi. Tahun 1960, ia menjadi Ketua Komisi Gabungan di DPR Gotong Royong yang bertugas menyelesaikan RUU Pokok Pemerintahan Daerah dan RUU Pokok Agraria.
                    </p>
                    <p className='mt-3 text-sm'>
                        Tahun 1962, ia menjadi Gubernur Kalimantan Timur kedua. Pada tahun 1964, ia mencegah usaha pembakaran keraton Kutai oleh massa dan tentara suruhan Panglima Kodam IX Mulawarman. Tahun 1966, ia berhenti sebagai Gubernur dan menjadi pegawai di Departemen Dalam Negeri di Jakarta. Tahun 1968 hingga 1970, ia kembali menjadi anggota DPR RI mewakili PNI.
                    </p>
                    <p className='mt-3 text-sm'>
                        Tahun 1976, ia pensiun dari PNS dan berkiprah di bidang sosial kemasyarakatan serta menulis artikel dan buku hingga 2004 dan meninggal dunia pada 2005 dalam usia 81 tahun. Tahun 2018, sebuah kelompok pemerhati sejarah yang independen mengajukan usulan calon Pahlawan Nasional Abdoel Moeis Hassan kepada Wali kota Samarinda. Para sejarawan akademis dalam Seminar Nasional 2019 menilai Abdoel Moeis Hassan layak diusulkan kepada pemerintah pusat sebagai Pahlawan Nasional.
                    </p>
                </section>
                {/* Footer */}
                <footer className='py-5 text-center text-sm'>Copyright &copy; 2023 By Shafwan, Source: <Link href={'https://id.wikipedia.org/wiki/Abdoel_Moeis_Hassan'} target='_blank'>https://id.wikipedia.org/wiki/Abdoel_Moeis_Hassan</Link></footer>
            </div >
        </>
    )
}
