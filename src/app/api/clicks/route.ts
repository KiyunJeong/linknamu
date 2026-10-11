import { links } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

export async function GET() {
  const counts = await getClickCounts();
  return Response.json(
    Object.fromEntries(links.map((l) => [l.id, counts[l.id] ?? 0])),
    { headers: { "Cache-Control": "no-store" } },
  );
}
