import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Select from './select';
import Search from './search';

export default function App() {
return (
<BrowserRouter>
<nav style={{ display: 'flex', gap: '15px', padding: '10px' }}>
<Link to="/">Home</Link>
<Link to="/select">Select Categories</Link>
<Link to="/search">Search a Book</Link>
</nav>

<Routes>
<Route path="/" element={<h1>choose what u want to do here</h1> } />
<Route path="/select" element={<Select />} />
<Route path="/search" element={<Search />} />
<Route path="*" element={<h1>Page Not Found</h1>} />
</Routes>
</BrowserRouter>
);
}