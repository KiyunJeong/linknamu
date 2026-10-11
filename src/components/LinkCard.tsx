type Props = { id: string; title: string; count: number };

export default function LinkCard({ id, title, count }: Props) {
  return (
    <a
      href={`/go/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full rounded-3xl border border-white/60 bg-white/40 px-14 py-4 text-center font-medium text-foreground shadow-[0_4px_24px_rgba(190,120,80,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_8px_28px_rgba(190,120,80,0.16)]"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-muted">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
