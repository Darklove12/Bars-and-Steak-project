/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../UI/Navrbar'
import Cardlist from '../UI/Cardlist'
import CardSell from '../UI/CardSell'

const Menu = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="">
                    <div>
                        <img src="https://i.pinimg.com/originals/e9/81/5b/e9815b482d10e65c5599cc3fce6fd5b6.png"
                            className="absolute mt-[2rem] w-[35%] ml-[28rem] rounded-full w-[25%]" />
                    </div>
                    <h1 className="absolute text-orange-400 text-2xl text-center bg-white rounded-md w-60 font-bold ml-[36rem] mt-[22rem]">Smoked Stories</h1>
                    <h1 className="absolute text-white font-bold ml-[34.2rem] mt-[27rem] text-6xl">Our Menu.</h1>
                    <p className='absolute text-center text-white ml-[24rem] mt-[35rem]'>
                        dfbnjsrg ehbpsnrinbm nerivbrtstbonme;ab fbmn't'bnoireavbu mrtbn revbj rjnkojnrtbu blabrs <br /> dkdigjogpp dvfbsrtij uihvfsb fvbsbinidrub bsnrlibu
                    </p>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/61fee179da75dc376fcaabb9/5aa1a207-04da-4f72-b040-e83be1e0a914/HIDE-meat.jpg"
                            className='my-[-4rem]' />
                    </div>

                    <div>
                        <h1 className="absolute ml-[34rem] mt-20 font-bold text-4xl">Best Bars and Steaks</h1>
                        <h1 className="absolute ml-[38rem] mt-36 font-bold">Loved By Bathande Sinukela</h1>
                        <p className='absolute text-center ml-[26.4rem] mt-60'>
                            fsnytrgjfinevubbn iunbsyitdmnotji rtbrns;tdbmt dfbhdyt rtbtytrsgbdty mrvbsrtonmbb <br />rbtnmfymnbvoa dfgbythtrjn fgsdnfb.
                        </p>
                    </div>
                    <div>
                        <img className='ml-[29rem] mt-36'
                            src="https://i.pinimg.com/originals/e9/81/5b/e9815b482d10e65c5599cc3fce6fd5b6.png" alt="" />
                    </div>
                    <div>
                    </div>
                    <Cardlist/>
                </div>
                <CardSell/>
            </div>
        </div >
    )
}

export default Menu