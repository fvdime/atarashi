import { Collection } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/collections`

const getCollections = async (id: string): Promise<Collection[]> => {
  const res = await fetch(url)

  return res.json()
}

export default getCollections;