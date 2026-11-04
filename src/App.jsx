import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import data from './data.json';
import Select from './Select';
import Search from './Search';

export default function App() {
return (
<BrowserRouter>
<nav style={{ display: 'flex', gap: '15px', padding: '10px' }}>
<Link to="/">Home</Link>
<Link to="/Select">Select Categories</Link>
<Link to="/Search">Search a Book</Link>
</nav>

<Routes>
<Route path="/" element={<Select />} />
<Route path="/Select" element={<Select />} />
<Route path="/Search" element={<Search />} />
<Route path="*" element={<h1>Page Not Found</h1>} />
</Routes>
</BrowserRouter>
);
}