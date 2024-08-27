import React from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Tag } from 'lucide-react';

interface TagInputProps {
    tags: string[];
    onChange: (tags: string[]) => void;
    label: string;
}

const TagInput: React.FC<TagInputProps> = ({ tags, onChange, label }) => {
    const handleChange = (newTags: string[]) => {
        onChange(newTags);
    };

    const renderTag = (props: any) => {
        const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
        return (
            <span key={key} {...other} className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 mr-2 mb-2">
                {getTagDisplayValue(tag)}
                {!disabled &&
                    <button type="button" className={classNameRemove} onClick={(e) => onRemove(key)}>
                        <span className="ml-1">&times;</span>
                    </button>
                }
            </span>
        );
    };

    return (
        <div>
            <label htmlFor="tags" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Tag className="h-5 w-5 text-gray-400 mr-2" />
                {label}
            </label>
            <TagsInput
                value={tags}
                onChange={handleChange}
                renderTag={renderTag}
                inputProps={{
                    id: 'tags',
                    className: 'react-tagsinput-input',
                    placeholder: 'Add a tag...'
                }}
                className="react-tagsinput focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export default TagInput;