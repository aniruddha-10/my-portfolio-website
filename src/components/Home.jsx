import React from 'react'
import HeroImage from "/Users/aniruddhakhan/Desktop/ReactPortfolio/one-portfolio/src/assets/HeroImage.png" 
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-slate-950 to to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pl-6 pr-4 md:flex-row">
            <div className="flex flex-col justify-center h-full animate__animated animate__fadeInLeft">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">Hola! I am Aniruddha</h2>
                <p className="text-gray-500 py-4 max-w-md">
                I'm a 3rd year Computer Science Undergraduate Student at the University of Calgary and a Data
                science enthusiast.I find immense joy in exploring the world of data analysis and discovering new technologies that facilitate this process.
                </p>
                <div>
                    <button className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-white to to-white cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my Profile' className="rounded-2xl mx-auto w-2/3 md:w-full animate__animated animate__fadeInRight"/>
            </div>
        </div>
    </div>
  )
}

export default Home