export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface Fund {
  id: string;
  name: string;
  code: string;
  riskLevel: RiskLevel;
  latestNAV: number;
  dailyChangePercentage: number;
}
