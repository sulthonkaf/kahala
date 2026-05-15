type AnalyticsEventPayload = Record<string, string | number | boolean | null | undefined>;
export function trackEvent(eventName: string, payload?: AnalyticsEventPayload) {
  if (process.env.NODE_ENV === "development") console.log("[Kahala Analytics]", eventName, payload ?? {});
}
