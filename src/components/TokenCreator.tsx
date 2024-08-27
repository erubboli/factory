import React, { useState } from 'react';
import TokenTypeSelector from './TokenTypeSelector';
import NFTTypeSelector from './NFTTypeSelector';
import TokenFactory from './TokenFactory';
import NFTFactory from './NFTFactory';

type TokenType = 'NFT' | 'Fungible' | null;
type NFTType = string | null;

const TokenCreator: React.FC = () => {
    const [tokenType, setTokenType] = useState<TokenType>(null);
    const [nftType, setNFTType] = useState<NFTType>(null);

    const handleTokenTypeSelect = (type: TokenType) => {
        setTokenType(type);
        if (type === 'Fungible') {
            setNFTType(null);
        }
    };

    const handleNFTTypeSelect = (type: NFTType) => {
        setNFTType(type);
    };

    const renderStep = () => {
        if (!tokenType) {
            return <TokenTypeSelector onSelect={handleTokenTypeSelect} />;
        }
        if (tokenType === 'NFT' && !nftType) {
            return <NFTTypeSelector onSelect={handleNFTTypeSelect} />;
        }
        if (tokenType === 'Fungible') {
            return <TokenFactory />;
        }
        if (tokenType === 'NFT' && nftType) {
            return <NFTFactory nftType={nftType} />;
        }
        return null;
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Token Creator</h1>
            {renderStep()}
        </div>
    );
};

export default TokenCreator;