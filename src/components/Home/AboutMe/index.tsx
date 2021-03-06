import React from 'react'
import SvgAddress from '../../Svg/SvgAddress'
import SvgBackend from '../../Svg/SvgBackend'
import SvgQuote from '../../Svg/SvgQuote'
import SvgCupcake from '../../Svg/SvgCupcake'
import SvgWorld from '../../Svg/SvgWorld'
import { Element } from 'react-scroll'
import SvgProductActivity from '../../Svg/SvgProductActivity'

const AboutMe = () => {
  const myBirthDay = new Date('September 10, 1997')
  const currentDate = new Date()
  const myYearOld = Math.abs(
    currentDate.getUTCFullYear() - myBirthDay.getUTCFullYear()
  )

  return (
    <Element
      className="bg-primary about-me font-mont"
      id="about-me"
      name="about-me"
    >
      <div className="container mx-auto py-32 px-4 sm:px-0">
        <div className="section-title">
          <h3 className="text-blue-500 ">Discover</h3>
          <h2>About me</h2>
        </div>
        <div className="flex">
          <div className="mt-4 p-4 md:w-1/2 w-full">
            <div className="flex ">
              <p className="font-open font-bold text-2xl md:text-4xl">
                {/* KHONG MINH QUAN */}
              </p>
            </div>
            <div className="flex mt-1">
              <SvgBackend width="1.5rem" height="1.5rem" className="mt-1" />
              <p className="font-open ml-2 font-bold text-xl md:text-2xl">
                FULL STACK DEVELOPER
              </p>
            </div>
            <div className="flex mt-1">
              <SvgAddress width="1.5rem" height="1.5rem" />
              <p className="font-open  ml-2 font-bold text-xl md:text-2xl">
                HANOI, VIETNAM
              </p>
            </div>
            {/* <div className="flex mt-1">
              <SvgCupcake width="1.5rem" height="1.5rem" />
              <p className="font-open ml-2 text-base md:text-xl">Been on</p>
              <SvgWorld
                width="1.25rem"
                height="1.25rem"
                className="mt-1 md:mt-2 mx-1"
              />
              <p className="font-open text-base md:text-xl">
                {' '}
                {myYearOld} years
              </p>
            </div> */}
            <div className="flex mt-1">
              <SvgQuote width="1.5rem" height="1.5rem" />
              <p className="font-open text-base md:text-xl ml-2">
                "Work hard in silence, let your success be your noise"
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:flex items-center justify-center hidden p-4">
            <SvgProductActivity className="w-full"></SvgProductActivity>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default AboutMe
