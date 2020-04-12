import React from 'react'
import Girl from '../../images/girl.jpg'
import SvgName from '../../Svg/SvgName'
import SvgAddress from '../../Svg/SvgAddress'
import SvgBackend from '../../Svg/SvgBackend'
import SvgFrontend from '../../Svg/SvgFrontend'
import SvgMyTarget from '../../Svg/SvgMyTarget'
import SvgQuote from '../../Svg/SvgQuote'
import SvgCupcake from '../../Svg/SvgCupcake'
import SvgWorld from '../../Svg/SvgWorld'

const AboutMe = () => {
  const myBirthDay = new Date('September 10, 1997')
  const currentDate = new Date()
  const myYearOld = Math.abs(
    currentDate.getUTCFullYear() - myBirthDay.getUTCFullYear()
  )

  console.log(myYearOld)
  return (
    <section className="bg-primary about-me font-mont" id="about-me">
      <div className="container mx-auto py-32">
        <div className="">
          <div>
            <h3 className="text-blue-500 ">Discover</h3>
            <h2 className="border-b-4 border-blue-500 w-64">About me</h2>

            <div className="mt-4 p-4">
              <div className="flex ">
                <p className="font-open font-bold text-5xl">KHONG MINH QUAN</p>
              </div>
              <div className="flex mt-1">
                <SvgBackend width="1.5rem" height="1.5rem" className="mt-1" />
                <p className="font-open ml-2 font-bold text-2xl">
                  FULL STACK WEB DEVELOPER
                </p>
              </div>
              <div className="flex mt-1">
                <SvgAddress width="1.5rem" height="1.5rem" />
                <p className="font-open  ml-2 font-bold text-2xl">
                  HANOI, VIETNAM
                </p>
              </div>
              <div className="flex mt-1">
                <SvgCupcake width="1.5rem" height="1.5rem" />
                <p className="font-open ml-2 text-xl">Been on</p>
                <SvgWorld
                  width="1.25rem"
                  height="1.25rem"
                  className="mt-1 mx-1"
                />
                <p className="font-open text-xl"> {myYearOld} years</p>
              </div>
              {/* <div className="flex mt-1">
                <SvgMyTarget width="1.5rem" height="1.5rem" />
                <p className="font-open text-xl ml-2">
                  FULL STACK WEB DEVELOPER
                </p>
              </div> */}

              <div className="flex mt-1">
                <SvgQuote width="1.5rem" height="1.5rem" />
                <p className="font-open text-xl ml-2">
                  "Work hard in silence, let your success be your noise"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
