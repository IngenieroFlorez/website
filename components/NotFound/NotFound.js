import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <Link href="/">
        <a>
          <Image src="/images/404.svg" width={550} height={400} alt="error" />
        </a>
      </Link>
    </div>
  );
}
