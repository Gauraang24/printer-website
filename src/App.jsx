import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import OpenRoute from './routing/OpenRoute';
import { Spin } from 'antd'; // Import Ant Design's Spin component

// Dynamically import the pages
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Product = lazy(() => import('./pages/Product/Product'));
const Ewaste = lazy(() => import('./pages/EWaste/Ewaste'));

function App() {
  return (
    <Router>
      {/* Wrap routes inside Suspense for lazy loading */}
      <Suspense
        fallback={
          <div className="loading-screen">
            <Spin size="large" /> {/* AntD Spin component as the fallback */}
          </div>
        }
      >
        <Routes>
          {/* Common routes wrapped by OpenRoute */}
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
