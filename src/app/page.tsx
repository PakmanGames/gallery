import { db } from "~/server/db";

const mockUrls = [
  "https://dr84hsp0i3.ufs.sh/f/afn1kApZqHDhLVczlpah2Z7YozFR1KmG0n8t9IjrfbNuD6Us",
  "https://dr84hsp0i3.ufs.sh/f/afn1kApZqHDhiOl3ixf81YxMDjW4lOGRZkmv0CLB3SEyuqez",
  "https://dr84hsp0i3.ufs.sh/f/afn1kApZqHDhsf7Hi0XbzFhvT6ul3DcPSJQnrtEaV82M9mKo",
  "https://dr84hsp0i3.ufs.sh/f/afn1kApZqHDhiOO8HRnf81YxMDjW4lOGRZkmv0CLB3SEyuqe",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts", posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      <div>Hello (gallery in progress)</div>
    </main>
  );
}
