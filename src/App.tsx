import React from 'react';
import TokenFactory from './components/TokenFactory';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-7xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold mb-5">Token Factory</h1>
          <TokenFactory />
        </div>
      </div>
    </div>
  );
};

export default App;
