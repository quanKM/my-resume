import React, { FC } from 'react'

const Resume: FC = () => {
  return (
    <section className="resume  font-mont bg-primary" id="resume">
      <div className="w-full flex align-middle  items-center justify-center">
        <div className="container justify-center flex text-white flex-col items-center">
          <div className="w-48 h-48 rounded-full "></div>
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

export default Resume
