import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log("images", images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <div>Hello (gallery in progress)</div>
    </main>
  );
}
