export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json({ result: "Please enter meeting notes." });
    }

    const summary = `
Summary:
The team discussed project progress.

Tasks:
• Ananya – UI Design
• Rahul – Backend Integration

Deadline:
Next Friday
`;

    return Response.json({ result: summary });

  } catch (error) {
    return Response.json({ result: "Server error." });
  }
}