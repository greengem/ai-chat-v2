'use client';
import { useChat } from 'ai/react';
import { TextField } from '@radix-ui/themes';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className='px-5 py-10'>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
 
      <form 
        onSubmit={handleSubmit}
        className='absolute bottom-10 w-full'
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