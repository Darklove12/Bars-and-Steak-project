
import Navbar from '../UI/Navrbar'


const AboutUs = () => {
    return (
        <div>
            
                     <Navbar />
              <div className="">

             <div>
                 <h1 className='absolute font-bold text-5xl ml-[61rem] mt-[8rem]'>About Us</h1>
                 <p className='absolute text-1xl text-center ml-[47rem] mt-60'>
                 As a steak cooks longer, it becomes hotter, which causes the liquids to
                         cook out <br /> and the muscle fibers to harden up. The outcome is a well-done steak
                         with a uniform gray <br /> inside that is chewy, dry, gritty, and flavorless.
                 </p>
                 <h1 className='ml-[57.5rem] absolute mt-[33rem] font-bold'>
                 Serving best steaks and BBQs since 2023
                </h1>
                 <img className='absolute rounded-full w-40 ml-[62.3rem] mt-[23rem]'
                 src="https://img.freepik.com/premium-vector/sun-logo_535345-3256.jpg" alt="" />
             </div>

         <div>
                 <img
                     src="https://images.unsplash.com/photo-1474898856510-884a2c0be546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                     alt=""
                 className="w-[49.9%] h-[50rem] mb-[1rem] shadow-md"
             />
                </div>

                 <div>
                    
    //         </div>

         </div>
     )
}

export default AboutUs