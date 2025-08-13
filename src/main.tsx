import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react';

createRoot(document.getElementById('root') as HTMLDivElement).render(
    <StrictMode>
        <App />
        <Toaster />
    </StrictMode>,
);
