import React from 'react';
import { Fund } from '../types/types';

interface FundCardProps {
  fund: Fund;
}

const FundCard: React.FC<FundCardProps> = ({ fund }) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const changeColor = fund.dailyChangePercentage >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border">
      <h3 className="text-lg font-semibold text-gray-900">{fund.name}</h3>
      <p className="text-sm text-gray-600">Code: {fund.code}</p>
      <div className="mt-2">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(fund.riskLevel)}`}>
          {fund.riskLevel} Risk
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-700">Latest NAV: ${fund.latestNAV.toFixed(2)}</p>
        <p className={`text-sm font-medium ${changeColor}`}>
          Daily Change: {fund.dailyChangePercentage >= 0 ? '+' : ''}{fund.dailyChangePercentage.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default FundCard;