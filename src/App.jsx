import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import OpenRoute from './routing/OpenRoute';
import { Spin } from 'antd'; // Import Ant Design's Spin component

// Dynamically import the pages
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Contact = lazy(() => import('./pages/Contact/index.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs.jsx'));
const Product = lazy(() => import('./pages/Product/Product.jsx'));
const Ewaste = lazy(() => import('./pages/EWaste/Ewaste.jsx'));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className=" w-screen h-screen flex justify-between items-center ">
            <Spin tip="Loading" className=' mx-auto' size="large"></Spin>
          </div>
        }
      >
        <Routes>
          <Route element={<OpenRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/e-waste" element={<Ewaste />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
