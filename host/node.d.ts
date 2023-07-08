export type Tint = {
    bold?: boolean;
    tone?: string;
    backTone?: string;
    line?: boolean;
};
export default function make(text: string, tint: Tint): string;
