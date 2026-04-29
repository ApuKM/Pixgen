import Banner from "@/components/homepage/Banner";
import PhotoCard from "@/components/homepage/PhotoCard";
import { photoData } from "@/lib/data";

export default async function Home() {
  const photos = await photoData();
  // console.log(photos)
  return (
    <div>
      <Banner />
      <div className="mt-15">
        <h1 className="text-2xl font-bold mb-5">Top Generations</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {photos.slice(0,8).map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}

// pixgen-opal.vercel.app
