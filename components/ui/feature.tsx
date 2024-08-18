// components/ui/feature.tsx
import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  headline: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, headline, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md">
      <div className="text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{headline}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Feature;
