export default function Header(){
      return(
            <div className="header w-full flex items-center justify-between h-[100px] z-[3]">
                  <h2 className="font-bold text-white">INVERTED HEAD</h2>
                  <ul className="menu flex items-center gap-10">
                        <li className="font-medium text-white"><a href="#">ABOUT US</a></li>
                        <li className="font-medium text-white"><a href="#">PORTFOLIO</a></li>
                        <li className="font-medium text-white"><a href="#">CONTACTS</a></li>
                  </ul>
            </div>
      )
}