import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: gray;
        }
      `}</style>
    </>
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
