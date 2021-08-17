import Head from "next/head";
import Banner from "../src/components/banner/banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtual Experts | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Banner />
      </main>
    </>
  );
}
