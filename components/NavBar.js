import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Image src="/Nextjs-logo.svg" alt="logo" width={100} height={60} />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 20px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          margin-bottom: 50px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        /* img {
          max-width: 100px;
          margin-bottom: 5px;
        } */
        a {
          font-weight: 400;
          font-size: 18px;
          text-decoration: none;
          padding: 10px;
        }
        .active {
          border-bottom: 3px solid black;
        }
        nav div {
          display: flex;
          gap: 40px;
        }
      `}</style>
    </nav>
  );
}

/*
Components

Created a "components" folder for storing custom components. This NavBar component is an example component.
*/
