import React from 'react'
import Link from 'next/link'
import '../../styles/main.css'

type Props = {
  href: string
}
const HeaderLink: React.FC<Props> = props => (
  <a
    href={props.href}
    className="block inline-block mt-0 text-gray-900 hover:text-gray-500 mr-4 transition-all transition-300 transition-ease"
  >
    {props.children}
  </a>
)

const Navbar: React.FC = props => {
  return (
    <nav className="flex h-16 items-center justify-between flex-wrap bg-gray-100">
      <span className="ml-5 text-gray-900 font-semibold text-xl tracking-tight">
        zaki's portfolio
      </span>
      <div className="flex">
        <HeaderLink href="/podcast">Podcast</HeaderLink>
        <HeaderLink href="/blog/index">Blog</HeaderLink>
      </div>
    </nav>
  )
}

export default Navbar
