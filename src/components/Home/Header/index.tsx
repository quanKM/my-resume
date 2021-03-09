import React, { FC, useState, useEffect } from 'react'
import ChangeThemeButton from './ChangeThemeButton'
import SvgAstronaut from '../../Svg/SvgAstronaut'
import './index.scss'
import { Link, animateScroll as scroll } from 'react-scroll'
import Theme from '../../../constants/Theme'
import SvgToggle from '../../Svg/SvgToggle'

type Props = {
  setTheme: Function
  theme: string
}

const Header: FC<Props> = ({ theme, setTheme }) => {
  const [showMobileHeader, setShowMobileHeader] = useState(false)

  const [isTop, setIsTop] = useState(
    typeof window !== 'undefined' ? window.pageYOffset <= 100 : null
  )
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setIsTop(typeof window !== 'undefined' ? window.pageYOffset <= 100 : null)
    })
  }, [])

  const scrollToTop = () => {
    setShowMobileHeader(false)
    scroll.scrollToTop()
  }
  return (
    <header className="header font-sans m-0">
      <div className={(isTop ? 'absolute' : 'fixed') + ' w-full z-10'}>
        <div
          className={
            (isTop
              ? ' bg-transparent text-orange-200'
              : ` bg-primary animated fadeInDown shadow ${
                  theme === Theme.LIGHT ? 'text-black' : 'text-orange-200'
                }`) + ' z-10'
          }
        >
          <div className="container mx-auto px-4 hidden sm:block">
            <div className="flex py-4">
              <div className="hidden sm:block">
                <a
                  className="flex items-center cursor-pointer"
                  onClick={scrollToTop}
                >
                  <SvgAstronaut className="w-12 h-12"></SvgAstronaut>
                  <span className="ml-2 font-semibold">QuanKM</span>
                </a>
              </div>
              <div className="hidden sm:flex sm:items-center ml-auto">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="hero"
                  className="text-lg font-semibold mr-6 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  to="about-me"
                  duration={500}
                  className=" text-lg font-semibold mr-6 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to="skill"
                  className=" text-lg font-semibold mr-6 cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  to="resume"
                  className=" text-lg font-semibold mr-6 cursor-pointer"
                >
                  Experience
                </Link>
                <ChangeThemeButton
                  theme={theme}
                  setTheme={setTheme}
                  className="text-gray-800 text-sm font-semibold  mr-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (theme === Theme.LIGHT ? 'text-black' : 'text-orange-200') +
            ' bg-primary z-10'
          }
        >
          <div className="container block sm:hidden ">
            <div className="flex px-4 py-2">
              <div className="sm:hidden cursor-pointer mr-auto">
                <a className="flex  items-center" onClick={scrollToTop}>
                  <SvgAstronaut className="w-12 h-12"/>
                  <span className="ml-2 font-semibold">QuanKM</span>
                </a>
              </div>
              <div
                className="sm:hidden cursor-pointer ml-auto"
                onClick={() => {
                  setShowMobileHeader(s => !s)
                }}
              >
                <SvgToggle className="text-purple-600 w-12 h-12"></SvgToggle>
              </div>
            </div>
            <div
              className={
                (showMobileHeader ? 'show border-t-2' : 'hide') +
                ' bg-primary z-20 mobile__sidebar'
              }
            >
              <div className=" flex flex-col px-4">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="hero"
                  onClick={() => {
                    setShowMobileHeader(false)
                  }}
                  className=" text-lg font-semibold mr-6 cursor-pointer border-b-2 py-2"
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  to="about-me"
                  duration={500}
                  onClick={() => {
                    setShowMobileHeader(false)
                  }}
                  className=" text-lg font-semibold mr-6 cursor-pointer border-b-2 py-2"
                >
                  About
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="skill"
                  onClick={() => {
                    setShowMobileHeader(false)
                  }}
                  className=" text-lg font-semibold mr-6 cursor-pointer border-b-2 py-2"
                >
                  Skills
                </Link>
                <Link
                  spy={true}
                  smooth={true}
                  onClick={() => {
                    setShowMobileHeader(false)
                  }}
                  to="resume"
                  className=" text-lg font-semibold mr-6 cursor-pointer border-b-2 py-2"
                >
                  Resume
                </Link>

                <ChangeThemeButton
                  theme={theme}
                  setTheme={setTheme}
                  className="mr-4 pt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
