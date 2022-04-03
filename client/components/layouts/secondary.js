import Head from "next/head";

const Secondary = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> {title} </title>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Secondary;
