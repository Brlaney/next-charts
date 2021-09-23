import * as React from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
// import { initial, pageAnimate } from '@/lib/config/animations/global'
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '@/components/global/Layout';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/css/uikit.css';
import '@/styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
};
