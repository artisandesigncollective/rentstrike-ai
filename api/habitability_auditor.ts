/**
 * RentStrike AI: Habitability Auditor
 * Matches landlord failures against state-specific "Warranty of Habitability" codes.
 */

export interface HousingIssue {
  type: 'mold' | 'heat' | 'leaks' | 'pests' | 'security';
  durationDays: number;
  noticeGiven: boolean;
}

export function auditHabitability(issues: HousingIssue[], state: string) {
  const criticalViolations = issues.filter(i => i.noticeGiven && i.durationDays > 3);

  return {
    violations: criticalViolations.map(v => v.type),
    isRentWithholdingLegal: criticalViolations.length > 0,
    statutoryBasis: `Implied Warranty of Habitability (${state})`,
    recommendation: "Generate Notice of Intent to Withhold Rent"
  };
}
