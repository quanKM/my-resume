import React, { FC } from 'react'
import './index.scss'
const Resume: FC = () => {
  return (
    <section className="resume font-mont bg-primary" id="resume">
      <div className="container mx-auto py-32">
        <div>
          <h3 className="text-blue-500 ">Experience & Education</h3>
          <h2 className="border-b-4 border-blue-500 ">My resume</h2>
        </div>
        <ul className="timeline timeline-centered mt-4">
          <li className="timeline-item">
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
          <li className="timeline-item">
            <div className="timeline-info">
              <h4>Dec 2019 - Mar 2020</h4>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">
                <h3>IMPL VIETNAM</h3>
                <h4 className="my-1">FULL STACK WEB DEVELOPER</h4>
              </div>
              <p>Building multi web applications for Japanese customer:</p>
              <p>
                - Building management using Laravel, Jquery, Mysql, Bootstraps,
                ...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Resume
