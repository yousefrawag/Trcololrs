'use client'
import React from 'react'
import { AuthPoilcy } from "@/services/FetchAllContent"
import Loadding from '@/components/common/kayanBread/Loadding'

const PrivacyPolicy = () => {
    const { Privcypolicy, loading } = AuthPoilcy()

    if (loading) {
        return <Loadding />
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
            {/* العنوان */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">سياسة الخصوصية</h1>

            {/* الكارد الخاصة بالنص */}
            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
                <p className="leading-[40px] text-gray-700">
                    {Privcypolicy[0]?.details}
                </p>
            </div>

            {/* زر العودة */}
         
        </div>
    )
}

export default PrivacyPolicy
