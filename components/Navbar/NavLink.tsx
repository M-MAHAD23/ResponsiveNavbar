import React from 'react'
import { useRouter } from 'next/router'
import {NavLinkProps} from '../../types/propTypes';
import { NavLink as Link } from './NavElements'

const NavLink = ({route, children}: NavLinkProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Link href={route} className={currentRoute === route ? "active": ''}>
          {children}
        </Link>
  )
}

export default NavLink