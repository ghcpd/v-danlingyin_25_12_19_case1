export type RiskLevel = 'Low' | 'Medium' | 'High'

export interface Fund {
  id: string
  name: string
  code: string
  risk: RiskLevel
  nav: number // latest NAV
  dailyChangePct: number // e.g. 1.23 means +1.23%
}