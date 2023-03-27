import { Configuration, OpenAIApi } from 'openai';
import { NextResponse } from 'next/server';
import url from 'node:url';

const model = "text-davinci-003";

const configuration = new Configuration({
  apiKey: process.env.BASHGPT_OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const prompt_template = 'Here is the shell or linux command: ';

export async function GET(request: Request) {

  const query = url.parse(request.url, true).query;

  if(query.prompt === undefined)
    return NextResponse.json({"error": "prompt is required"});

  const completion = await openai.createCompletion({
    model: model,
    prompt: prompt_template + query.prompt,
    max_tokens: 100,
    temperature: 0
  });
  
  // check if completion is valid
  if(completion.data === undefined || completion.data.choices === undefined || completion.data.choices[0] === undefined || completion.data.choices[0].text === undefined)
    return NextResponse.json({"error": "completion failed"});

  // check if completion.data.choices[0].text contains triple backticks
  if(completion.data.choices[0].text.indexOf('```') === -1)
    return NextResponse.json({"error": "completion failed"});

  let output = completion.data.choices[0].text.split('```')[1]
    .replace(/^bash\n/, '')
    .replace(/^#!.+?\n/, '')
    .replace(/\n/g, '')
  
  return NextResponse.json({ "response": output, "full": completion.data });
}