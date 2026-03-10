import { Icon } from '@iconify/react';

export default function Skill({ name, icon }) {
    return (
        <div className="flex flex-col justify-center items-center gap-1 p-3 hover:bg-gray-100/10 rounded w-full">
            <Icon icon={icon} className="text-4xl" />
            <h6 className='text-sm font-light'>{name}</h6>
        </div>
    );
}