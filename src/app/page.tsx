'use client';

import Link from 'next/link';
import { useTheme } from 'styled-components';

export default function Home() {
  const { colors } = useTheme();
  return (
    <div>
      <Link href="/sobre" style={{ color: colors.primary }}>
        Sobre
      </Link>
    </div>
  );
}
