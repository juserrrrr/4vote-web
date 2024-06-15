'use client';
import { Card } from './components/card/card';

export default function Home() {
  const hashtags = '#hashtag1 #hashtag2';
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card
        title="Título do Card"
        description="Descrição do card."
        variant="ENQUETE"
        hashtags={hashtags}
        imageUrl="https://picsum.photos/300/200"
      />
    </div>
  );
}
