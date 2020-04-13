import React, { FC, useEffect } from 'react'
import './index.scss'
import { Element } from 'react-scroll'

const Resume: FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { WOW } = require('wowjs/dist/wow.js')
      new WOW().init()
    }
  }, [])

  return (
    <Element className="resume font-mont bg-primary" id="resume" name="resume">
      <div className="container mx-auto py-32 px-4 sm:px-0">
        <div className="section-title">
          <h3 className="text-blue-500 ">Experience & Education</h3>
          <h2>My resume</h2>
        </div>
        <ul className="timeline timeline-centered mt-4">
          <li
            className="timeline-item wow fadeInRight"
            data-wow-delay="0.5s"
            data-wow-offset="50"
          >
            <div className="timeline-info">
              <h4>Mar 2020 - Present</h4>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">
                <h3>VMODEV VIETNAM</h3>
                <h4 className="my-1">FRONT-END DEVELOPER</h4>
              </div>
              <p>Combining the art of design with the art of programming.</p>
              <p>
                - Translation of the UI/UX design wireframes to actual code that
                will produce visual elements of the application.
              </p>
            </div>
          </li>
          <li
            className="timeline-item wow fadeInLeft"
            data-wow-delay="0.5s"
            data-wow-offset="50"
          >
            <div className="timeline-info">
              <h4>Dec 2019 - Mar 2020</h4>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">
                <h3>IMPL VIETNAM</h3>
                <h4 className="my-1">FULL STACK WEB DEVELOPER</h4>
              </div>
              <p>Building multi web applications for Japanese customer</p>
              <p>
                - Building management using Laravel, Jquery, Mysql, Bootstrap
              </p>
              <p>- Photo sharing using Electron, Laravel, VueJs, Postgresql</p>
            </div>
          </li>
          <li
            className="timeline-item  wow fadeInRight"
            data-wow-delay="0.5s"
            data-wow-offset="50"
          >
            <div className="timeline-info">
              <h4>Jun 2018 - Dec 2019</h4>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">
                <h3>SUN* VIETNAM INC. (FRAMGIA)</h3>
                <h4 className="my-1">FULL STACK WEB DEVELOPER</h4>
              </div>
              <p>
                - Working as a full-stack developer mainly developing the Viblo
                Platform.
              </p>
              <p>- Achievement:</p>
              <p className="ml-4">
                + Maintaining application with 60,000 daily active users.
              </p>
              <p className="ml-4">
                + Building stunning and scalable web applications combining with
                Backend using Laravel and Frontend using VueJs/NuxtJs or
                ReactJs/NextJs.
              </p>
            </div>
          </li>
          <li
            className="timeline-item  wow fadeInLeft"
            data-wow-delay="0.5s"
            data-wow-offset="50"
          >
            <div className="timeline-info">
              <h4>Aug 2015 - Dec 2019</h4>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">
                <h3>POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY</h3>
                <h4 className="my-1">INFORMATION TECHNOLOGY</h4>
              </div>
              <p>
                - Working as a full-stack developer mainly developing the Viblo
                Platform.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Element>
  )
}

export default Resume
