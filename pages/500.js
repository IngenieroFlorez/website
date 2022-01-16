import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function custom500() {
  return (
    <div className="notFound">
      <h1>500</h1>
      <h2> El servidor está cansado vuelve más tarde</h2>
      <Link href="/">
        <a>
          <Image src="/images/500.svg" width={550} height={400} alt="error" />
        </a>
      </Link>
    </div>
  );
}
