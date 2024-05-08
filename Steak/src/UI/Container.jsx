// eslint-disable-next-line no-unused-vars

import Card from './card'
import Command from './Command'
import {Link} from 'react-router-dom'
function Container() {
    return (
        <div>
            
            <img src="https://images.unsplash.com/photo-1607198179219-cd8b835fdda7?ixlib=rb-
        4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit
        =crop&w=2069&q=80"
                className='w-full h-[89.1vh]' />

            <div className='absolute'>
                <h1 className='text-white ml-[31rem] font-bold text-7xl mt-[-24rem]'>
                    STEAK & <span className='text-orange-400'>BAR</span>
                </h1>

                    <div className="btn-group gap-2 mt-[2rem] ml-[31rem] w-[]">
                          <Link to="/menu"
                            className="text-white border border-white-500 hover:bg-white opacity-70 text-center hover:text-black text-2xl font-bold rounded-md"
                          >
                          Explore Menu
                          </Link>
     </div>
            </div>
            <div>

                <h2 className='text-black text-center mt-[7rem] ml-12 font-bold text-7xl'>
                    STEAK & <span className='text-orange-400'>BAR</span>
                </h2>
                <img src="https://cdn.dribbble.com/userupload/10470625/file/original-4e7e9cbe71f93cb9599417ce2be1b082.jpg?resize=1200x900"
                    className="h-[28vh] absolute ml-[38.9rem] rounded-full w-[15%] shadow-md shadow-black mt-[5rem]" />

                <h3 className='text-black text-center ml-5 mt-[22rem] font-bold text-2xl'>
                    Our Delicious Story
                </h3>
                <p className='text-black text-center float-right mr-[15rem] mt-[1rem] font-bold text-1xl'>
                    Beef with a dry rub-mix paired with or without sweet is wonderful on the grill and in steaks. <br />
                    Although they can be challenging to create, these are ideal for your upcoming game day, casual meal, or family gathering. <br />
                    Here is a straightforward recipe that you may use to make beef ribs on the grill.
                </p>
                <img src="https://images.unsplash.com/photo-1602108987428-4768d7c7ecbe?ixlib=rb-4.0.
        3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className='w-[56rem] ml-[20.2rem] mt-[7rem] h-1' />
            </div>
            <div>
                <div className="carousel-inner gap-1 rounded-xl flex mt-[2rem]">
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                            className="rounded-xl h-[17rem] w-[18rem] shadow-md"
                            alt="Exotic Fruits"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1561043433-9265f73e685f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-xl h-[17rem] w-[18rem] shadow-md"
                            alt="Exotic Fruits"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1565299715199-866c917206bb?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-xl h-[17rem] w-[18rem] shadow-md"
                            alt="Exotic Fruits"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1558199141-391d935676f0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-xl h-[17rem] w-[18rem] shadow-md"
                            alt="Exotic Fruits"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-xl h-[17rem] w-[18rem] shadow-md"
                            alt="Exotic Fruits"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1580013759032-c96505e24c1f?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-xl h-[17rem] w-[18rem] shadow-md"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="absolute ml-[26rem] mt-[13rem] font-bold text-7xl text-orange-400">Featured Delicacies</h1>
                <h1 className='absolute ml-[39rem] mt-[20rem] font-bold text-xl text-white'>Fresh From the Grill</h1>
                <img src="https://i.pinimg.com/originals/e9/81/5b/e9815b482d10e65c5599cc3fce6fd5b6.png"
                    className="absolute mt-[14rem] ml-[34.2rem] rounded-full w-[25%]" />
                <h1 className='absolute ml-[33.3rem] mt-[28.4rem] font-bold text-xl text-white'>All Meats Are Served With House Pickles</h1>
                <img src="https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-[120vh] w-[98%] ml-[1rem] mt-6 rounded-xl" />
            </div>
            <Card/>
            {/* ============================================= Prices =================================================== */}
               
            <div>
                <img src="https://images.unsplash.com/photo-1539056276907-dc946d5098c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="mt-10 rounded-md h-[90vh] w-[98%] ml-4" alt="" />
                <h1 className='absolute font-bold text-3xl text-white mt-[-36rem] ml-[34rem] text-orange-500'>
                    <span className='text-black text-9xl text-orange-500 ml-[-19rem]'>Enjoy 50% off on </span>
                    <div className='ml-20 mt-[5rem] text-white w-[35%] text-center rounded-lg shadow-4xl'>
                        On All Drinks
                    </div>
                </h1>

                <h1 className='absolute font-bold text-6xl ml-[35rem] text-orange-500 mt-[-19rem] text-black'>HAPPY HOUR</h1>
                <h1 className='absolute text-white font-bold text-4xl mt-[-14rem] ml-[32rem] text-center rounded-lg shadow-4xl w-[35%]'>
                    Every Thursday, 3pm to 8pm</h1>
                <h1 className=' text-center font-bold text-4xl mt-[5rem] ml-[3rem]'>They All Love Our Food</h1>
                <img src="https://i.pinimg.com/originals/e9/81/5b/e9815b482d10e65c5599cc3fce6fd5b6.png"
                    className="absolute mt-[-9rem] ml-[33.9rem] rounded-full w-[25%]" />
                    <Command/>
            </div>
        </div>
    )
}

export default Container