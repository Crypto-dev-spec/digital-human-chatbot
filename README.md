<div align="center">
  <video width="100%" controls>
    <source src="resources/VirtualHuman.mp4" type="video/mp4">
</video>
</div>
## Virtual Human Chatbot

This project is a virtual human chatbot that can talk and listen to you using ASR(Automatic Speech Recognition) techonology. 
It uses OpenAI's GPT-3 to generate responses, OpenAI's Whisper to transcript the audio, Eleven Labs to generate voice and Rhubarb Lip Sync to generate the lip sync.

The brain of this project is based on Open AI, where the avatar characteristics and the shape of the response are
defined in the following technologies:

This avatar include the following technologies;

* Use the Speech Recognition and ChatGPT API for interacting with the OpenAI API: OpenAI's "davinci" model

* Integrates with Eleven Labs and Rhubarb Lip-Sync to generate the client integration interface

<div align="center">
  <img src="resources/architecture.drawio.svg" alt="System Architecture" width="100%">
</div>

## Getting Started

### Requirements
Before using this system, ensure you have the following prerequisites:

1. **OpenAI Subscription:** You must have an active subscription with OpenAI. If you don't have one, you can create it [here](https://openai.com/product).
2. **Eleven Labs Subscription:** You need to have a subscription with Eleven Labs. If you don't have one yet, you can sign up [here](https://elevenlabs.io/).
3. **Rhubarb Lip-Sync:** Download the latest version of Rhubarb Lip-Sync compatible with your operating system from the official [Rhubarb Lip-Sync repository](https://github.com/DanielSWolf/rhubarb-lip-sync/releases). Once downloaded, create a `/bin` directory in the backend and move all the contents of the unzipped `rhubarb-lip-sync.zip` into it.

### Installation

1. Clone this repository:
  
```bash
git clone https://github.com/Crypto-dev-spec/digital-human-chatbot.git
```

2. Navigate to the project directory:

```bash
cd digital-human-chatbot
```

3. Install dependencies for monorepo:

First run npm install or yarn -g to install yarn globally (if you haven't already).

Then run:

```bash
npm i or yarn

```

4. Run the development system:

```bash
npm run start or yarn start
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

5. Create a .env file in the root `/apps/backend/` of the project and add the following environment variables:
## How it Operates
The system operates through two primary workflows, depending on whether the user input is in text or audio form:

### Workflow with Text Input:
1. **User Input:** The user enters text.
2. **Text Processing:** The text is forwarded to the OpenAI GPT API for processing.
3. **Audio Generation:** The response from GPT is relayed to the Eleven Labs TTS API to generate audio.
4. **Viseme Generation:** The audio is then sent to Rhubarb Lip Sync to produce viseme metadata.
5. **Synchronization:** The visemes are utilized to synchronize the digital human's lips with the audio.

### Workflow with Audio Input:
1. **User Input:** The user submits audio.
2. **Speech-to-Text Conversion:** The audio is transmitted to the OpenAI Whisper API to convert it into text.
3. **Text Processing:** The converted text is sent to the OpenAI GPT API for further processing.
4. **Audio Generation:** The output from GPT is sent to the Eleven Labs TTS API to produce audio.
5. **Viseme Generation:** The audio is then routed to Rhubarb Lip Sync to generate viseme metadata.
6. **Synchronization:** The visemes are employed to synchronize the digital human's lips with the audio.


```bash
# OPENAI
OPENAI_MODEL=<YOUR_GPT_MODEL>
OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>

# Elevenlabs
ELEVEN_LABS_API_KEY=<YOUR_ELEVEN_LABS_API_KEY>
ELVEN_LABS_VOICE_ID=<YOUR_ELEVEN_LABS_VOICE_ID>
ELEVEN_LABS_MODEL_ID=<YOUR_ELEVEN_LABS_MODEL_ID>
```

## References
* How ChatGPT, Bard and other LLMs are signaling an evolution for AI digital humans: https://www.digitalhumans.com/blog/how-chatgpt-bard-and-other-llms-are-signaling-an-evolution-for-ai-digital-humans
* UnneQ Digital Humans: https://www.digitalhumans.com/
* LLMs: Building a Less Artificial and More Intelligent AI Human: https://www.linkedin.com/pulse/llms-building-less-artificial-more-intelligent-ai-human/
* Building a digital person design best practices: https://fcatalyst.com/blog/aug2023/building-a-digital-person-design-best-practices
* Navigating the Era of Digital Humans": An Initial Exploration of a Future Concept: https://www.linkedin.com/pulse/navigating-era-digital-humans-initial-exploration-future-koelmel-eqrje/ 
* How to Setup Tailwind CSS in React JS with VS Code: https://dev.to/david_bilsonn/how-to-setup-tailwind-css-in-react-js-with-vs-code-59p4 
* Ex-Human: https://exh.ai/#home
* Allosaurus: https://github.com/xinjli/allosaurus 
* Rhubarb Lip-Sync: https://github.com/DanielSWolf/rhubarb-lip-sync
* Ready Player me - Oculus OVR LipSync: https://docs.readyplayer.me/ready-player-me/api-reference/avatars/morph-targets/oculus-ovr-libsync
* Ready Player me - Apple Arkit: https://docs.readyplayer.me/ready-player-me/api-reference/avatars/morph-targets/apple-arkit 
* Mixamo - https://www.mixamo.com/,
* GLFT -> React Three Fiber - https://gltf.pmnd.rs/)
