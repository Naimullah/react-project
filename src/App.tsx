
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import Navbar from './components/navbar/Navbar'
import Layout from './components/layout/Layout'
import Product from './pages/product/Product'
function App() {

  return (
    <>
        {/* <Navbar /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes> 
      </Layout>
    </>
  )
}

export default App
