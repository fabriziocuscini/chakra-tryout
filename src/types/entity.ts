import { DueDiligenceLevel } from '.';

export interface RiskFactor {
  id: number;
  factor: string;
  description: string;
  score: number;
}

export interface RiskCategory {
  name: string;
  calculatedRisk: number;
  items: RiskFactor[];
}

export interface RequestDetail {
  label: string;
  value: string;
}

export interface Risk {
  overridden: boolean;
  override?: {
    rating: string;
    description: string;
  };
  score: number;
  lastUpdated: string;
  dueDiligenceLevel: DueDiligenceLevel;
  FCCAdvisoryRequired: boolean;
  riskCategories: RiskCategory[];
}

export interface Entity {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  website: string;
  industry: string;
  location: string;
  employees: number;
  entityRef: string;
  PSID: string;
  status: string;
  risk: Risk;
  requestDetails: RequestDetail[];
}
