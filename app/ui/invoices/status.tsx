import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function InvoiceStatus({ status }: { status: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-orange-300 text-black': status === 'pending',
                    'bg-green-300 text-black': status === 'paid',
                },
            )}
        >
            {status === 'pending' ? (
                <>
                    Pending
                    <ClockIcon className="ml-1 w-4 text-black" />
                </>
            ) : null}
            {status === 'paid' ? (
                <>
                    Paid
                    <CheckIcon className="ml-1 w-4 text-black" />
                </>
            ) : null}
        </span>
    )
}
