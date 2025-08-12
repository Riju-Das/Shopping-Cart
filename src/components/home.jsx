import { Link } from 'react-router-dom'
export default function(){
  return(
  <>
    <div className=" overflow-hidden z-10 absolute bg-[url('https://images.wallpaperscraft.com/image/single/sneakers_shoes_style_173533_1920x1080.jpg')] bg-cover bg-center w-full h-screen  bg-black flex justify-center items-center top-0">
      <div className="absolute z-10 w-screen md:h-100 h-60 flex justify-center items-center flex-col backdrop-blur-[15px] pointer-events-none"></div>
      <div className="relative md:text-9xl text-5xl text-white text-shadow-lg z-20 w-screen h-100 flex justify-center items-center flex-col font-bold font-Poppins">
        <h1>Welcome To</h1>
        <h1>Shopcart</h1>
        <Link to="browser" className=" h-10 flex items-center justify-center w-25 cursor-pointer text-[1.2rem] m-10 font-medium border-white border-2 rounded-3xl hover:bg-black ">Shop</Link>
      </div>
      
    </div>
  </>
  )
}