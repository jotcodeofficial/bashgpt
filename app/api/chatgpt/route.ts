import { ChatGPTAPI } from 'chatgpt'
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY!
  })

  const res = await api.sendMessage('hello world');

  return NextResponse.json({"response": res});

  
}
