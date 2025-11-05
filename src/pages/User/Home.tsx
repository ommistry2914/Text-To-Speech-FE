import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateSpeechApi } from "@/service/voiceGeneration.service";
import { VOICES, PITCHES, SPEEDS } from "../../data/constants";
import type { Voice, Pitch, Speed } from "../../types/voice.types";

const Home: React.FC = () => {
  const [text, setText] = useState<string>(
    "Hello! I can speak English and हिन्दी. Try me!"
  );
  const [selectedVoice, setSelectedVoice] = useState<Voice>(VOICES[0]);
  const [selectedSpeed, setSelectedSpeed] = useState<Speed>(SPEEDS[1]);
  const [selectedPitch, setSelectedPitch] = useState<Pitch>(PITCHES[1]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: generateSpeechApi,
    onSuccess: (data) => {
      const url = URL.createObjectURL(data);
      setAudioUrl(url);
    },
    onError: (err: any) => {
      console.error("Speech generation failed:", err);
      alert("Failed to generate speech.");
    },
  });

  const handleGenerateSpeech = () => {
    if (!text.trim()) return alert("Please enter some text.");
    setAudioUrl(null);
    mutation.mutate({ text, voice: selectedVoice, speed: selectedSpeed, pitch: selectedPitch });
  };

  const SettingPill: React.FC<{
    label: string;
    value: string;
    selected: boolean;
    onClick: () => void;
  }> = ({ label, value, selected, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-medium focus:ring-brand-cyan ${
        selected
          ? "bg-brand-cyan text-white shadow-lg"
          : "bg-brand-light text-gray-300 hover:bg-gray-600"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
          AI Voice Generator
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Transform text into lifelike speech with customizable voices.
        </p>
      </header>

      <main className="w-full max-w-4xl bg-brand-medium rounded-2xl shadow-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel: Controls */}
          <div className="flex flex-col space-y-6">
            <div>
              <label
                htmlFor="text-input"
                className="block text-lg font-semibold mb-2 text-gray-300"
              >
                Your Text
              </label>
              <textarea
                id="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text in English or Hindi..."
                className="w-full h-48 p-4 bg-brand-dark border-2 border-brand-light rounded-lg focus:ring-brand-cyan focus:border-brand-cyan transition duration-200 resize-none"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Choose a Voice
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {VOICES.map((voice) => (
                  <button
                    key={voice.name}
                    onClick={() => setSelectedVoice(voice)}
                    className={`p-3 text-center rounded-lg border-2 transition-all duration-200 ease-in-out ${
                      selectedVoice.name === voice.name
                        ? "bg-brand-cyan border-brand-cyan text-white font-bold shadow-lg"
                        : "bg-brand-light border-brand-light text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {voice.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Speed
              </h3>
              <div className="flex space-x-2">
                {SPEEDS.map((speed) => (
                  <SettingPill
                    key={speed.label}
                    label={speed.label}
                    value={speed.value}
                    selected={selectedSpeed.value === speed.value}
                    onClick={() => setSelectedSpeed(speed)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">
                Pitch
              </h3>
              <div className="flex space-x-2">
                {PITCHES.map((pitch) => (
                  <SettingPill
                    key={pitch.label}
                    label={pitch.label}
                    value={pitch.value}
                    selected={selectedPitch.value === pitch.value}
                    onClick={() => setSelectedPitch(pitch)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Output */}
          <div className="flex flex-col justify-between space-y-6 bg-brand-dark p-6 rounded-lg">
            <div className="flex-grow flex flex-col items-center justify-center min-h-[200px]">
              {mutation.isPending ? (
                <div className="text-center">
                  <p className="mt-4 text-gray-400">Generating your audio...</p>
                </div>
              ) : audioUrl ? (
                <div className="w-full flex flex-col items-center space-y-4">
                  <h3 className="text-lg font-semibold text-gray-300">
                    Your Speech is Ready!
                  </h3>
                  <audio controls src={audioUrl} className="w-full rounded-full">
                    Your browser does not support the audio element.
                  </audio>
                  <a
                    href={audioUrl}
                    download="ai_speech.wav"
                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors duration-200 shadow-lg"
                  >
                    Download WAV
                  </a>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p className="mt-2">Your generated audio will appear here.</p>
                </div>
              )}
            </div>

            {mutation.isError && (
              <p className="text-red-400 text-center">
                Failed to generate speech.
              </p>
            )}

            <button
              onClick={handleGenerateSpeech}
              disabled={mutation.isPending}
              className="w-full flex items-center justify-center text-lg font-bold px-6 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-xl"
            >
              {mutation.isPending ? "Generating..." : "Generate Speech"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
