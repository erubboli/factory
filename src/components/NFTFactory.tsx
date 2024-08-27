import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import UrlInput from './UrlInput';
import TagInput from './TagInput';

interface NFTFactoryProps {
    nftType: string;
}

interface NFTFormData {
    name: string;
    description: string;
    image: File | null;
    externalUrl: string;
    attributes: { trait_type: string; value: string }[];
    tags: string[];
}

const NFTFactory: React.FC<NFTFactoryProps> = ({ nftType }) => {
    const [formData, setFormData] = useState<NFTFormData>({
        name: '',
        description: '',
        image: null,
        externalUrl: '',
        attributes: [],
        tags: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (file: File) => {
        setFormData(prevState => ({
            ...prevState,
            image: file
        }));
    };

    const handleTagsChange = (newTags: string[]) => {
        setFormData(prevState => ({
            ...prevState,
            tags: newTags
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('NFT data submitted:', formData);
        // Here you would typically send the data to your backend
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Create {nftType} NFT</h2>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">NFT Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="description" name="description" rows={3} value={formData.description} onChange={handleChange} required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <ImageUpload
                label="NFT Image"
                imageSize="Recommended: 350x350px"
                onImageUpload={handleImageUpload}
                previewUrl={formData.image ? URL.createObjectURL(formData.image) : null}
            />

            <UrlInput
                name="externalUrl"
                label="External URL"
                value={formData.externalUrl}
                onChange={handleChange}
            />

            <TagInput
                tags={formData.tags}
                onChange={handleTagsChange}
                label="Tags"
            />

            {/* Add more fields specific to the NFT type here */}

            <div>
                <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create NFT
                </button>
            </div>
        </form>
    );
};

export default NFTFactory;