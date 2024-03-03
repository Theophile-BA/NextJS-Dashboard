import Search from '@/app/ui/search'
import Table from '@/app/ui/customers/table'
import { CreateCustomer } from '@/app/ui/buttons'
import { montserrat } from '@/app/ui/fonts'
import { Metadata } from 'next'
import { fetchCustomersById } from '@/app/lib/data'

export const metadata: Metadata = {
    title: 'Customers',
}

export default async function pageCustomers({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const totalPages = await fetchCustomersById(query)

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify between">
                <h1
                    className={`${montserrat.className} mb-4 text-xl text-white md:text-2xl`}
                >
                    Customers Page
                </h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search customers..." />
                <CreateCustomer id="" />
            </div>
            <div>
                <Table query={query} currentPage={currentPage} />
            </div>
        </div>
    )
}
