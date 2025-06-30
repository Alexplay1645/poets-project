import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import PoetPage from './pages/PoetPage';
import BookDetails from './pages/BookDetails';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="poet/:poetId" element={<PoetPage />} />
          <Route path="poet/:poetId/book/:bookId" element={<BookDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
