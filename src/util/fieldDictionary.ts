export const fieldDictionary = {
  source: 1,
  description: 2,
  isMatchingSignal: 3,
  updatedSignal: 4,
  isReportedBefore: 5,
  dateHealthThreatStarted: 6,
  informant: 7,
  otherInformant: 8,
  additionalInformation: 9,
  dateVerified: 10,
  isThreatStillExisting: 11,
  threatTo: 12,
  dateSCDSCInformed: 13,
  eventType: 14,
  dateSCMOHInformed: 15,
  dateResponseStarted: 16,
  responseActivities: 17,
  otherResponseActivity: 18,
  outcomeOfResponse: 19,
  recommendations: 20,
  dateEscalated: 21,
  dateOfReport: 22,
  dateInvestigationStarted: 23,
  dateEventStarted: 24,
  symptoms: 25,
  humansCases: 26,
  humansCasesHospitalized: 27,
  humansDead: 28,
  animalsCases: 29,
  animalsDead: 30,
  isCauseKnown: 31,
  cause: 32,
  isLabSamplesCollected: 33,
  dateSampleCollected: 34,
  labResults: 35,
  dateLabResultsReceived: 36,
  isNewCasedReportedFromInitialArea: 37,
  isNewCasedReportedFromNewAreas: 38,
  isEventSettingPromotingSpread: 39,
  riskClassification: 40,
  reason: 41,
  reasonOther: 42,
  isStillHappening: 43,
  dateRRTNotified: 44,
  isCovid19WorkingCaseDefinitionMet: 45,
  measureHandHygiene: 46,
  measureTempScreening: 47,
  measurePhysicalDistancing: 48,
  measureUseOfMasks: 49,
  measureVentilation: 50,
  symptomsOther: 51,
  isSamplesCollected: 52,
  measureSocialDistancing: 53,
  dateSamplesCollected: 54,
  dateOfTestResults: 55,
  isCIFFilledAndSamplesCollected: 56,
  reasonsNoSampleCollectedOther: 57,
  responseActivitiesOther: 58,
  isHumansQuarantinedFollowedUp: 59,
  eventStatus: 60,
  additionalResponseActivities: 61,
  reasonsNoSampleCollected: 62,
  humansQuarantinedSelf: 63,
  humansQuarantinedSchool: 64,
  humansQuarantinedInstitutional: 65,
  humansIsolationSchool: 66,
  humansIsolationHealthFacility: 67,
  humansIsolationHome: 68,
  humansIsolationInstitutional: 69,
  humansPositive: 70,
  humansTested: 71,
  humansQuarantined: 72,
  quarantineTypes: 73,
  isHumansIsolated: 74,
  isolationTypes: 75,
  eventStatuses: 76,
};

export function decompressForm(form: Record<string, any>): Record<string, any> {
  const _form = {};

  Object.keys(form).forEach((key) => {
    const _key = Object.keys(fieldDictionary).find((key_) => fieldDictionary[key_].toString() === key);

    _form[_key || key] = form[key];
  });

  return _form;
}