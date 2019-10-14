import React from 'react'
import '../../styles/main.css'
import cns from 'classnames'

const HeaderLink: React.FC = props => (
  <a href="#" className="block inline-block mt-0 text-teal-200 hover:text-white mr-4">
    {props.children}
  </a>
)

const Navbar: React.FC = props => {
  return (
    <nav className="flex h-16	absolute top-0 left-0 right-0 items-center justify-between flex-wrap bg-teal-500">
      <span className="ml-5 text-white font-semibold text-xl tracking-tight">zaki's portfolio</span>
      <div className="flex">
        <HeaderLink>Podcast</HeaderLink>
        <HeaderLink>Blog</HeaderLink>
      </div>
    </nav>
  )
}

export default Navbar
