import Image from "next/image";
import logo from "./img/logo.svg";
import lacrypta from "./img/lacrypta.svg";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src={logo}
          alt='SatsConf logo'
          width={400}
          height={60}
          priority
        />
        <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2'>
            Create your own
            <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
              NIP-05
            </code>{" "}
            identity.
          </li>
          <li className='mb-2'>
            Create your own
            <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
              LUD-16
            </code>{" "}
            data.
          </li>
        </ol>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flacrypta%2Fsatsconf)'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='https://nextjs.org/icons/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy this
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
            href='https://github.com/lightning-domains/lightning-domains'
            target='_blank'
            rel='noopener noreferrer'
          >
            Lightning Domains Standard
          </a>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://lacrypta.ar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src={lacrypta}
            alt='File icon'
            width={16}
            height={16}
          />
          Powered by La Crypta
        </a>
      </footer>
    </div>
  );
}
