import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import OpenRoute from './routing/OpenRoute';
import { Spin } from 'antd';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';

// Dynamically import the pages
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Contact = lazy(() => import('./pages/Contact/index.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs.jsx'));
const Product = lazy(() => import('./pages/Product/Product.jsx'));
const Ewaste = lazy(() => import('./pages/EWaste/Ewaste.jsx'));
const Warranty = lazy(() => import('./pages/Warranty/Warranty.jsx'));
const Downloads = lazy(()=> import("./pages/Downloads/Downloads.jsx"))

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
            <Route path="/product-details/:productId" element={<ProductDetails />} />
            <Route path="/e-waste" element={<Ewaste />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/download" element={<Downloads />} />

          </Route>
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
