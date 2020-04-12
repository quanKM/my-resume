import React, { FC } from 'react'
import Theme from '../../../constants/Theme'
import SvgSun from '../../Svg/SvgSun'
import SvgNight from '../../Svg/SvgNight'

type Props = {
  setTheme: Function
  theme: string
  className?: string
}

const ChangeThemeButton: FC<Props> = ({ theme, setTheme, className }) => {
  return (
    <button
      className={className}
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {theme === Theme.LIGHT ? (
        <SvgNight width="1.5rem" height="1.5rem"></SvgNight>
      ) : (
        <SvgSun width="1.5rem" height="1.5rem"></SvgSun>
      )}
    </button>
  )
}

export default ChangeThemeButton
