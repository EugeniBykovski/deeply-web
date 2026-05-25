"use client";

import { useTranslation as useOriginalTranslation } from "react-i18next";

/**
 * Thin wrapper around react-i18next's useTranslation.
 *
 * The previous implementation returned t=()=>"" until a client-side useEffect
 * fired, which meant every SSR payload was blank HTML. Instead, we expose the
 * real `t` function immediately so SSR produces actual text (using the server's
 * default language "ru"). On hydration the client language takes over; a brief
 * language flash is acceptable and far better than blank legal pages.
 *
 * NOTE: /privacy and /terms are now static Server Components that don't use
 * this hook at all. This hook is kept for other client-only pages.
 */
export const useClientTranslation = (
  ...args: Parameters<typeof useOriginalTranslation>
) => {
  return useOriginalTranslation(...args);
};
