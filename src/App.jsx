import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./components/pages/Landing/Landing"
import Dashboard from './components/pages/user/Dashboard';
import MainLayout from './Layouts/MainLayout';





function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
