export default function GreetScreen(){
      return(
            <div className="flex flex-col gap-10">
                  <div className="flex w-full items-center">
                        <h1 className="font-bold leading-15 text-5xl w-[50%]">Web Design & Development That Works for You.</h1>
                        <div className="flex flex-col justify-between items-end w-[50%]">
                              <span className="grey-text font-medium text-base/5">From design to deployment – we handle everything so you can focus <br /> on what you do best.</span>
                              <button className="button font-bold">LEAVE A REQUEST</button>
                        </div>
                  </div>
                  <img src="/mainscreen.png" alt="Abstract Circle" />
                  <div className="flex items-center justify-between relative w-full">
                        <div className="grey-text font-medium">Launch your online presence with a custom-made website that stands out.</div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="w-[50px] h-[50px] border-2 border-[#F24E51] rounded-full flex items-center justify-center">
                              <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-[#F24E51]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                        </div>
                  </div>

                        <div className="flex items-center gap-4">
                              <img src="/telegram.png" alt="Telegram" />
                              <img src="/instagram.png" alt="Instagram" />
                              <img src="/github.png" alt="Github" />
                        </div>
                  </div>

            </div>
      )
}