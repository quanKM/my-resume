import React, { FC } from 'react'
import ProfileImage from '../../../images/profile.png'
import './style.scss'

const Hero: FC = () => {
  return (
    <section className="hero h-screen font-mont" id="hero">
      <div className="w-full h-screen flex align-middle  items-center justify-center">
        <div className="container justify-center flex text-white flex-col items-center">
          <div className="w-48 h-48 rounded-full ">
            <img
              className="w-full h-full rounded-full object-cover"
              src={ProfileImage}
            />
          </div>
          <h1 className="text-4xl lg:text-6xl text-blue-500 font-extrabold">
            Khong Minh Quan
          </h1>
          <p className="text-orange-200 text-lg">
            A Motivated Full Stack developer
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
