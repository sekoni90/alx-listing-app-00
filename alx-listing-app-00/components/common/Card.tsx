import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {description && <p className="text-gray-600 mb-2">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
