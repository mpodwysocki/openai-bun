import { AzureKeyCredential } from "@azure/openai";
import { createOpenAI, listChatCompletions } from "@azure/openai/api";

const endpoint = Bun.env["AZURE_OPENAI_ENDPOINT"]!;
const azureApiKey = Bun.env["AZURE_OPENAI_API_KEY"]!;
const deploymentId = Bun.env["AZURE_OPENAI_DEPLOYMENT"]!;

const messages = [
  {
    role: "system",
    content: "You are a helpful assistant. You will talk like a pirate.",
  },
  { role: "user", content: "Can you help me?" },
  {
    role: "assistant",
    content: "Arrrr! Of course, me hearty! What can I do for ye?",
  },
  { role: "user", content: "What's the best way to train a parrot?" },
];

async function main() {
  const context = createOpenAI(endpoint, new AzureKeyCredential(azureApiKey));
  const events = listChatCompletions(context, messages, deploymentId, {
    maxTokens: 128,
  });

  for await (const event of events) {
    for (const choice of event.choices) {
      console.log(choice.delta?.content);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
