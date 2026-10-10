import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-10 sm:py-16">
      <ProfileHeader {...profile} />
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.id}>
            <LinkCard id={l.id} title={l.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}
