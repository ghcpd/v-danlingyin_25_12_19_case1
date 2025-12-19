export type RiskLevel = 'Low' | 'Medium' | 'High'

export interface Fund {
  id: string
  name: string
  code: string
  risk: RiskLevel
  nav: number // Latest NAV
  dailyChange: number // Percent, e.g., -0.23 for -0.23%
}
