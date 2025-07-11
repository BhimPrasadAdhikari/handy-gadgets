'use client';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
interface MainNavProps {
  data: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex flex-row items-center space-x-4 lg:space-x-6">
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium',
              route.active
                ? 'text-black dark:text-white'
                : 'text-gray-500'
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};
export default MainNav;
