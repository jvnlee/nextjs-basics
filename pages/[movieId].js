import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>{router.query.title || "Loading..."}</h1>
    </div>
  );
}
