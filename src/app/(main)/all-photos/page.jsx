import PhotoCard from "@/components/homepage/PhotoCard";
import { photoData } from "@/lib/data";
import React from "react";

const AllPhotos = async() => {
    const photos = await photoData();
  return (
    <div className="mt-15">
      <h1 className="text-2xl font-bold mb-5">All Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
