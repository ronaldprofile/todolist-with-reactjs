import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Task List</title>
        <meta name="description" content="Home page task list" />
      </Head>

      <div className="w-screen h-screen bg-zinc-900">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
