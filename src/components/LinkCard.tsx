type Props = { id: string; title: string };

export default function LinkCard({ id, title }: Props) {
  return (
    <a
      href={`/go/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/60 bg-white/40 px-6 py-4 text-center font-medium text-foreground shadow-[0_4px_24px_rgba(190,120,80,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_8px_28px_rgba(190,120,80,0.16)]"
    >
      {title}
    </a>
  );
}
