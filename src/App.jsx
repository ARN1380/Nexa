import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./components/pages/Landing/Landing"
import Dashboard from './components/pages/user/Dashboard';



const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Landing />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
