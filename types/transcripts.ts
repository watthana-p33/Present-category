import transcriptsData from '@/docs/references/ai-first-enterprise/transcripts.json';

export interface PresentationTranscript {
  id: string;
  part: number;
  title: string;
  speaker: string;
  role: string;
  organization: string;
  transcript: string;
  note?: string;
}

export const aiFirstEnterpriseTranscripts: PresentationTranscript[] = transcriptsData as PresentationTranscript[];

export function getTranscriptByPart(part: number): PresentationTranscript | undefined {
  return aiFirstEnterpriseTranscripts.find((t) => t.part === part);
}
