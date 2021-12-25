import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
        * {
          font-family: "Poppins", sans-serif;
          color: black;
        }
      `}</style>
    </Layout>
  );
}

/*
Global Settings

"_App.js" is a file where you can create global scope settings, including global css, global layouts, etc.
The "App" function takes 2 default props: "Component", "pageProps"

- "Component" represents all the component files that is written by you.
- "pageProps" represents the props of each component.

"style" tags with "jsx", "global" props can set css of everything inside a component.
When it is used in this "App" component, it will become the global scope css.
*/
