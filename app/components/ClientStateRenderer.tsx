'use client';
import { State } from '@/utils/api';
import { useState } from 'react';

export default function ClientStateRenderer({ data }: { data: State[] }) {
  const [state, setState] = useState(data);
  const [updateValue, setUpdateValue] = useState('');

  async function updateName(id: number) {
    const newUpdateValue = new Date().getTime().toString();
    setUpdateValue(newUpdateValue);
    await fetch('/api/updateName', {
      method: 'POST',
      body: JSON.stringify({ id, name: newUpdateValue })
    });
    await updateState();
  }

  async function updateState() {
    const data = await fetch('/api/getState');
    const { data: state } = await data.json();

    setState(state as State[]);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Client State Renderer</h1>
      <ul>
        {state.map(({ id, name }) => (
          <li key={id}>
            <p>Value recieved:{name}</p>
            <p>UpdateValue:{updateValue} </p>
            <button onClick={() => updateName(id)}> update name </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
