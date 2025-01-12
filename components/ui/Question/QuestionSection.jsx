import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import KayanBread from '@/components/common/kayanBread/KayanBread';
import { question } from '@/components/data/Questiondata';

const QuestionSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subCategoray , setsubCategory] = useState("")

    return (
        <div className='w-full h-auto bg-[#eee] py-10 px-5'>
            <KayanBread title="الأسئلة الشائعة" />
            <div className='bg-white w-full lg:w-[80%] lg:mx-auto h-full p-5 mt-10'>
                {
                    question?.map((item, index) => {
                        const isSelected = selectedCategory === item.id;
                        return (
                            <div key={`${item?.id}-${index}-${item.category}`} className={`border-b-[1px] border-gray-300 mb-5`}>
                                <div onClick={() => setSelectedCategory(isSelected ? "" : item.id)} className='p-3 flex gap-2 items-center cursor-pointer'>
                                    <IoIosArrowBack />
                                    <span className='font-medium text-2xl'>{item.category}</span>
                                </div>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 transition-all duration-300 ${isSelected ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}>
                                    {
                                        item?.questions.map((quest, i) => {
                                            const suSelected = quest.id === subCategoray
                                          return  <div onClick={() => setsubCategory(suSelected ? "" : quest.id)} key={`${quest?.id}-${i + 1}-${quest.question}`} className={`border-l-[2px] cursor-pointer border-main mb-5 `}>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[20px] h-[20px] rounded-full bg-main2 text-white flex items-center justify-center'>
                                                        {i + 1}
                                                    </span>
                                                    <span className='text-xl'>{quest?.question}</span>
                                                </div>
                                                <p className={`w-[50%] text-wrap mt-5 leading-8 ${suSelected ? "opacity-100 h-full mb-10 " : "opacity-0 max-h-0 overflow-hidden"}`}>
                                                    {quest?.answer}
                                                </p>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default QuestionSection;
