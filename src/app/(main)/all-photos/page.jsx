import Category from "@/components/homepage/Category";
import PhotoCard from "@/components/homepage/PhotoCard";
import { photoData } from "@/lib/data";
import React from "react";

const AllPhotos = async ({ searchParams }) => {
  const { c } = await searchParams;
  const photos = await photoData();
  const filteredPhotos = c
    ? photos.filter((photo) => photo.category.toLowerCase() === c)
    : photos;
  return (
    <div className="mt-15">
      <h1 className="text-2xl font-bold mb-5">All Photos</h1>
      <Category />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
