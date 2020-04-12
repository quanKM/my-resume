import React, { ReactElement, FC, useState } from 'react'
import Header from '../Home/Header'
import '../../styles/index.css'
import Theme from '../../constants/Theme'

type Props = {
  children: ReactElement[]
}

const Layout: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>(Theme.LIGHT)

  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div>{children}</div>
    </div>
  )
}

export default Layout
