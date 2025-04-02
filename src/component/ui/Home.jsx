import React from 'react'

function HomeDiv() {
    return (
        <div className='w-[370px] h-[42px] flex justify-between bg-white pl-[22px] pr-[15px] py-[8px]'>
            <p className="text-[14px] font-normal flex flex-col justify-center items-center leading-[130%] font-montserrat">
                All pages
            </p>        
            <input type="checkbox" className="w-[23px] h-[23px] flex flex-col justify-center items-center cursor-pointer rounded-[6px] border border-white bg-blue-500" />
        </div>
    )
}

export default HomeDiv
