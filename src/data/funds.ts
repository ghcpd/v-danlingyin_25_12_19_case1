import { Fund } from '../types'

export const MOCK_FUNDS: Fund[] = [
  { id: 'f-001', name: 'Conservative Income Fund', code: 'CIF-01', risk: 'Low', nav: 10.23, dailyChangePct: 0.12 },
  { id: 'f-002', name: 'Balanced Growth Fund', code: 'BGF-02', risk: 'Medium', nav: 23.45, dailyChangePct: -0.35 },
  { id: 'f-003', name: 'Aggressive Equity Fund', code: 'AEF-03', risk: 'High', nav: 8.9, dailyChangePct: 1.42 },
  { id: 'f-004', name: 'Global Opportunity', code: 'GOP-04', risk: 'High', nav: 15.0, dailyChangePct: -0.78 },
  { id: 'f-005', name: 'Stable Short-Term', code: 'SST-05', risk: 'Low', nav: 5.77, dailyChangePct: 0.0 },
]
