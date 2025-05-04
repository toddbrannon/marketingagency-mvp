// src/components/layout/MainLayout.tsx

import React from 'react';
import Footer from '@/components/Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* Other layout components */}
      {children}
      <Footer
        title="Stay Connected"
        description="Subscribe to our newsletter for the latest updates."
        primaryButtonText="Subscribe"
        primaryButtonLink="/subscribe"
        variant="dark"
      />
    </>
  );
};

export default MainLayout;
