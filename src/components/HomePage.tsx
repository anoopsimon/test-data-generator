'use client';

import { dataCategories } from '@/lib/categories';
import CategoryCard from '@/components/CategoryCard';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dataCategories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          description={category.description}
          Icon={category.icon}
          onClick={() => router.push(category.route)}
        />
      ))}
    </div>
  );
}
