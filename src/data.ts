import { Fund } from './types/types';

export const mockFunds: Fund[] = [
  {
    name: 'Conservative Growth Fund',
    code: 'CGF001',
    riskLevel: 'Low',
    latestNAV: 105.23,
    dailyChangePercentage: 0.5,
  },
  {
    name: 'Balanced Equity Fund',
    code: 'BEF002',
    riskLevel: 'Medium',
    latestNAV: 120.45,
    dailyChangePercentage: -1.2,
  },
  {
    name: 'Aggressive Tech Fund',
    code: 'ATF003',
    riskLevel: 'High',
    latestNAV: 150.67,
    dailyChangePercentage: 2.3,
  },
  {
    name: 'Stable Income Fund',
    code: 'SIF004',
    riskLevel: 'Low',
    latestNAV: 98.12,
    dailyChangePercentage: -0.1,
  },
  {
    name: 'Global Diversified Fund',
    code: 'GDF005',
    riskLevel: 'Medium',
    latestNAV: 135.89,
    dailyChangePercentage: 1.8,
  },
];