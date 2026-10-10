import Image from "next/image";

type Props = { name: string; bio: string; photo: string };

export default function ProfileHeader({ name, bio, photo }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={photo}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
      />
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
