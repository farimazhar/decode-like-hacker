# decode-like-hacker# decode-like-hacker

> A powerful MCP Server to decode anything like a hacker - built for Claude Desktop.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io/)

`decode-like-hacker` is a Model Context Protocol (MCP) server that gives Claude the ability to instantly decode and analyze encoded strings, tokens, and payloads - just like a real hacker.
Ye lo full *README.md* - Bas pura copy karke GitHub pe paste kar do:
🕶️ Decode Like Hacker

> A Claude MCP server to reverse engineer and rebuild any feature like a pro hacker.

Paste any link or screenshot and get production-ready code instantly.

Features
- 🔍 **Decode:** Analyze any website or UI from link/image
- 💻 **Code:** Generates clean React / Next.js / TS code
- 🧠 **Hacker Logic:** Gives you DB schema, APIs & logic flow
- ⚡ **Claude Native:** Works directly inside Claude Desktop

Installation

**1. Clone & Build**
```bash
git clone https://github.com/farimazhar/decode-like-hacker.git
cd decode-like-hacker
npm install
npm run build
*2. Add to Claude*
Add this to your `claude_desktop_config.json`:
{
  "mcpServers": {
    "decode-like-hacker": {
      "command": "node",
      "args": ["PATH_TO_YOUR_PROJECT/dist/index.js"]
    }
  }
}
Restart Claude Desktop.
### 🚀 Features

- **Base64** decoding
- **URL / URI** decoding
- **Hex** to text conversion
- **Binary** to text conversion
- **JWT (JSON Web Token)** decoding and inspection
- **ROT13 / Caesar Cipher** decoding
- Auto-detection of encoding type

### 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/farimazhar/decode-like-hacker.git
    cd decode-like-hacker
