import React, { FC } from 'react'
import { Element } from 'react-scroll'
import SvgBoostrap from '../../Svg/SvgBoostrap'
import SvgCss from '../../Svg/SvgCss'
import SvgDocker from '../../Svg/SvgDocker'
import SvgHtml from '../../Svg/SvgHtml'
import SvgJavascript from '../../Svg/SvgJavascript'
import SvgJquery from '../../Svg/SvgJquery'
import SvgLaravel from '../../Svg/SvgLaravel'
import SvgMysql from '../../Svg/SvgMysql'
import SvgNextJs from '../../Svg/SvgNextJs'
import SvgNodejs from '../../Svg/SvgNodejs'
import SvgNuxtJs from '../../Svg/SvgNuxtJs'
import SvgReact from '../../Svg/SvgReact'
import SvgRedux from '../../Svg/SvgRedux'
import SvgReduxSaga from '../../Svg/SvgReduxSaga'
import SvgTailwind from '../../Svg/SvgTailwind'
import SvgTypescript from '../../Svg/SvgTypescript'
import SvgVue from '../../Svg/SvgVue'
import './index.scss'

const Skill: FC = () => {
  return (
    <Element className="bg-secondary skill font-mont" id="skill" name="skill">
      <div className="container mx-auto py-24 px-4 sm:px-0">
        <div className="section-title">
          <h3 className="text-blue-500 ">My awesome Skills</h3>
          <h2>My skills</h2>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-8 gap-4 mt-4 p-4">
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgLaravel className="lg:w-24 lg:h-24" />
            <p className="mt-2">Laravel</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgNodejs className="lg:w-24 lg:h-24" />
            <p className="mt-2">NodeJs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgJavascript className="lg:w-24 lg:h-24" />
            <p className="mt-2">Javascript</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgTypescript className="lg:w-24 lg:h-24" />
            <p className="mt-2">Typescript</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgHtml className="lg:w-24 lg:h-24" />
            <p className="mt-2">HTML</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgCss className="lg:w-24 lg:h-24" />
            <p className="mt-2">CSS</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgReact className="lg:w-24 lg:h-24"> </SvgReact>
            <p className="mt-2">React</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgReact className="lg:w-24 lg:h-24"> </SvgReact>
            <p className="mt-2">React Native</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgRedux className="lg:w-24 lg:h-24" />
            <p className="mt-2">Redux</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgReduxSaga className="lg:w-24 lg:h-24" />
            <p className="mt-2">Redux Saga</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgNextJs className="lg:w-24 lg:h-24"> </SvgNextJs>
            <p className="mt-2">NextJs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgVue className="lg:w-24 lg:h-24" />
            <p className="mt-2">Vue</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgNuxtJs className="lg:w-24 lg:h-24" />
            <p className="mt-2">NuxtJs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgBoostrap className="lg:w-24 lg:h-24" />
            <p className="mt-2">Boostrap</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgTailwind className="lg:w-24 lg:h-24" />
            <p className="mt-2">Tailwind</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgJquery className="lg:w-24 lg:h-24" />
            <p className="mt-2">Jquery</p>
          </div>

          <div className="card flex flex-col items-center justify-center p-2">
            <SvgDocker className="lg:w-24 lg:h-24" />
            <p className="mt-2">Docker</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgMysql className="lg:w-24 lg:h-24" />
            <p className="mt-2">MySql</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skill
