import React from 'react';
import { motion } from 'framer-motion';

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 12,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
}) => {
  return (
    <div
      className="relative"
      style={{ height: containerHeight, width: containerWidth }}
    >
      <motion.div
        className="relative overflow-hidden"
        whileHover={{
          rotate: [0, rotateAmplitude, -rotateAmplitude, rotateAmplitude, 0],
          scale: scaleOnHover,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full"
          style={{ height: imageHeight, width: imageWidth }}
        />
      </motion.div>

      {displayOverlayContent && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{ opacity: showTooltip ? 1 : 0 }}
        >
          {overlayContent}
        </div>
      )}

      {showMobileWarning && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white p-4 bg-black bg-opacity-50">
          This feature is not available on mobile.
        </div>
      )}
    </div>
  );
};

export default TiltedCard;
