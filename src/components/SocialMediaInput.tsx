import React from 'react';
import { Twitter, Facebook, Instagram, Twitch, Youtube, Linkedin } from 'lucide-react';

interface SocialMediaInputProps {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: 'twitter' | 'facebook' | 'instagram' | 'twitch' | 'youtube' | 'linkedin';
}

const SocialMediaInput: React.FC<SocialMediaInputProps> = ({ name, label, value, onChange, icon }) => {
    const IconComponent = {
        twitter: Twitter,
        facebook: Facebook,
        instagram: Instagram,
        twitch: Twitch,
        youtube: Youtube,
        linkedin: Linkedin
    }[icon];

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconComponent className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="url"
                    name={name}
                    id={name}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder={`https://${icon}.com/yourusername`}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default SocialMediaInput;