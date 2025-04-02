import React from 'react'

function FormButton({page}) {
    return (
        <div className='flex justify-between'>
            <p>{page}</p>
            <input type="checkbox" className="w-[23px] h-[23px] flex flex-col justify-center items-center cursor-pointer rounded-[6px] border border-white bg-blue-500" />
        </div>
    )
}

export default FormButton
