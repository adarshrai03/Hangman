import { useContext } from "react";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"

  const apiKey = "AIzaSyAHONoa_5s4naXH9ZfUutP_nsMjyHTCJak";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
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
  
    const result = await chatSession.sendMessage("what is the meaning of "+ prompt + "in one small sentence in 4 to 5 words without using the giving word in sentence , (give us a meaningfull and easy hint so that the people gussed the word easily , give the hint in based on daily used in easy and understandble language and also don't use hint word , just give me only core sentence without any extra suggestion word like hint or any other html tags )");
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;