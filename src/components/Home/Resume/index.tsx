import React, { FC, useEffect } from 'react'
import { Element } from 'react-scroll'
import './index.scss'

const Resume: FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { WOW } = require('wowjs/dist/wow.js')
      new WOW().init()
    }
  }, [])

  return (
    <Element className='resume font-mont bg-primary' id='resume' name='resume'>
      <div className='container mx-auto py-32 px-4 sm:px-0'>
        <div className='section-title'>
          <h3 className='text-blue-500 '>Experience & Education</h3>
          <h2>My Experience</h2>
        </div>
        <ul className='timeline timeline-centered mt-4'>
          <li
            className='timeline-item wow fadeInRight'
            data-wow-delay='0.5s'
            data-wow-offset='50'
          >
            <div className='timeline-info'>
              <h4>Mar 2020 - Present</h4>
            </div>
            <div className='timeline-marker' />
            <div className='timeline-content'>
              <div className='timeline-title'>
                <h3>VMO VIETNAM</h3>
                <h4 className='my-1'>FRONT-END DEVELOPER</h4>
              </div>
              <p>- Combining the art of design with the art of programming.</p>
              <p>
                + Translate the UI/UX design wireframes to actual code that
                  will produce visual elements of the application.
              </p>
              <p>
                + Work directly with customers.
              </p>
              <p>
                + Project schedule Planning.
              </p>
                <p>
                + Assign tasks to the team member and review the code
              </p>
            </div>
          </li>
          <li
            className='timeline-item wow fadeInLeft'
            data-wow-delay='0.5s'
            data-wow-offset='50'
          >
            <div className='timeline-info'>
              <h4>Dec 2019 - Mar 2020</h4>
            </div>
            <div className='timeline-marker' />
            <div className='timeline-content'>
              <div className='timeline-title'>
                <h3>IMPL VIETNAM</h3>
                <h4 className='my-1'>FULL STACK WEB DEVELOPER</h4>
              </div>
              <p>- Build and maintained multi Japanese's web applications</p>
              <p>
                + Analyze the customer's requirement.
              </p>
              <p>
                + Provide solution and detail design.
              </p>
            </div>
          </li>
          <li
            className='timeline-item  wow fadeInRight'
            data-wow-delay='0.5s'
            data-wow-offset='50'
          >
            <div className='timeline-info'>
              <h4>Jun 2018 - Dec 2019</h4>
            </div>
            <div className='timeline-marker' />
            <div className='timeline-content'>
              <div className='timeline-title'>
                <h3>SUN* VIETNAM INC. (FRAMGIA)</h3>
                <h4 className='my-1'>FULL STACK WEB DEVELOPER</h4>
              </div>
              <p>
                - Work as a full-stack developer developing the Viblo platform.
              </p>
              <p>- Achievement:</p>
              <p className='ml-4'>
                + Maintained application with 100,000 daily active users.
              </p>
              <p className='ml-4'>
                + Build multi stunning and scalable web applications using Laravel/NodeJs in the Backend and VueJs/NuxtJs or
                  ReactJs/NextJs in the Frontend.
                + Learn how to work with Docker.
                + Provide solution and detail design.
              </p>
            </div>
          </li>
          <li
            className='timeline-item  wow fadeInLeft'
            data-wow-delay='0.5s'
            data-wow-offset='50'
          >
            <div className='timeline-info'>
              <h4>Aug 2015 - Dec 2019</h4>
            </div>
            <div className='timeline-marker'></div>
            <div className='timeline-content'>
              <div className='timeline-title'>
                <h3>POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY</h3>
                <h4 className='my-1'>INFORMATION TECHNOLOGY</h4>
              </div>
              <p>- Graduated with Bachelor of Computer Science</p>
            </div>
          </li>
        </ul>
      </div>
    </Element>
  )
}

export default Resume
