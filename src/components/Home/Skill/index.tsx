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

const Skill: FC = () => {
  return (
    <section className="bg-secondary skill" id="skill">
      <div className="container mx-auto py-32">
        <h3 className="text-blue-500 ">My awesome Skills</h3>
        <h2 className="border-b-4 border-blue-500 w-64">My skills</h2>

        <div className="grid grid-cols-8 gap-4 mt-2">
          <div className="card text-center">
            <SvgLaravel></SvgLaravel>
          </div>
          <div className="card text-center">
            <SvgJavascript></SvgJavascript>
          </div>
          <div className="card text-center">
            <SvgTypescript></SvgTypescript>
          </div>

          <div className="card text-center">
            <SvgReact></SvgReact>
          </div>
          <div className="card text-center">
            <SvgVue></SvgVue>
          </div>
          <div className="card text-center">
            <SvgHtml></SvgHtml>
          </div>
          <div className="card text-center">
            <SvgBoostrap></SvgBoostrap>
          </div>
          <div className="card text-center">
            <SvgJquery></SvgJquery>
          </div>
          <div className="card text-center">
            <SvgNextJs></SvgNextJs>
          </div>
          <div className="card text-center">
            <SvgRedux></SvgRedux>
          </div>
          <div className="card text-center">
            <SvgReduxSaga></SvgReduxSaga>
          </div>
          <div className="card text-center">
            <SvgNuxtJs></SvgNuxtJs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
