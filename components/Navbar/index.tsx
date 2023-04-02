import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsFillPersonFill } from "react-icons/bs"
import LogoImage from '../../public/assets/images/download.jpeg'
import {
  Nav,
  // NavLink, 
  LogoContainer,
  NavLinkContainer,
  MenuIcon,
  OverlayMenu,
  MenuLinkContainer,
  CloseButtonContainer,
  MenuCloseIcon
} from './NavElements'
import NavLink from './NavLink'
import { WindowSize } from '../../types'
import { useWindowSize } from '../../hooks'

// type Props = {}

// const Navbar = (props: Props) => {
//   return (
//     <Nav key={process.browser ? 'client' : 'server'}>
//       <LogoContainer>
//         <NavLink href="/">
//           <Image
//             src={LogoImage}
//             alt="logo"
//             width={50}
//             height={50}
//             priority={true}
//           />
//         </NavLink>
//       </LogoContainer>
//       <NavLinkContainer>
//         <NavLink href="/">
//           Home
//         </NavLink>
//         <NavLink href="/navbarPages/products">
//           Products
//         </NavLink>
//         <NavLink href="/navbarPages/sales">
//           Sales
//         </NavLink>
//         <NavLink href="/navbarPages/profile">
//           <BsFillPersonFill size={50}/>
//         </NavLink>
//       </NavLinkContainer>
//     </Nav>
//   )
// }


const Navbar = () => {

  const size: WindowSize = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }


  return (
    <Nav key={process.browser ? 'client' : 'server'}>
      <LogoContainer>
        <NavLink route="/">
          <Image
            src={LogoImage}
            alt="logo"
            width={50}
            height={50}
            priority={true}
          />
        </NavLink>
      </LogoContainer>
      <NavLinkContainer>
        {
          size.width > 768 ?

            <>
              <NavLink route="/">
                Home
              </NavLink>
              <NavLink route="/navbarPages/products">
                Products
              </NavLink>
              <NavLink route="/navbarPages/sales">
                Sales
              </NavLink>
              <NavLink route="/navbarPages/profile">
                <BsFillPersonFill size={50} color='#03A062' />
              </NavLink>
            </>
            :
            <MenuIcon
              size={30}
              onClick={openMenu}
            />

        }

      </NavLinkContainer>

      {
        showMenu &&
        <OverlayMenu>
          <CloseButtonContainer>
            <MenuCloseIcon
              size={40}
              color='white'
              onClick={closeMenu}
            />
          </CloseButtonContainer>
          <MenuLinkContainer>
            <NavLink route="/">
              <div onClick={closeMenu}>Home</div>
            </NavLink>
            <NavLink route="/navbarPages/products">
              <div onClick={closeMenu}>Products</div>
            </NavLink>
            <NavLink route="/navbarPages/sales">
              <div onClick={closeMenu}>Sales</div>
            </NavLink>
            <NavLink route="/navbarPages/profile">
                <div onClick={closeMenu}><BsFillPersonFill size={50} color='#03A062' /></div>
            </NavLink>
          </MenuLinkContainer>
        </OverlayMenu>
      }
    </Nav>
  )
}

export default Navbar