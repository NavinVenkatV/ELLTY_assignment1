import './App.css'
import Button from './component/ui/Button'
import FormButton from './component/ui/formButton'
import HomeDiv from './component/ui/Home'
import Line from './component/ui/line'
import "@fontsource/montserrat/400.css"; 


function App() {

  return (
    <div className='flex flex-col py-10 bg-[#dedede] h-full'>
      <div className='flex justify-center gap-10'>
        {/* Button */}
        <div className='w-[380px] h-[200px] flex flex-col items-center justify-center border-1 border-[#9747FF] border-dashed rounded-[5px]'>
          <div>
            <div>
              <Button text={"Done"} />
            </div>
            <div>
              <Button text={"Done"} />
            </div>
            <div>
              <Button text={"Done"} />
            </div>
          </div>
        </div>
        <div className='w-[65px] h-[425px] border-1 border-[#9747FF] border-dashed rounded-[5px] flex justify-center '>
          <div className='flex flex-col py-[20px] justify-between'>
            <input type="checkbox" className="w-[25px]  h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
            <input type="checkbox" className="w-[25px] h-[25px] cursor-pointer rounded-[6px] border border-white bg-blue-500" />
          </div>
        </div>

        <div className='w-[410px] h-[520px] flex justify-center rounded-[5px] border-1 border-[#9747FF] border-dashed'>
          <div className='flex flex-col py-[20px] justify-between'>
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
            <HomeDiv />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <div className="w-[578px] h-[794px] relative bg-[#FFFFFF] relative">
          <div className="w-[370px] h-[326px] shadow-[0px_8px_15px_rgba(20,20,20,0.12),0px_0px_4px_rgba(20,20,20,0.10)] absolute top-[85px] left-[104px] rounded-[6px] border border-[#EEEEEE]  bg-white">
            <div className='p-3 px-5'>
            <FormButton page={'All pages'}/>
            </div>
            <Line/>
            <div className='p-3 px-5'>
            <FormButton page={'Page 1'}/>
            </div>
            <div className='p-3 px-5'>
            <FormButton page={'Page 2'}/>
            </div>
            <div className='p-3 px-5'>
            <FormButton page={'Page 3'}/>
            </div>
            <div className='px-3 pt-3 px-5'>
            <FormButton page={'Page 4'}/>
            </div>
            <div className='mt-3'>
              <Line/>
            </div>
            <div className='flex flex-col w-full justify-center items-center mt-3'>
            <Button text={"Done"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
