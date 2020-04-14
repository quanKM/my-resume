import React, { FC } from 'react'
import SvgGithub from '../../Svg/SvgGithub'
import SvgLinkedin from '../../Svg/SvgLinkedin'
import SvgGastby from '../../Svg/SvgGastby'
import SvgNetlify from '../../Svg/SvgNetlify'

const Footer: FC = () => {
  return (
    <footer className="bg-secondary font-sans m-0">
      <div className="container mx-auto py-8 md:px-0 px-4">
        <div className="flex flex-col border-b-2">
          <a
            href="https://github.com/quanKM"
            className="flex p-2"
            rel="noopener noreferrer"
          >
            <SvgGithub className="w-8 h-8"></SvgGithub>
            <span className="ml-2">https://github.com/quanKM</span>
          </a>
          <a
            href="https://www.linkedin.com/in/quankm/"
            className="flex p-2"
            rel="noopener noreferrer"
          >
            <SvgLinkedin className="w-8 h-8"></SvgLinkedin>
            <span className="ml-2">https://www.linkedin.com/in/quankm/</span>
          </a>
        </div>
        <div>
          <p className="flex mt-2">
            Building with ❤ using &nbsp;
            <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer">
              <SvgGastby className="w-5 h-5 mt-1 "></SvgGastby>
            </a>
            &nbsp; and &nbsp;
            <a href="https://www.netlify.com/" rel="noopener noreferrer">
              <SvgNetlify className="w-5 h-5 mt-1 "></SvgNetlify>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
