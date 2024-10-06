import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <><div className="flex items-center justify-center flex-wrap p-6 md:w-3/5 md:px-28 md:py-12">
      <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
      <strong>Welcome to Acme.</strong> This is the example for the{' '}
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        Next.js Learn Course
      </a>

      , brought to you by Vercel.
    </p>
        {/* Add Hero Images Here */}
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version" />
          <Image
           src={"/hero-mobile.png"}
            alt='hero' width={'560'} height={"620"}/>
      </div></>
  );
}
