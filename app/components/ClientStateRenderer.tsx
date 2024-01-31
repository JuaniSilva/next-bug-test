'use client';
import { State } from '@/utils/api';
import getQueryClient from '@/utils/getQueryClient';
import { useQuery } from '@tanstack/react-query';

export default function ClientStateRenderer({ data }: { data: State[] }) {
  const queryClient = getQueryClient();

  const { data: state } = useQuery({
    queryKey: ['state'],
    queryFn: () => getState(),
    initialData: data
  });

  async function updateName(id: number) {
    const newUpdateValue = new Date().getTime().toString();

    await fetch('/api/updateName', {
      method: 'POST',
      body: JSON.stringify({ id, name: newUpdateValue })
    });

    await queryClient.invalidateQueries({ queryKey: ['state'] });
  }

  async function getState() {
    console.log('estoy aca?');
    const data = await fetch('/api/getState');
    const { data: state } = await data.json();

    return state as State[];
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Client State Renderer</h1>
      <ul>
        {state.map(({ id, name }) => (
          <li key={id}>
            <p>Value recieved:{name}</p>
            <button onClick={() => updateName(id)}> update name </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
