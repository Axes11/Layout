export default function Header(){
      return(
            <div className="flex items-center justify-between h-[100px]">
                  <h2 className="font-bold">INVERTED HEAD</h2>
                  <ul className="menu flex items-center gap-5">
                        <li className="font-bold"><a href="#">HOME</a></li>
                        <li className="font-bold"><a href="#">ABOUT US</a></li>
                        <li className="font-bold"><a href="#">PORTFOLIO</a></li>
                        <li className="font-bold"><a href="#">CONTACTS</a></li>
                  </ul>
            </div>
      )
}