import Link from "next/link";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Oooops....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the &nbsp;
        <Link href="/">
          <a href="">Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;