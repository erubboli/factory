import React from 'react';
import { Switch } from '@headlessui/react';

interface ToggleInputProps {
    name: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    explanation: string;
}

const ToggleInput: React.FC<ToggleInputProps> = ({ name, label, checked, onChange, explanation }) => {
    return (
        <Switch.Group as="div" className="flex items-center justify-between">
            <span className="flex-grow flex flex-col">
                <Switch.Label as="span" className="text-sm font-medium text-gray-900" passive>
                    {label}
                </Switch.Label>
                <Switch.Description as="span" className="text-sm text-gray-500">
                    {explanation}
                </Switch.Description>
            </span>
            <Switch
                checked={checked}
                onChange={onChange}
                className={`${checked ? 'bg-indigo-600' : 'bg-gray-200'
                    } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
                <span
                    aria-hidden="true"
                    className={`${checked ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>
        </Switch.Group>
    );
};

export default ToggleInput;