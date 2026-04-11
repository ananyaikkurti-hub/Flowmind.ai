export async function generateAI(prompt: string) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct:free",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  console.log("OpenRouter response:", JSON.stringify(data));
  
  if (!data.choices || !data.choices[0]) {
    return "Error from OpenRouter: " + JSON.stringify(data);
  }
  
  return data.choices[0].message.content;
}