import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useMemo, useCallback } from "react";
import { temples, type Temple } from "@/data/temples";

const STORAGE_KEY = "omg_active_temple_slug";
const EVENT_NAME = "omg-temple-change";
export const TIRUVANNAMALAI_SLUG = "tiruvannamalai";

export function setGlobalActiveTempleSlug(slug: string | null) {
  try {
    if (slug && slug !== "all") {
      localStorage.setItem(STORAGE_KEY, slug);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {}
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: slug }));
}

export function getGlobalActiveTempleSlug(): string | null {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val && val !== "all" ? val : null;
  } catch {
    return null;
  }
}

/**
 * Universal hook to track the active temple across the whole app.
 * Automatically checks current route params (/temple/:slug, /booking/:slug, /store/:storeId, /girivalam)
 * or falls back to the user's explicitly chosen temple in the dashboard.
 */
export function useActiveTemple() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const [storedSlug, setStoredSlug] = useState<string | null>(getGlobalActiveTempleSlug);

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<string | null>;
      setStoredSlug(custom.detail !== undefined ? custom.detail : getGlobalActiveTempleSlug());
    };
    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  // Determine slug from the URL route when inside a temple-specific page
  const routeSlug = useMemo(() => {
    if (pathname.startsWith("/temple/")) {
      return pathname.split("/")[2] || null;
    }
    if (pathname.startsWith("/booking/")) {
      return pathname.split("/")[2] || null;
    }
    if (pathname.startsWith("/store/")) {
      const storeId = pathname.split("/")[2];
      if (storeId) {
        const candidate = storeId.replace(/^store-/, "");
        if (temples.some((t) => t.slug === candidate)) return candidate;
      }
    }
    if (pathname === "/girivalam") {
      return TIRUVANNAMALAI_SLUG;
    }
    return null;
  }, [pathname]);

  const activeSlug = routeSlug || storedSlug || null;

  const activeTemple = useMemo<Temple | null>(() => {
    if (!activeSlug) return null;
    return temples.find((t) => t.slug === activeSlug) || null;
  }, [activeSlug]);

  // Girivalam is only valid and visible for Tiruvannamalai (the Arunachala circuit)
  const isTiruvannamalai = activeSlug === TIRUVANNAMALAI_SLUG || pathname.startsWith("/girivalam");

  const setActiveTemple = useCallback((slug: string | null) => {
    setGlobalActiveTempleSlug(slug);
    setStoredSlug(slug);
  }, []);

  return {
    activeTemple,
    activeSlug,
    isTiruvannamalai,
    setActiveTemple,
  };
}
