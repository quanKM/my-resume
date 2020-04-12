import React, { FC } from 'react'
import SvgLaravel from '../../Svg/SvgLaravel'
import SvgNextJs from '../../Svg/SvgNextJs'
import SvgReact from '../../Svg/SvgReact'
import SvgJavascript from '../../Svg/SvgJavascript'
import SvgTypescript from '../../Svg/SvgTypescript'
import SvgVue from '../../Svg/SvgVue'
import SvgHtml from '../../Svg/SvgHtml'
import SvgBoostrap from '../../Svg/SvgBoostrap'
import SvgJquery from '../../Svg/SvgJquery'
import SvgRedux from '../../Svg/SvgRedux'
import SvgReduxSaga from '../../Svg/SvgReduxSaga'
import SvgNuxtJs from '../../Svg/SvgNuxtJs'
import SvgNodejs from '../../Svg/SvgNodejs'
import './index.scss'
const Skill: FC = () => {
  return (
    <section className="bg-secondary skill" id="skill">
      <div className="container mx-auto py-24">
        <h3 className="text-blue-500 ">My awesome Skills</h3>
        <h2 className="border-b-4 border-blue-500 w-64">My skills</h2>
        <div className="grid grid-cols-8 gap-4 mt-4 p-4">
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgLaravel className="w-24 h-24"></SvgLaravel>
            <p className="mt-2">Laravel</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgNodejs className="w-24 h-24"></SvgNodejs>
            <p className="mt-2">NodeJs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgJavascript className="w-24 h-24"></SvgJavascript>
            <p className="mt-2">Javascript</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgTypescript className="w-24 h-24"></SvgTypescript>
            <p className="mt-2">Typescript</p>
          </div>

          <div className="card flex flex-col items-center justify-center p-2">
            <SvgReact className="w-24 h-24"> </SvgReact>
            <p className="mt-2">React</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgVue className="w-24 h-24"></SvgVue>
            <p className="mt-2">Vue</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgHtml className="w-24 h-24"></SvgHtml>
            <p className="mt-2">HTML</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgBoostrap className="w-24 h-24"></SvgBoostrap>
            <p className="mt-2">Boostrap</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgJquery className="w-24 h-24"></SvgJquery>
            <p className="mt-2">Jquery</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgNextJs className="w-24 h-24"> </SvgNextJs>
            <p className="mt-2">NextJs</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgRedux className="w-24 h-24"></SvgRedux>
            <p className="mt-2">Redux</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgReduxSaga className="w-24 h-24"></SvgReduxSaga>
            <p className="mt-2">Redux Saga</p>
          </div>
          <div className="card flex flex-col items-center justify-center p-2">
            <SvgNuxtJs className="w-24 h-24"></SvgNuxtJs>
            <p className="mt-2">NuxtJs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
