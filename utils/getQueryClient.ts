import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus:
            (process.env.NEXT_PUBLIC_REFETCH_ON_FOCUS &&
              process.env.NEXT_PUBLIC_REFETCH_ON_FOCUS === 'true') ||
            false
        }
      }
    })
);
export default getQueryClient;
