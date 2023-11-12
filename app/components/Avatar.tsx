"use client";

import Image from "next/image";

interface ImageProps {
  src?: string | null |undefined;
}

const Avatar: React.FC<ImageProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
    />
  );
};

export default Avatar;
