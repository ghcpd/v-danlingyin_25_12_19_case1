import { Fund, RiskLevel } from '../types/Fund';

interface FundCardProps {
  fund: Fund;
}

export function FundCard({ fund }: FundCardProps) {
  const isPositive = fund.dailyChangePercentage >= 0;
  const riskColors: Record<RiskLevel, string> = {
    Low: 'bg-blue-100 text-blue-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{fund.name}</h3>
          <p className="text-sm text-gray-500">{fund.code}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${riskColors[fund.riskLevel]}`}>
          {fund.riskLevel} Risk
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Latest NAV</span>
          <span className="text-lg font-semibold text-gray-900">${fund.latestNAV.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Daily Change</span>
          <span className={`text-lg font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? '+' : ''}{fund.dailyChangePercentage.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
