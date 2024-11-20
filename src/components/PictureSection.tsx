import React from "react";

interface PictureSectionProps {
  name: string;
  description: string;
  image: string;
}

const PictureSection: React.FC<PictureSectionProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="w-full lg:w-1/3 border border-gray-300 rounded-md shadow-md relative">
      <div className="relative aspect-[2/3] h-full">
        <img
          src={image}
          alt={name}
          className="inset-0 w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-4 left-4 text-white max-w-[70%]">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
