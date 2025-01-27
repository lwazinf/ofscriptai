import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import SideMenu_ from "../components/SideMenu_";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
        <SideMenu_/>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
