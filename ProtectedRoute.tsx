"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from './AuthContext';
import { useEffect, ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!currentUser && pathname !== '/login' && pathname !== '/register') {
      router.push('/login');
    }
  }, [currentUser, pathname, router]);

  if (currentUser || pathname === '/login' || pathname === '/register') {
    return <>{children}</>;
  }

  return null;
};

export default ProtectedRoute;
