import { Link , NavLink } from 'react-router-dom'
export default function NavBar({cartItems}){
  return (
    
      <nav className=' overflow-hidden select-none  relative z-30 h-20 md:h-22 w-screen font-poppins text-white flex items-center justify-around bg-black font-Poppins'>
        <div className='flex justify-around w-1/2 md:w-1/4 text-[1.1rem]'>
          <NavLink 
          to="/" 
          className={({isActive})=>(
            isActive?(
              "relative m-2 md:w-25 md:h-12 md:text-xl h-10 text-sm flex md:after:25 items-center justify-around  border-b-0  after:w-18 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-70  after:transition-transform after:duration-300"
            ):(
              "relative m-2 md:w-25 text-sm md:text-xl md:h-12 w-20 after:w-18 flex h-10 md:after:25 items-center justify-around  border-b-0 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-0 hover:after:scale-x-70 after:transition-transform after:duration-300"
            )
          )}>           
            Home
          </NavLink>

          <NavLink 
          to="/browser"
          className={({isActive})=>(
            isActive?(
              "relative m-2 md:w-25 md:h-12 md:text-xl h-10 text-sm flex md:after:25 items-center justify-around  border-b-0  after:w-18 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-70  after:transition-transform after:duration-300"
            ):(
              "relative m-2 md:w-25 md:h-12 md:text-xl h-10 text-sm flex md:after:25 items-center justify-around  border-b-0  after:w-18 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-0 hover:after:scale-x-70 after:transition-transform after:duration-300"
            )
          )}> 
            Browse 
          </NavLink>

          <NavLink 
          to="/about"
          className={({isActive})=>(
            isActive?(
              "relative m-2 md:w-25 md:h-12 md:text-xl h-10 text-sm flex md:after:25 items-center justify-around  border-b-0  after:w-18 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-70  after:transition-transform after:duration-300"
            ):(
              "relative m-2 md:w-25 md:h-12 md:text-xl text-sm h-10 flex md:after:25 items-center justify-around after:w-18 border-b-0 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-0 hover:after:scale-x-70 after:transition-transform after:duration-300"
            )
          )}>  
            About
          </NavLink>

        </div>
        <div className='flex justify-center items-center text-[1.1rem] w-25'>
          <NavLink
          to="/cart" 
          className={({isActive})=>(
            isActive?(
              "relative m-2 md:w-25 md:h-12 md:text-xl h-10 text-sm flex md:after:25 items-center justify-around  border-b-0  after:w-18 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-70  after:transition-transform after:duration-300"
            ):(
              "relative m-2 md:w-25 md:h-12 md:text-xl text-sm after:w-18 flex h-10 md:after:25 items-center justify-around  border-b-0 after:content-[''] after:block after:bg-white md:after:w-25 after:top-full after:absolute after:h-0.5 after:scale-x-0 hover:after:scale-x-70 after:transition-transform after:duration-300"
            )
          )}>  
            Cart
            {cartItems.length>0 && (
              <div className='rounded-full w-6 h-6 mx-2 md:mx-0 font-Poppins bg-white text-black flex justify-center items-center text-center leading-none'>{cartItems.length}</div>
            )}
          </NavLink>
        </div>

      </nav>
      
  )
}