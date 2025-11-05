
export interface Voice {
    name: string;
    apiVoice: 'Kore' | 'Puck' | 'Charon' | 'Fenrir' | 'Zephyr';
    promptPrefix: string;
}

export interface Speed {
    label: string;
    value: string;
}

export interface Pitch {
    label: string;
    value: string;
}