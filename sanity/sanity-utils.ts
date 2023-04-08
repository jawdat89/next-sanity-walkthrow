import { createClient, groq } from "next-sanity";

export async function getProjects() {
  try {
    const client = createClient({
      projectId: "2h33ujop",
      dataset: "production",
      apiVersion: "2023-04-09",
    });

    return await client.fetch(
      groq`*[_type = "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    );
  } catch (err) {
    throw err;
  }
}
