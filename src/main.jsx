import { createRoot } from 'react-dom/client';
import { Blog } from './Blog';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Blog />
	</BrowserRouter>,
);
