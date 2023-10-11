import { Collection } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/collections`

const getCollection = async (id: string): Promise<Collection> => {
  const res = await fetch(`${url}/${id}`)

  return res.json()
}

export default getCollection;