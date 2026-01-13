export interface Fund {
  name: string;
  code: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  latestNAV: number;
  dailyChangePercentage: number;
}