import { generateAI } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json({ result: "Please enter meeting notes." });
    }

    const prompt = `
You are a productivity assistant. Analyze the following meeting notes and return:

1. A concise Summary
2. A list of Tasks with the person responsible
3. Any Deadlines mentioned

Meeting Notes:
${text}
`;

    const result = await generateAI(prompt);
    return Response.json({ result });

  } catch (error) {
    console.error("Gemini error:", error);
    return Response.json({ result: "Error: " + (error as Error).message });
  }
}