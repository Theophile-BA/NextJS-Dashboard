import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function CustomerStatus({ status }: { status: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-orange-300 text-black': status === 'not validate',
                    'bg-green-300 text-black': status === 'validate',
                },
            )}
        >
            {status === 'not validate' ? (
                <>
                    Not Validate
                    <ClockIcon className="ml-1 w-4 text-black" />
                </>
            ) : null}
            {status === 'validate' ? (
                <>
                    Validate
                    <CheckIcon className="ml-1 w-4 text-black" />
                </>
            ) : null}
        </span>
    )
}
