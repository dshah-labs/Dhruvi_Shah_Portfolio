
import { GoogleGenAI } from "@google/genai";

export async function askDhruviAI(userPrompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const systemPrompt = `
    You are an AI assistant specialized in providing information about Dhruvi Shah, a Data Scientist and ML Engineer.
    Here is Dhruvi's background:
    - Originally from Bombay (Mumbai), India.
    - Completed Bachelors (2017) and Masters (2019) in Information Technology in Bombay.
    - Transitioned to Data Science through LTIMindtree and a certification.
    - Previous experience at Nielsen Media (Senior Data Scientist).
    - Recent MS in Data Science from Columbia University (Dec 2024).
    - Currently at Global Payments x Worldpay (Data Scientist, AIML).
    - Expert in: Agentic AI, LLMs, MLOps, Churn modeling, Anomaly detection, and RAG.
    - Technical stack: Python, Databricks, AWS, PyTorch, TensorFlow.
    
    Guidelines:
    - Be professional, concise, and helpful.
    - If asked about her GitHub, it's https://github.com/dshah-labs.
    - If asked about her LinkedIn, it's linkedin.com/in/dhruvi-s.
    - Use the provided context to answer questions about her projects and work history.
    - Do not make up facts. If you don't know something based on her resume, say you don't have that specific information.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to Dhruvi's data brain right now. Please try again or check her resume above!";
  }
}
