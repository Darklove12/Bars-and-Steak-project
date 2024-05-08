
import Navbar from '../UI/Navrbar'

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div>
          <img className='w-[100%] h-[85vh] shadow-md'
            src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className='absolute text-center text-white text-4xl mt-[-25rem] ml-[31.2rem]'>
            <h1 className='text-4xl'>
              Reserve A Table
            </h1>
            <h2 className='mt-3 text-8xl font-bold'>
              Contact Us
            </h2>
            <h3 className='absolute text-4xl font-bold text-black ml-24 my-[20rem]'> Are You Hungry? </h3>
            <h4 className='sticky text-sm text-black my-[22.7rem] mr-7'> Come. Dine. With. Us! </h4>
            <h5 className='absolute text-sm text-black my-[-21rem] mr-9'> wretyejumyrudnbsvrtgbn  tsrdymu wheumjudgh dtfym,t uytjh  srdtyfu,u dhrdsnd</h5>
          </div>

          <div >
            <ul className='text-center ml-[37.5rem] mt-[15rem] flex gap-10'>
              <li> For Restaurant <br />000 000 0000</li>
              <li>  Private Dinning <br />000 000 0000</li>
            </ul>
          </div>
          <div>
            <h1 className='text-center ml-8 mt-7'>
Email Address
info@steakandbar.co.za <br /> <br />
Opening Hours <br />
Monday- Friday: 8h00-6:30 <br /> <br />
Saturday-Sunday: 9h00-7:30 <br /><br />
Holiday : 9h30-3h00
            </h1>
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/e9/81/5b/e9815b482d10e65c5599cc3fce6fd5b6.png"
              className="absolute mt-[-6rem] ml-[34rem] rounded-full w-[25%]" />
          </div>
          <div>
            <h1 className='mt-40 ml-[40.4rem] font-bold text-xl'>
              Have Feedback?
            </h1>
            <p className='text-center mt-3'>
              vbtorugbtdybgrhb fbersoun hbubvuARUYVB fdbghdu <br /> nghbgbnd8 gb rub g nihbuggnsb u
            </p>
          </div>

          <div>
            <div>
              <h3 className="absolute mt-32 ml-[15rem] font-bold text-3xl">
                Get In
                <span className="text-gray-400 ml-3 underline">Touch
                </span>
              </h3>
            </div>
            <br />
            <div className="absolute flex ml-60 mt-40 bg-gray-600 w-80 h-80 shadow-md rounded-md">
              <div className="mt-5 ml-16">
                <form
                  target="_blank"
                  action="https://formsubmit.co/fortunate.ntwanano@gmail.com"
                  method="POST"
                >
                  <div>
                    <div>
                      <div>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <br />
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="w-8">
                    <textarea
                      placeholder="Your Message"
                      className="form-control"
                      name="message"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-red-500 w-[30%] h-[5vh] font-bold rounded-md hover:bg-gray-700 hover:text-white shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div>
            <iframe
              className="h-[79vh] w-[39rem] ml-[37rem] mt-[1rem] shadow-md rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3372382472385!2d28.015822610469872!3d-26.185705776992375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea23ac400b3%3A0xd9aa7546e337778f!2sThe%20Digital%20Academy!5e0!3m2!1sen!2sza!4v1695028966966!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact