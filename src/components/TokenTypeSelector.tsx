import React from 'react';

interface TokenTypeSelectorProps {
    onSelect: (type: 'NFT' | 'Fungible') => void;
}

const TokenTypeSelector: React.FC<TokenTypeSelectorProps> = ({ onSelect }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select Token Type</h2>
            <div className="flex space-x-4">
                <button
                    onClick={() => onSelect('NFT')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Non-Fungible Token (NFT)
                </button>
                <button
                    onClick={() => onSelect('Fungible')}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                    Fungible Token
                </button>
            </div>
        </div>
    );
};

export default TokenTypeSelector;