// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.jsx';
import './index.css'; // 스타일 파일이 있다면

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
