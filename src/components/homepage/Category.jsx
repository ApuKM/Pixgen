
import { categories } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const categoryData = await categories();
//   console.log(categoryData);
  return (
    <div className="mb-5 space-x-3">
      {categoryData.map((c) => (
        <Link key={c.id} href={`?c=${c.slug}`}>
          <Button variant="outline" size="sm">
            {c.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
