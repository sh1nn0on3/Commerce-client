import './App.css'
import 'animate.css'
import { ConfigProvider } from 'antd'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import RouteApp from './route'

function App() {
  return (
    <>
      <ConfigProvider>
        <HelmetProvider>
          <BrowserRouter>
            <RouteApp />
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
    </>
  )
}

export default App
