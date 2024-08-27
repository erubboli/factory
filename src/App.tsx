import React from 'react';
import TokenCreator from './components/TokenCreator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <TokenCreator />
    </div>
  );
};

export default App;
