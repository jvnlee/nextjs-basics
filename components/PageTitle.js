import Head from "next/head";

export default function PageTitle({ title }) {
  return (
    <Head>
      <title>{title} | NEXT Movies</title>
    </Head>
  );
}

/*
Manipulating "title"s of each page

NextJS provides a built-in component called "Head", where you can set titles of your pages.
It works just the same with "React Helmet", so all you need is to import it into each of your page components.

In this case, a component called "PageTitle" was created for efficiency.
Each page will import this component instead, and just pass a title as a prop.
*/
