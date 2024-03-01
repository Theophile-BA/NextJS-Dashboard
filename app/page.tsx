import AcmeLogo from '@/app/ui/acme-logo'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { montserrat } from './ui/fonts'
import Image from 'next/image'

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6 bg-black">
            <div className="flex justify-center h-20 shrink-0 items-center rounded-lg bg-yellow-500 p-4 md:h-52 ">
                <AcmeLogo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex grow flex-col gap-4 p-6">
                    <p
                        className={`${montserrat.className} text-xl text-white md:text-3xl md:leading-normal`}
                    >
                        <strong>Welcome to NextJS Dashboard Project.</strong>
                        <br />
                        <div className="mt-5">
                            You can find my different projects on my git hub{' '}
                            <a
                                href="https://github.com/Theophile-BA"
                                className="text-yellow-500 hover:text-yellow-300"
                            >
                                GitHub Boniface-Achille Théophile
                            </a>
                            , Click on the login to start your experience !
                        </div>
                    </p>
                    <div className="grid grid-cols-4 ml-3">
                        <Link
                            href="/login"
                            className="flex items-center rounded-lg bg-yellow-500 px-6 py-3  transition-colors hover:bg-yellow-300 text-black md:text-base"
                        >
                            <span>Log in</span>{' '}
                            <ArrowRightIcon className="w-5 md:w-6 ml-5" />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                        priority={true}
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshots of the dashboard project showing mobile version"
                    />
                </div>
            </div>
        </main>
    )
}
