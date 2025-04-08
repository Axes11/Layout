import ContactsForm from "./ContactsForm"

export default function Contacts(){
      return(
            <div className="mb-25">
                  <div className="flex flex-col items-center gap-5 mt-25">
                        <span className="text-5xl font-bold">Contacts</span>
                        <span className="grey-text font-medium">Here you can send a request to us and we will contact you.</span>
                  </div>

                  <div className="flex items-center w-[100%] mt-15">
                        <div className="flex flex-col items-start text-5xl gap-4 text-white w-[50%] bg-[#202020] p-[40px] rounded-xl">
                              <span className="text-5xl font-bold">Your Vision, Our Code</span>
                              <span className="text-[#AFAFAF] text-[16px] font-medium">Launch your online presence with a custom-made website that stands out.</span>
                              <input type="text" placeholder="Name..." className="input w-full"/>
                              <input type="text" placeholder="Phone number..." className="input w-full"/>
                              <input type="text" placeholder="E-mail..." className="input w-full"/>
                              <button className="button text-[16px] font-medium">LEAVE A REQUEST</button>
                        </div>

                        <div className="flex flex-col items-end text-5xl gap-4 text-white w-[50%] p-[40px] rounded-xl">
                              <span className="text-5xl text-[#202020] font-bold text-right">Or Contact Us</span>
                              <span className="text-[#AFAFAF] text-[16px] text-grey font-medium text-right">Write to us to our e-mail and we will responde as soon as we can.</span>
                              <div className="flex items-center gap-5 h-[55px]">
                                    <span className="text-[#202020] text-[16px] font-medium">invertedhead@gmail.com</span>
                                    <img src="/mail.png" alt="Mail" />
                              </div>
                              <div className="flex items-center gap-5 h-[55px]">
                                    <span className="text-[#202020] text-[16px] font-medium">Inverted Head</span>
                                    <img src="/instagram.png" alt="Instagram" />
                              </div>
                              <div className="flex items-center gap-5 h-[55px]">
                                    <span className="text-[#202020] text-[16px] font-medium">@InvertedHead</span>
                                    <img src="/telegram.png" alt="Telegram" />
                              </div>
                              <button className="button text-[16px] font-medium text-[#202020] hidden">LEAVE A REQUEST</button>
                        </div>
                  </div>
            </div>
      )
}