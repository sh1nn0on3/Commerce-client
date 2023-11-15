import { Route, Routes } from 'react-router-dom'
import routerConfig, { IRouteConfig } from './routeConfig'

const RouteApp = () => {
  return (
    <Routes>
      {routerConfig.map(({ path, Element, key, ...args }: IRouteConfig, index) => (
        <Route key={index} path={path} element={Element} />
      ))}
    </Routes>
  )
}

export default RouteApp
