import { Fund } from '../types'

export const funds: Fund[] = [
  { id: 'f1', name: 'Global Growth Fund', code: 'GGF', risk: 'Medium', nav: 12.34, dailyChange: 0.45 },
  { id: 'f2', name: 'Treasury Income Fund', code: 'TIF', risk: 'Low', nav: 10.02, dailyChange: -0.08 },
  { id: 'f3', name: 'Emerging Markets Equity', code: 'EME', risk: 'High', nav: 24.12, dailyChange: 1.95 },
  { id: 'f4', name: 'Balanced Conservative', code: 'BCF', risk: 'Low', nav: 9.55, dailyChange: 0.03 },
  { id: 'f5', name: 'Tech Opportunities', code: 'TEK', risk: 'High', nav: 41.2, dailyChange: -2.11 }
]
