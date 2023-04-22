import React from 'react'
import HomeIcon from '../assests/Icons/HomeIcon'
import Google2 from '../assests/Icons/Google2'
import Person from '../assests/Icons/Person'


function LowerBar() {
    return (
        <div class="px-10  items-center  py-5 w-full h-[100px] bg-[#2A71E8]">
            <div className='flex justify-between'>
                <HomeIcon />
                <Google2 />
                <Person />
            </div>
        </div>
    )
}

export default LowerBar