'use client';

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import getQueryClient from '@/utils/getQueryClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function ReactQueryProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
