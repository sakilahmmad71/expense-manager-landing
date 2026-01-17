export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'Expenser - Expense Tracker & Budget Manager',
    short_name: 'Expenser',
    description: 'Free expense tracker and budget manager with real-time analytics',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['finance', 'productivity', 'business'],
    icons: [
      {
        src: '/favicon-new.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/expense-manager-dashboard.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Expenser Dashboard',
      },
    ],
    shortcuts: [
      {
        name: 'Add Expense',
        short_name: 'Add',
        description: 'Quickly add a new expense',
        url: '/add-expense',
        icons: [{ src: '/favicon-new.svg', sizes: '96x96' }],
      },
      {
        name: 'View Dashboard',
        short_name: 'Dashboard',
        description: 'View expense analytics dashboard',
        url: '/dashboard',
        icons: [{ src: '/favicon-new.svg', sizes: '96x96' }],
      },
    ],
  };
}