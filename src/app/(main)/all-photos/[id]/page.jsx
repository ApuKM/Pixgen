import { photoData } from "@/lib/data";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const PhotoDetails = async ({ params }) => {
  const photos = await photoData();
  const { id } = await params;
  const photo = photos.find((p) => p.id === Number(id));
  return (
    <div className="grid grid-cols-12 gap-8 mt-15">
      {/* Left Column: Card */}
      <Card className="relative col-span-12 h-[250px] sm:h-[300px] md:col-span-8 md:h-[550px]">
        <Image
          alt="NEO Home Robot"
          aria-hidden="true"
          width={800}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
          src={photo.imageUrl}
        />
        <Card.Footer className="z-10 mt-auto flex items-end justify-between">
          <div>
            <div className="text-base font-medium text-black sm:text-lg">
              {photo.category}
            </div>
            <div className="text-xs font-medium text-black sm:text-sm">
              {photo.model}
            </div>
          </div>
          <div className="text-xs font-medium text-black sm:text-sm flex items-center gap-2">
            {photo.tags.map((tag, ind) => (
              <span key={ind}>{tag}</span>
            ))}
          </div>
        </Card.Footer>
      </Card>
      {/* Right Column: Cards Stack */}
      <div className="col-span-12 flex flex-col gap-2 md:col-span-4 md:justify-between md:gap-0 md:py-2">
        {/* 1 */}
        <Card className="flex flex-row gap-3 p-1" variant="transparent">
          <div className="flex flex-1 flex-col justify-center gap-1">
            <Card.Title className="text-sm">{photo.title}</Card.Title>
            <Card.Description className="text-xs">
              {photo.prompt}
            </Card.Description>
          </div>
        </Card>
        {/* 2 */}
        <Card className="flex flex-row gap-3 p-1" variant="transparent">
          <div className="flex flex-1 flex-col justify-center gap-1">
            <div className="flex items-center gap-2">
              <p>
                <FaHeart />
              </p>
              <p>{photo.likes}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <BiDownload />
              </p>
              <p>{photo.downloads}</p>
            </div>
          </div>
        </Card>
        {/* 3 */}
        <Card className="flex flex-row gap-3 p-1" variant="transparent">
          <div className="flex flex-1 flex-col justify-center gap-1">
            <Card.Title className="text-sm">{photo.resolution}</Card.Title>
            <Card.Description className="text-xs">
              {photo.createdAt.split("T")[0]}
            </Card.Description>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PhotoDetails;
