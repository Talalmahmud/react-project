
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Products from './screens/Products';

function App() {
  return (
    <BrowserRouter>
    
    <div>
      <header>
        <Link to="/">tradeOf</Link>
      </header>
      <main>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:slug' element={<Products />} />
      </Routes>
      </main>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
