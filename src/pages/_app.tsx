import '../../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const isServer = typeof window === 'undefined';
  // 노드 환경에선 server, 브라우저 환경에선 worker를 사용한다.
  if (isServer) {
    (async () => {
      const { server } = await import('@mocks/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('@mocks/browser');
      worker.start();
    })();
  }

  return <Component {...pageProps} />;
}

export default MyApp;
