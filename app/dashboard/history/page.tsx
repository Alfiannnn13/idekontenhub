import Templates from '@/app/(data)/Templates'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm'
import Image from 'next/image'
import React from 'react'
import CopyButton from './_components/CopyButton'

import { TEMPLATE } from '../_components/TemplateListSection'

export interface HISTORY {
    id: Number,
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
        .orderBy(desc(AIOutput.id));

    const GetTemplateName = (slug: string) => {
        const template: TEMPLATE | any = Templates?.find((item) => item.slug === slug);
        return template;
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl text-purple-400'>HISTORY</h2>
            <p className='text-gray-500'>Cari konten AI yang pernah lo buat sebelumnya</p>
            
            {/* Header untuk layar besar */}
            <div className='hidden md:grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>RESPON AI</h2>
                <h2>TANGGAL</h2>
                <h2>KATA</h2>
                <h2>COPY</h2>
            </div>

            {/* Konten History */}
            {HistoryList.map((item: HISTORY, index: number) => (
                <div key={index} className='my-5 py-3 px-3 border rounded-md bg-gray-100'>
                    {/* Konten untuk layar kecil dan besar */}
                    <div className='block md:grid grid-cols-7'>
                        <h2 className='col-span-2 flex gap-2 items-center'>
                            <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='ikon' />
                            {GetTemplateName(item.templateSlug)?.name}
                        </h2>
                        <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse}</h2>
                        <h2>{item.createdAt}</h2>
                        <h2>{item?.aiResponse.length}</h2>
                        <h2>
                            <CopyButton aiResponse={item.aiResponse} />
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default History;
