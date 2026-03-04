"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

const ImageWithFallback = ({
  alt,
  fallbackClassName,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-primary to-accent flex items-center justify-center ${fallbackClassName ?? (props.fill ? "absolute inset-0" : "")}`}
      >
        <span className="text-white/50 text-sm px-4 text-center">{alt}</span>
      </div>
    );
  }

  return <Image alt={alt} onError={() => setError(true)} {...props} />;
};

export default ImageWithFallback;
