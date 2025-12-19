import { Fund } from '../types'

export const MOCK_FUNDS: Fund[] = [
  {
    id: 'f-001',
    name: 'Global Income Fund',
    code: 'GIF-AX',
    risk: 'Low',
    nav: 12.34,
    dailyChangePct: 0.32
  },
  {
    id: 'f-002',
    name: 'Balanced Opportunities',
    code: 'BAL-3',
    risk: 'Medium',
    nav: 8.9,
    dailyChangePct: -0.45
  },
  {
    id: 'f-003',
    name: 'Aggressive Growth Fund',
    code: 'AGF-9',
    risk: 'High',
    nav: 24.12,
    dailyChangePct: 1.72
  },
  {
    id: 'f-004',
    name: 'Short Term Bond',
    code: 'STB-2',
    risk: 'Low',
    nav: 10.01,
    dailyChangePct: -0.05
  },
  {
    id: 'f-005',
    name: 'Global Equity Select',
    code: 'GEL-7',
    risk: 'High',
    nav: 31.4,
    dailyChangePct: -2.12
  }
]
