import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const bodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["function", "system", "user", "assistant", "data", "tool"]),
      content: z.string(),
    }),
  ),
});

export async function POST(req: Request) {
  const body = bodySchema.parse(await req.json());

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages: convertToCoreMessages(body.messages),
  });

  return result.toDataStreamResponse();
}
