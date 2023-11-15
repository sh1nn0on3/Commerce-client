import { PathRouteProps } from 'react-router-dom'
import HeaderLayout from '~/container/layout/Header'

export interface IRouteConfig extends PathRouteProps {
  Element: JSX.Element
  key: any
}

const routerConfig: IRouteConfig[] = [
  {
    path: '/login',
    Element: <div>Home</div>,
    key: 'home'
  },
  {
    path: '/',
    Element: <HeaderLayout />,
    key: 'home'
  },

  {
    path: '/about',
    Element: <div>About</div>,
    key: 'about'
  }
]

export default routerConfig
