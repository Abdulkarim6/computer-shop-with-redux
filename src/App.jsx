import './App.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/Routers'
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  
  return (
    <Provider store={store}>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  )
}

export default App
