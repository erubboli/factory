import React from 'react';

interface NFTTypeSelectorProps {
    onSelect: (type: string) => void;
}

const NFT_TYPES = [
    'Digital Art',
    'Collectibles',
    'Music and Audio',
    'Video Content',
    'Virtual Real Estate',
    'Gaming Assets',
    'Sports Memorabilia',
    'Domain Names',
    'Fashion and Wearables',
    'Literature and Written Content',
    // Add more types as needed
];

const NFTTypeSelector: React.FC<NFTTypeSelectorProps> = ({ onSelect }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select NFT Type</h2>
            <div className="grid grid-cols-2 gap-4">
                {NFT_TYPES.map((type) => (
                    <button
                        key={type}
                        onClick={() => onSelect(type)}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NFTTypeSelector;