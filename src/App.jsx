import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./components/pages/Landing/Landing"
import Dashboard from './components/pages/user/Dashboard';
import MainLayout from './Layouts/MainLayout';


// https://www.figma.com/file/evJyhfeRqgwROLy34dwnai/FinanceFlow%3A-Website-Template-for-Finance-startups-(Community)?type=design&node-id=1-3&mode=design&t=25duKGPWA3X8kuQY-0


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
