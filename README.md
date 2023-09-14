# Azure OpenAI Playground for Bun

This is an example app using [Bun](https://bun.sh) and Azure OpenAI to stream chat completions.

## Installation

```bash
git clone https://github.com/mpodwysocki/openai-bun.git

cd openai-bun
bun install
```

You will need to create a `.env` file with the credentials such as what is in the `sample.env` file for the Express port as well as the Azure OpenAI Credentials.

```bash
# Azure OpenAI
AZURE_OPENAI_API_KEY=
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_DEPLOYMENT=
```

To run the sample, use the following:

```bash
bun run src/index.mts
```

## LICENSE

MIT
