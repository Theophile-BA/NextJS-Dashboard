'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }
    return <></>
}
