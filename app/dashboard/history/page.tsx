import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm'
import Image from 'next/image'
import React from 'react'

import { TEMPLATE } from '../_components/TemplateListSection'
import CopyButton from './_components/CopyButton'

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

async function History() {
    const user = await currentUser();

    {/* @ts-ignore */}
    const HistoryList: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id))
        ;

    const GetTemplateName = (slug: string) => {
        const template: TEMPLATE | any = Templates?.find((item) => item.slug == slug)
        return template;
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl text-purple-400 mb-3'>Riwayat</h2>
            <p className='text-gray-500 mb-5'>Cari konten AI yang pernah lo buat sebelumnya</p>

            {/* Table for larger screens */}
            <div className='hidden lg:grid lg:grid-cols-7 lg:font-bold lg:bg-secondary lg:mt-5 lg:py-3 lg:px-3'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>RESPON AI</h2>
                <h2>TANGGAL</h2>
                <h2>KATA</h2>
                <h2>COPY</h2>
            </div>

            {/* List for smaller screens */}
            <div className='lg:hidden grid grid-cols-1 gap-4'>
                {HistoryList.map((item: HISTORY) => (
                    <div key={item.id} className='border rounded-lg p-4 bg-gray-100'>
                        <div className='flex gap-2 items-center mb-2'>
                            <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='ikon' />
                            <span className='font-bold'>{GetTemplateName(item.templateSlug)?.name}</span>
                        </div>
                        <p className='text-sm mb-2 line-clamp-3'>{item?.aiResponse}</p>
                        <p className='text-xs text-gray-500'>{item.createdAt}</p>
                        <p className='text-xs text-gray-500 mb-2'>{item?.aiResponse.length} kata</p>
                        <CopyButton aiResponse={item.aiResponse} />
                    </div>
                ))}
            </div>

            {/* Responsive table for larger screens */}
            <div className=' lg:grid-cols-7 lg:gap-4 lg:mt-5'>
                {HistoryList.map((item: HISTORY) => (
                    <div key={item.id} className='grid lg:grid-cols-7 lg:gap-4 lg:py-3 lg:px-3 border-b last:border-b-0'>
                        <h2 className='col-span-2 flex gap-2 items-center'>
                            <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='ikon' />
                            {GetTemplateName(item.templateSlug)?.name}
                        </h2>
                        <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
                        <h2>{item.createdAt}</h2>
                        <h2>{item?.aiResponse.length}</h2>
                        <h2>
                            <CopyButton aiResponse={item.aiResponse} />
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History
