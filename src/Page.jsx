import React from 'react';

const Page = () => {
    const instaopen=()=>{
        window.open("https://www.instagram.com/b_surya_prakash_?igsh=YW9zbDAzaHk1ZGE1","_blank","width=800","height=600")
    }
    const myresumeopen=()=>{
        window.open("https://drive.google.com/file/d/1bsmH7N9p-ysYLQx-69FAnUEk-xlWt_0H/view?usp=sharing","_blank","width=800","height=600")
    }

    const linkedinopen=()=>{
        window.open("https://www.linkedin.com/in/surya-prakash-52626b301/","_blank","width=800","height=600")
    }
  return (
    <div className="h-screen w-full p-10 bg-[url(bg.jpg)]">
      <div 
        className="w-full h-full   text-5xl rounded-[50px] shadow-lg shadow-white bg-cover backdrop-blur-lg   bg-[url(bg.jpg)]"
      >
        <div className='flex justify-around pt-52'>
        <div onClick={instaopen} className='leading-snug cursor-pointer'>
        <img src="insta.png"className='h-[9vw] w-[9vw] '></img>
        <h3 className='text-white text-3xl mt-3'>Instagram</h3>
        </div>
        <div onClick={myresumeopen} className='leading-snug  cursor-pointer'>
        <img src="cv.png"className='h-[9vw] w-[9vw] '></img>
        <h3 className='text-white text-3xl mt-3 '>My Resume</h3>
        </div>
        <div onClick={linkedinopen}className='leading-snug cursor-pointer'>
        <img src="link.png"className='h-[9vw] '></img>
        <h3 className='text-white text-3xl ml-3 mt-3'>Linkedin</h3>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default Page;
