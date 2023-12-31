import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";

const LightTheme = {
  backgroundprimary: "#ffffff",
  backgroundSecondary: "#DFDFDD",
  fontPrimary: "#000000",
  fontSecondary: "#5A5A58",
};

const DarkTheme = {
  backgroundPrimary: "#151515",
  backgroundSecondary: "#202022",
  fontPrimary: "#ffffff",
  fontSecondary: "#A5A5A7",
};

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  transition: background-color 500ms ease;
}

html{
  scroll-behavior: smooth;
}

html,body{
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

body{
    background-color: ${({ theme }) => theme.backgroundPrimary};
    position: relative;
  }
`;

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || "dark"
  // );
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme:light)").matches
          ? "light"
          : "dark")
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Head>
        <title>Ahmet Kartal</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/NotAtAllInteresting.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Ahmet Kartal Portfolio</title>
        <meta name="title" content="Ahmet Kartal Portfolio" />
        <meta
          name="description"
          content="Merhaba, ben Ahmet Kartal, 17 yaşındayım, Samsun'da ikamet ediyorum. 14 Yaşımdan beri yazılımla uğraşıyorum. Ayrıca çoğu firmalarda yönetici olarak çalıştım veyahut kendi yazılım şirketlerim, hosting firmalarıma sahiplik yaptım. Aktif olarak Virtuoso:NET ve Dijitalfirman sahibiyim, bu platformlarda hosting hizmetleri, yazılım hizmetleri, tasarım hizmetleri vermekteyim."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmetkartal.com.tr/" />
        <meta property="og:title" content="Ahmet Kartal Portfolio" />
        <meta
          property="og:description"
          content="Merhaba, ben Ahmet Kartal, 17 yaşındayım, Samsun'da ikamet ediyorum. 14 Yaşımdan beri yazılımla uğraşıyorum. Ayrıca çoğu firmalarda yönetici olarak çalıştım veyahut kendi yazılım şirketlerim, hosting firmalarıma sahiplik yaptım. Aktif olarak Virtuoso:NET ve Dijitalfirman sahibiyim, bu platformlarda hosting hizmetleri, yazılım hizmetleri, tasarım hizmetleri vermekteyim."
        />
        <meta property="og:image" content="/images/profile.gif" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle theme={themes[theme]} />
      <ThemeProvider theme={themes[theme]}>
        <Component theme={theme} setTheme={setTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
