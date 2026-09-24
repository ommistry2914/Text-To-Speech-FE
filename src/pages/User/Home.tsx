import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateSpeechApi } from "@/service/voiceGeneration.service";
import { VOICES, PITCHES, SPEEDS } from "../../data/constants";
import type { Voice, Pitch, Speed } from "../../types/voice.types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Play,
  Download,
  Loader2,
  Volume2,
  Sparkles,
  AudioLines,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SettingPill: React.FC<SettingPillProps> = ({
  label,
  selected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
      selected
        ? "bg-primary text-primary-foreground border-primary shadow-md"
        : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
    )}
  >
    {label}
  </button>
);

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
    onError: (err: unknown) => {
      console.error("Speech generation failed:", err);
    },
  });

  const handleGenerateSpeech = () => {
    if (!text.trim()) return;
    setAudioUrl(null);
    mutation.mutate({
      text,
      voice: selectedVoice,
      speed: selectedSpeed,
      pitch: selectedPitch,
    });
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Mic className="w-6 h-6 text-primary" />
            Voice Generator
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Transform text into natural-sounding speech
          </p>
        </div>
        <Badge
          variant="outline"
          className="text-primary border-primary/30 bg-primary/5 hidden sm:flex items-center gap-1.5"
        >
          <AudioLines className="w-3.5 h-3.5" />
          AI Powered
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Controls Panel */}
        <div className="lg:col-span-3 space-y-5">
          {/* Text Input */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-foreground">
                Your Text
              </label>
              <span className="text-xs text-muted-foreground">
                {wordCount} words · {charCount} chars
              </span>
            </div>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text in English or Hindi..."
              className="min-h-[160px] bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary resize-y text-sm leading-relaxed rounded-xl"
            />
          </div>

          {/* Voice Selection */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Choose Voice
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {VOICES.map((voice) => (
                <button
                  key={voice.name}
                  onClick={() => setSelectedVoice(voice)}
                  className={cn(
                    "p-3 text-center rounded-xl border text-sm font-medium transition-all duration-200",
                    selectedVoice.name === voice.name
                      ? "bg-primary/10 border-primary/40 text-primary font-semibold shadow-sm"
                      : "bg-background border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  {voice.name}
                </button>
              ))}
            </div>
          </div>

          {/* Speed & Pitch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Speed
              </h3>
              <div className="flex flex-wrap gap-2">
                {SPEEDS.map((speed) => (
                  <SettingPill
                    key={speed.label}
                    label={speed.label}
                    selected={selectedSpeed.value === speed.value}
                    onClick={() => setSelectedSpeed(speed)}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Pitch
              </h3>
              <div className="flex flex-wrap gap-2">
                {PITCHES.map((pitch) => (
                  <SettingPill
                    key={pitch.label}
                    label={pitch.label}
                    selected={selectedPitch.value === pitch.value}
                    onClick={() => setSelectedPitch(pitch)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Output Card */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm min-h-[280px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-primary" />
                Audio Output
              </h3>
              {audioUrl && (
                <Badge
                  variant="outline"
                  className="text-green-500 border-green-500/30 bg-green-500/5 text-xs"
                >
                  Ready
                </Badge>
              )}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              {mutation.isPending ? (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                    <Loader2 className="w-7 h-7 text-primary animate-spin" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Generating your audio...
                  </p>
                </div>
              ) : audioUrl ? (
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mx-auto">
                    <Play className="w-7 h-7 text-primary fill-primary" />
                  </div>
                  <audio
                    controls
                    src={audioUrl}
                    className="w-full rounded-xl"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center mx-auto">
                    <Mic className="w-7 h-7 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your generated audio will appear here
                  </p>
                </div>
              )}
            </div>

            {mutation.isError && (
              <div className="mt-3 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-2.5">
                <p className="text-sm text-destructive text-center">
                  Failed to generate speech. Please try again.
                </p>
              </div>
            )}
          </div>

          {/* Download Button */}
          {audioUrl && (
            <a
              href={audioUrl}
              download="janshoai_speech.wav"
              className="flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
            >
              <Download className="w-4 h-4" />
              Download WAV
            </a>
          )}

          {/* Generate Button */}
          <Button
            onClick={handleGenerateSpeech}
            disabled={mutation.isPending || !text.trim()}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold text-base rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 w-4 h-4" />
                Generate Speech
              </>
            )}
          </Button>

          {/* Tips card */}
          <div className="rounded-2xl border border-border bg-muted/30 p-4 text-xs text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground text-xs">💡 Tips</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Add punctuation for natural pauses</li>
              <li>Hindi & English text both supported</li>
              <li>Shorter text = faster generation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
