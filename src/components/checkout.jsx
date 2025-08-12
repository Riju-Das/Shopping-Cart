import { Link } from "react-router-dom"
export default function Checkout(){
  return (
    <div className="h-screen overflow-hidden w-screen flex items-center justify-center md:text-5xl text-2xl font-bold flex-col">
      <div className="m-5">
        THANK YOU
      </div>
      <div className="m-5">
        FOR YOUR PURCHASE!!
      </div>
      <div className="m-5">
        <Link 
          to="/" 
          className="md:w-50 md:h-15 mb-10 h-10 w-30 text-xl bg-black text-white font-Poppins flex items-center justify-center rounded-md hover:bg-gray-800 transition-colors"
        >
          Go Back
        </Link>  
      </div>   
    </div>
  )
}