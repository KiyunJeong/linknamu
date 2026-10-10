import { getClient } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

async function collection() {
  const client = await getClient();
  return client?.db(process.env.MONGODB_DB ?? "linknamu").collection<ClickDoc>("clicks") ?? null;
}

export async function incrementClick(linkId: string) {
  const col = await collection();
  await col?.updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
}

export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const col = await collection();
    if (!col) return {};
    const docs = await col.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch {
    return {};
  }
}
