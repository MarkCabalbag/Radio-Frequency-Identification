import { useState } from "react";

const ONE_MINUTE_MS = 60_000;

// Opt-in polling for the card list. `refetchInterval` plugs straight into React Query.
export function useAutoRefresh(intervalMs = ONE_MINUTE_MS) {
  const [isEnabled, setIsEnabled] = useState(false);

  return {
    isEnabled,
    refetchInterval: isEnabled ? intervalMs : false,
    enable: () => setIsEnabled(true),
    disable: () => setIsEnabled(false),
  };
}