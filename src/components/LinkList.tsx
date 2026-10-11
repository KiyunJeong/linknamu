"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Props = { links: { id: string; title: string }[] };

export default function LinkList({ links }: Props) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : {}))
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {links.map((l) => (
        <li key={l.id}>
          <LinkCard id={l.id} title={l.title} count={counts[l.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
