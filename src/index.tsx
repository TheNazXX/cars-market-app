import { createRoot } from 'react-dom/client';
import App from 'components';
import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
