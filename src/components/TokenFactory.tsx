import React, { useState, useCallback } from 'react';
import ImageUpload from './ImageUpload';
import SocialMediaInput from './SocialMediaInput';
import UrlInput from './UrlInput';
import ToggleInput from './ToggleInput';
import TagInput from './TagInput';



interface FormData {
  name: string;
  symbol: string;
  description: string;
  tokenIcon: File | null;
  bannerImage: File | null;
  websiteUrl: string;
  twitter: string;
  telegram: string;
  discord: string;
  totalSupply: string;
  initialSupply: string;
  tokenDistribution: string;
  whitepaper: string;
  contractAddress: string;
  tags: string[];
  thumbnailImage: string;
  projectLogo: string;
  roadmap: string;
  decimals: string;
  isFixedSupply: boolean;
  isFreezable: boolean;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  twitch: string;
}

const TokenFactory: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    symbol: '',
    description: '',
    tokenIcon: null,
    bannerImage: null,
    websiteUrl: '',
    twitter: '',
    telegram: '',
    discord: '',
    totalSupply: '',
    initialSupply: '',
    tokenDistribution: '',
    whitepaper: '',
    contractAddress: '',
    tags: [],
    thumbnailImage: '',
    projectLogo: '',
    roadmap: '',
    decimals: '',
    isFixedSupply: false,
    isFreezable: false,
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: '',
    twitch: '',
  });

  const [tokenIconPreview, setTokenIconPreview] = useState<string | null>(null);
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(null);
  const [thumbnailImagePreview, setThumbnailImagePreview] = useState<string | null>(null);
  const [projectLogoPreview, setProjectLogoPreview] = useState<string | null>(null);

  const handleImageUpload = (fieldName: 'tokenIcon' | 'bannerImage' | 'thumbnailImage' | 'projectLogo') => (file: File) => {
    setFormData(prevState => ({ ...prevState, [fieldName]: file }));
    const previewUrl = URL.createObjectURL(file);
    if (fieldName === 'tokenIcon') {
      setTokenIconPreview(previewUrl);
    } else {
      setBannerImagePreview(previewUrl);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTagsChange = (newTags: string[]) => {
    setFormData(prevState => ({
      ...prevState,
      tags: newTags
    }));
  };


  const handleToggleChange = (name: string) => (checked: boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Token Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">Token Symbol</label>
          <input type="text" id="symbol" name="symbol" value={formData.symbol} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea id="description" name="description" rows={3} value={formData.description} onChange={handleChange} required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ImageUpload
          label="Token Icon"
          imageSize="256x256px"
          onImageUpload={handleImageUpload('tokenIcon')}
          previewUrl={tokenIconPreview}
        />
        <ImageUpload
          label="Banner Image"
          imageSize="1500x500px"
          onImageUpload={handleImageUpload('bannerImage')}
          previewUrl={bannerImagePreview}
        />
      </div >

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ImageUpload
          label="Thumbnail Image"
          imageSize="256x256px"
          onImageUpload={handleImageUpload('thumbnailImage')}
          previewUrl={thumbnailImagePreview}
        />
        <ImageUpload
          label="Project Logo"
          imageSize="1500x500px"
          onImageUpload={handleImageUpload('projectLogo')}
          previewUrl={projectLogoPreview}
        />
      </div >

      <UrlInput
        name="websiteUrl"
        label="Website URL"
        value={formData.websiteUrl}
        onChange={handleChange}
        required
        placeholder="https://your-project-website.com"
      />
      <UrlInput
        name="whitepaper"
        label="Whitepaper URL"
        value={formData.whitepaper}
        onChange={handleChange}
        required
        placeholder="https://your-project-website.com/whitepaper.pdf"
      />
      <UrlInput
        name="roadmap"
        label="Roadmap URL"
        value={formData.roadmap}
        onChange={handleChange}
        required
        placeholder="https://your-project-website.com/roadmap"
      />


      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SocialMediaInput
          name="twitter"
          label="Twitter URL"
          value={formData.twitter}
          onChange={handleChange}
          icon="twitter"
        />
        <SocialMediaInput
          name="facebook"
          label="Facebook URL"
          value={formData.facebook}
          onChange={handleChange}
          icon="facebook"
        />
        <SocialMediaInput
          name="instagram"
          label="Instagram URL"
          value={formData.instagram}
          onChange={handleChange}
          icon="instagram"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SocialMediaInput
          name="youtube"
          label="YouTube URL"
          value={formData.youtube}
          onChange={handleChange}
          icon="youtube"
        />
        <SocialMediaInput
          name="linkedin"
          label="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
          icon="linkedin"
        />
        <SocialMediaInput
          name="twitch"
          label="Twitch URL"
          value={formData.twitch}
          onChange={handleChange}
          icon="twitch"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="totalSupply" className="block text-sm font-medium text-gray-700">Total Supply</label>
          <input type="number" id="totalSupply" name="totalSupply" value={formData.totalSupply} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="initialSupply" className="block text-sm font-medium text-gray-700">Initial Supply</label>
          <input type="number" id="initialSupply" name="initialSupply" value={formData.initialSupply} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="decimals" className="block text-sm font-medium text-gray-700">Decimals</label>
          <input type="number" id="decimals" name="decimals" value={formData.decimals} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
      </div>

      <div className="space-y-6">
        <ToggleInput
          name="isFixedSupply"
          label="Fixed Supply"
          checked={formData.isFixedSupply}
          onChange={handleToggleChange('isFixedSupply')}
          explanation="If enabled, the total supply of tokens cannot be changed after creation."
        />
        <ToggleInput
          name="isFreezable"
          label="Freezable"
          checked={formData.isFreezable}
          onChange={handleToggleChange('isFreezable')}
          explanation="If enabled, the token can be frozen for all users (e.g., for migration purposes)."
        />
      </div>

      <div>
        <TagInput
          tags={formData.tags}
          label="Tags"
          onChange={handleTagsChange}
        />
      </div>

      <div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Token
        </button>
      </div>
    </form >
  );
};

export default TokenFactory;