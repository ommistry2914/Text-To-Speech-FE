import api from "../api/index";
import type { Voice, Speed, Pitch } from "@/types/voice.types";

/**
 * Calls backend API to generate speech using Gemini TTS.
 * Backend returns a WAV audio file as blob.
 */
export const generateSpeechApi = async ({
  text,
  voice,
  speed,
  pitch,
}: {
  text: string;
  voice: Voice;
  speed: Speed;
  pitch: Pitch;
}): Promise<Blob> => {
  console.log("in frontend")
  const response = await api.axios.post(
    "/voiceGeneration/generateVoice",
    { text, voice, speed, pitch },
    { responseType: "blob" } // important: we expect binary data
  );

  return response.data; // blob returned by backend
};
