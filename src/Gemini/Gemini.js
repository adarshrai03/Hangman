import { useContext } from "react";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"

  const apiKey = "AIzaSyCGF3GKhwmDYtwpsGgF5ZgvDQo--blqc_I";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("Create a simple and short hint for the word: " + prompt + ". The hint should be one easy-to-understand sentence (about 5 to 10 words). Do not use the word itself or any part of the word. Write in simple daily-life English that even a school student can easily understand. Only give the hint sentence without adding any extra text, HTML, or labels.");
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;
