import { links } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const link = links.find((l) => l.id === id);
  if (!link) return new Response("Not found", { status: 404 });

  try {
    await incrementClick(link.id);
  } catch (e) {
    console.error("click count failed", e);
  }
  return Response.redirect(link.url, 307);
}
