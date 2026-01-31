'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { DeepfakeProvider } from '@/helpers';
import InfoModal from '@/common/components/info-modal'; // ✅ ADD THIS

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DeepfakeProvider>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
        >
          {children}

          {/* ✅ GLOBAL INFO MODAL */}
          <InfoModal />
        </NextThemesProvider>
      </NextUIProvider>
    </DeepfakeProvider>
  );
}
