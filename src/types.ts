export type RiskLevel = 'Low' | 'Medium' | 'High'

export interface Fund {
  id: string
  name: string
  code: string
  risk: RiskLevel
  nav: number // latest NAV
  dailyChangePct: number // e.g. 0.5 for +0.5%
}
