import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./components/pages/Landing"
import Dashboard from './components/pages/user/Dashboard';
import MainLayout from './Layouts/MainLayout';
import About from "./components/pages/About";
import Pricing from "./components/pages/Pricing";
import Tokens from "./components/pages/Tokens";


// https://www.figma.com/file/evJyhfeRqgwROLy34dwnai/FinanceFlow%3A-Website-Template-for-Finance-startups-(Community)?type=design&node-id=1-3&mode=design&t=25duKGPWA3X8kuQY-0


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="tokens" element={<Tokens />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
