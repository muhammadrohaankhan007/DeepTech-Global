'use client';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './layout';
import Home from './page';
import { WhyAttendDetail } from './components/WhyAttendDetail';

const App = () => {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (path.startsWith('#/why-attend/')) {
      const categoryId = path.split('/').pop() || '';
      return <WhyAttendDetail categoryId={categoryId} />;
    }
    return <Home />;
  };

  return (
    <RootLayout>
      {renderContent()}
    </RootLayout>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);