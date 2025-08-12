import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function Cart(){
  const {cartItems , setCartItems } = useOutletContext();
  
  const [subtotal ,setSubtotal] = useState(0)

  useEffect(()=>{
    if(cartItems.length>0){
      
      setSubtotal(cartItems.reduce((prev,item)=>{
        return prev+(item.price*item.count)
      },0))
    }
    else{
      setSubtotal(0)
    }
  }, [cartItems])

  const handleInc = (id)=>{
    setCartItems((prev)=>{
      return prev.map((item)=>{
        return (item.id==id && item.count<20)?(
          {...item , count:item.count+1}
        ):(
          item
        )
      })
    })
  }


  const handleDec = (id)=>{
    setCartItems((prev)=>{
      return prev.map((item)=>{
        return (item.id == id && item.count>0)?(
          {...item, count:item.count-1}
        ):(
          item
        )
      })
    })
  }
  



  return(
    <div className="w-screen min-h-full flex flex-col  items-center  ">
      <div className="text-black md:text-6xl text-4xl  p-10 font-bold font-Poppins select-none">Your Cart</div>
      {cartItems.length>0?(
        <>
          <div className="h-[80%] p-2  w-[100%] md:w-[60%] rounded-2xl flex-shrink-0 flex-wrap justify-center items-center flex-col">
            {cartItems.map((items)=>{
              return (
                <div key={items.id} className="md:w-[95%] w-full  h-50 md:h-80 md:p-10 py-5 mb-10 border-b-[1px] border-black flex ">
                  <div className="w-[30%] h-[80%] m-3 ">
                    <img src={items.image} alt="" className="z-20 w-full h-full object-contain " />
                  </div>
                  <div className="font-Poppins w-[80%]">
                    <div className="md:text-3xl text-sm font-bold py-2">
                      {items.title}
                    </div>
                    <div>
                      Price: ${items.price}
                    </div>
                    <div>
                      <div className=" text-start select-none relative text-3xl  md:h-10 m-auto md:my-12 flex items-center  border-2 border-black rounded-4xl my-2 md:w-35 h-6 w-20  text-[1.2rem] justify-around">
                        <div className="md:text-2xl text-base flex items-center justify-center h-full text-center w-10 cursor-pointer"
                          onClick={()=>handleDec(items.id)}
                        >-</div>
                        <div className="text-sm md:text-2xl">
                          {cartItems.find(item=>item.id===items.id).count}
                        </div>
                        <div 
                          className="text-base md:text-2xl m-0 p-0 flex items-center justify-center w-10 cursor-pointer"
                          onClick={()=>handleInc(items.id)}
                        >+</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              )        
            })}
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-black md:text-4xl text-xl md:px-10 md:pt-5 px-3 pt-3 font-bold font-Poppins select-none">Sub-Total:</div>
              <div className="text-black md:text-4xl text-xl md:px-10 md:pt-5 px-3 py-3  font-Poppins select-none">
                ${subtotal}
              </div>
              <div className="pb-10">
                <Link 
                  to="/checkout" 
                  className="md:w-50 md:h-15 mb-10 h-10 w-30  bg-black text-white font-Poppins flex items-center justify-center rounded-md hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
            
          </div>
        </>
      ):(
        <div className="h-full w-full text-4xl m-20">YOUR CART IS EMPTY</div>
      )
      }

    </div>
  )
}