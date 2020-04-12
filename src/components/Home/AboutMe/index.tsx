import React from 'react'
import Girl from '../../images/girl.jpg'
import SvgName from '../../Svg/SvgName'
import SvgAddress from '../../Svg/SvgAddress'
import SvgBackend from '../../Svg/SvgBackend'
import SvgFrontend from '../../Svg/SvgFrontend'

const AboutMe = () => {
  return (
    <section className="bg-primary about-me font-mont" id="about-me">
      <div className="container mx-auto py-32">
        <div className="">
          <div>
            <h3 className="text-blue-500 ">Discover</h3>
            <h2 className="border-b-4 border-blue-500 w-64">About me</h2>

            <div className="mt-4">
              <div className="flex">
                <SvgName width="1.5rem" height="1.5rem" />
                <p className="font-open">FULL STACK WEB DEVELOPER</p>
              </div>
              <div className="flex">
                <SvgAddress width="1.5rem" height="1.5rem" />
                <p className="font-open">FULL STACK WEB DEVELOPER</p>
              </div>
              <div className="flex">
                <SvgBackend width="1.5rem" height="1.5rem" />
                <p className="font-open">FULL STACK WEB DEVELOPER</p>
              </div>
              <div className="flex">
                <SvgFrontend width="1.5rem" height="1.5rem" />
                <p className="font-open">FULL STACK WEB DEVELOPER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
