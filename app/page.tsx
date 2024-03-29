'use client';
import { useChat } from 'ai/react';
import { TextField } from '@radix-ui/themes';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className='px-5 py-10 flex flex-col grow relative'>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          <span className={m.role === 'user' ? 'text-cyan-500' : 'text-pink-500'}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
          </span>
          {m.content}
        </div>
      ))}
 
      <form 
        onSubmit={handleSubmit}
        className='absolute bottom-10 left-5 right-5'
      >
      <TextField.Root>
        <TextField.Input 
          placeholder="Ask anything..." 
          value={input}
          onChange={handleInputChange}
        />
      </TextField.Root>
      </form>
    </div>
  );
}