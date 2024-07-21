import { ProfileConfig } from '@/components/profileConfig/profileConfig';

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <ProfileConfig />
    </div>
  );
}
