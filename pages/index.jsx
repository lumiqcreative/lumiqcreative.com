import FilterableWorkTable from "../components/filterable-work-table";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lumiq Creative</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="I arrange shapes, command computers, and put together words."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://lumiqcreative.com/cover.png"
        />
        <meta property="og:title" content="Lumiq Creative" />
        <meta
          property="og:description"
          content="I arrange shapes, command computers, and put together words."
        />
      </Head>
      <Header />
      <Hero />
      <FilterableWorkTable />
      <Footer />
    </>
  );
}
