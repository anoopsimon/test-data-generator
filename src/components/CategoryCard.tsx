'use client';

import { ComponentType } from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  onClickAction: () => void;
}

export default function CategoryCard({
  title,
  description,
  Icon,
  onClickAction,
}: CategoryCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClickAction}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
