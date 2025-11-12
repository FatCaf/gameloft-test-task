import { BrowserRouter, Route, Routes } from 'react-router'
import ProductCarousel from './pages/products'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductCarousel />} />
                <Route path="/cart" element={<h1>Cart</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
