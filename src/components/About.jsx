import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-center w-full h-full' data-aos="fade-in" >
            <div className="pb-8">
                <p className='text-5xl font-bold inline border-b-4 border-gray-600'>About Me</p>
            </div>

            <p className='text-xl mt-10'>
            Hello! My name is Aniruddha, and I am a 3rd year undergraduate student at the University of Calgary. As a data science enthusiast, I am always excited to explore and learn about new technologies that drive data analysis forward.The ability to derive meaningful conclusions from complex datasets and solve real-world problems is what truly fascinates me.I have actively pursued coursework in statistics, mathematics, and computer science to enhance my analytical skills.
            </p>

            <br/>

            <p className='text-xl'>
            Through these academic pursuits, I have gained hands-on experience in working with different data analysis tools and programming languages.As I progress in my academic journey and beyond, I am driven to apply my passion for data science to real-world problems and make a positive impact.Thank you for taking the time to learn a little bit about me. I am excited about the opportunities that lie ahead in the field of data science and look forward to making valuable contributions to the ever-evolving world of data analysis.
            </p>
        </div>
    </div>
  )
}

export default About
