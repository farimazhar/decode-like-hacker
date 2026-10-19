import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({ name: "decode-like-hacker", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "decode_feature",
    description: "Decode how any app feature is built - Like a hacker would analyze",
    inputSchema: {
      type: "object",
      properties: {
        app: { type: "string", description: "App name e.g. YouTube, Instagram" },
        feature: { type: "string", description: "Feature e.g. download button, stories" }
      },
      required: ["app", "feature"]
    }
  }]
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { app, feature } = req.params.arguments as any;
  return {
    content: [{
      type: "text",
      text: `
🔍 DECODE LIKE HACKER REPORT
App: ${app}
Feature: ${feature}

[SEEN] Public code / docs analysis
[INFERRED] Probable stack & logic
[UNKNOWN] Server-side secrets (not visible)

This is an educational analysis, inspired by morluto/rea
Built for: decode-like-hacker
      `.trim()
    }]
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("decode-like-hacker ONLINE 🟢");
