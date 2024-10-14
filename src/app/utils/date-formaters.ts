import { format } from "date-fns";
import { useCallback } from "react";

export function formatDate(date: Date | number | string, formatString: string = "yyyy-MM-dd"): string {
  return format(new Date(date), formatString);
}

export function useDateFormatter() {
  return useCallback((date: Date | number | string, formatString?: string) => {
    return formatDate(date, formatString);
  }, []);
}
