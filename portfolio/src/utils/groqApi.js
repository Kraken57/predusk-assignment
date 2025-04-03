export async function getChatResponse(userMessage) {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
  
      const data = await response.json();
      return data.reply || "Error fetching response.";
    } catch (error) {
      console.error("Chat API Error:", error);
      return "Error connecting to server.";
    }
  }
  