} catch (error) {
    console.error("Gemini error:", error);
    return Response.json({ result: "Error: " + (error as Error).message });
  }