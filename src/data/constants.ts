
import type { Voice, Speed, Pitch } from '../types/voice.types';

export const VOICES: Voice[] = [
    { name: 'Narrator', apiVoice: 'Zephyr', promptPrefix: '' },
    { name: 'Scientist', apiVoice: 'Fenrir', promptPrefix: 'Speak like a mad scientist: ' },
    { name: 'Robot', apiVoice: 'Charon', promptPrefix: 'Speak in a robotic, monotonous voice: ' },
    { name: 'Cartoon', apiVoice: 'Puck', promptPrefix: 'Speak in an energetic, high-pitched cartoon voice: ' },
    { name: 'Calm', apiVoice: 'Kore', promptPrefix: 'Speak in a calm, soothing voice: ' },
    { name: 'Formal', apiVoice: 'Charon', promptPrefix: 'Speak in a formal, clear voice: ' },
];

export const SPEEDS: Speed[] = [
    { label: 'Slow', value: 'slowly' },
    { label: 'Normal', value: '' },
    { label: 'Fast', value: 'quickly' },
];

export const PITCHES: Pitch[] = [
    { label: 'Low', value: 'in a low-pitched voice' },
    { label: 'Normal', value: '' },
    { label: 'High', value: 'in a high-pitched voice' },
];