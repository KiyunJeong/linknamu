import Image from "next/image";

type Props = { name: string; bio: string; photo: string };

export default function ProfileHeader({ name, bio, photo }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={photo}
        alt={`${name} 프로필 사진`}
        width={150}
        height={150}
        priority
        className="h-[150px] w-[150px] rounded-full object-cover"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
