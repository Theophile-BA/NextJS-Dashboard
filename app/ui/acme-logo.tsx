import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { montserrat } from '@/app/ui/fonts'

export default function AcmeLogo() {
    return (
        <div className={`${montserrat.className} flex flex-row text-black`}>
            <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
            <p className="text-[28px] text-black">NextJS Dashboard Project</p>
            <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
        </div>
    )
}
