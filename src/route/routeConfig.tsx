import { PathRouteProps } from 'react-router-dom'
import HeaderLayout from '~/container/layout/Header'
import Home from '~/container/page/public/Home'

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
    Element: <Home />,
    key: 'home'
  },

  {
    path: '/about',
    Element: <div>About</div>,
    key: 'about'
  }
]

export default routerConfig
