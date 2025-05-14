import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  throw new Error("something broke...");
  // return await fetch(`${API_URL}/${id}/videos`).then((response) =>
  //   response.json()
  // );
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
}
