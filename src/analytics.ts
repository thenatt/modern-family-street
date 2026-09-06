import posthog from 'posthog-js';

const KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? 'phc_vZAbmnwqk5Fa9zD44yB5s25Ri94fNK5SNCvWMpf9HAdd';
const HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com';

/** Same PostHog project as sudarshansrinivas.com — filter on `site`. */
export function initAnalytics(): void {
  posthog.init(KEY, {
    api_host: HOST,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: false,
    disable_session_recording: true,
  });
  posthog.register({ site: 'modern-family-street' });
}

export function trackPageview(path: string): void {
  posthog.capture('$pageview', {
    $current_url: window.location.href,
    $pathname: path,
    path,
  });
}

export function track(event: string, properties?: Record<string, string | number | boolean>): void {
  posthog.capture(event, properties);
}
