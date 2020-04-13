import React, { FC } from 'react'
import Theme from '../../../constants/Theme'
import SvgSun from '../../Svg/SvgSun'
import SvgNight from '../../Svg/SvgNight'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
type Props = {
  setTheme: Function
  theme: string
  className?: string
}

const ChangeThemeButton: FC<Props> = ({ theme, setTheme, className }) => {
  return (
    <div className={className}>
      <Toggle
        defaultChecked={theme === Theme.DARK}
        icons={{
          checked: <SvgSun className="w-4 h-4 pb-1"></SvgSun>,
          unchecked: <SvgNight className="w-4 h-4 pb-1"></SvgNight>,
        }}
        onChange={() =>
          setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
        }
      />
    </div>
  )
}

export default ChangeThemeButton
