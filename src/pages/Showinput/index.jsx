import React from 'react'
import Header from '../../components/Header'

function ShowInput() {
    return (
        <div className='flex flex-col max-sm:items-center  max-sm:justify-center'>
        <div className='max-sm:hidden'>
            <Header/>
        </div> 
        <div className='bg-[#2A71E8] sm:bg-white sm:flex sm:flex-col sm:w-[100%] h-screen w-screen grid place-content-center'>
            <h2 className='text-white sm:text-black font-sans font-semibold text-[24px] top-10 ml-[100px] mb-14'>Choose Input</h2>
            <div className=' bg-[#2A71E8] flex-col flex sm:gap-[2rem] sm:flex-row-reverse sm:justify-center items-center sm:ml-[100px] rounded-[20px] sm:w-[90%] sm:h-[90%] sm:mr-5 h-[300px] mb-10 '>
                <div className='sm:bg-white sm:h-[350px]  rounded-[20px] w-[87%] sm:w-[450px] flex items-center justify-center'>
                <div className=' bg-white shadow-lg  flex sm:border-[1.2px] sm:border-[#053676]
                  w-[370px]  rounded-[20px] sm:mb-[10px] mb-[50px] h-[108px] sm:h-[190px]  items-center text-center justify-center sm:ml-1 sm:mr-1 cursor-pointer sm:flex-col'>
                    <img src={require("../../assests/img/menue.png")} className="ml-[30px] w-[50px] h-[53px] mt-2 mr-3" alt="" />
                    <div>
                        <h3 className=' text-[#09062C] font-sans font-bold text-[20px]'>
                            TEXT AND SPEECH

                        </h3>
                        <h3 className='text-[#09062C] font-sans font-bold text-[20px]'> To</h3>
                        <h3 className='text-[#BE2117] text-[20px]'>  SIGN LANGUAGE</h3>
                    </div>
                </div>
                </div>
                <div className='sm:bg-white sm:h-[350px] w-[87%] sm:w-[450px]  rounded-[20px] flex items-center justify-center'>
                <div className=' bg-white shadow-lg  flex sm:border-[1.2px] sm:border-[#053676]
                  w-[370px]  rounded-[20px] sm:mb-[10px] mb-[50px] h-[108px] sm:h-[190px] items-center text-center justify-center cursor-pointer sm:flex-col ml-1 mr-1 '>
                    <img src={require("../../assests/img/clamphand.png")} className=" mt-2" alt="" />
                    <div className='sm:hidden'>
                        <h3 className=' text-[#09062C] font-sans font-bold text-[20px]'>
                            TEXT AND SPEECH
                        </h3>
                        <h3 className='text-[#09062C] font-sans font-bold text-[20px]'> To</h3>
                        <h3 className='text-[#BE2117] text-[20px]'>  SIGN LANGUAGE</h3>
                    </div>
                    <div className='max-sm:hidden'>
                       <h3 className='text-[#BE2117] text-[20px]'>  SIGN LANGUAGE</h3>
                        <h3 className='text-[#BE2117] font-sans font-bold text-[20px]'> To</h3>
                        <h3 className=' text-[#09062C] font-sans font-bold text-[20px]'>
                            TEXT AND SPEECH
                        </h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ShowInput