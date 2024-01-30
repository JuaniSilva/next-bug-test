import { api } from '@/utils/api';
import ClientStateRenderer from './components/ClientStateRenderer';

export default async function Home() {
  const data = await api.getState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientStateRenderer data={data} />
    </main>
  );
}
