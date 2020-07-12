import Head from "next/head"
import React from "react"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 container mx-auto px-4 mt-4">
      <Head>
        <title>Hannah Shore</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="text-gray-900">
        <div className="space-y-1">
          <h1 className="text-3xl font-serif">Hannah Shore</h1>
          <ul className="space-y-1">
            <li className="">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:shore.hannah.e@gmail.com"
                className="text-blue-600"
              >
                shore.hannah.e@gmail.com
              </a>
            </li>
            <li className="">
              <span className="font-semibold">Github:</span>{" "}
              <a href="https://github.com/shoja" className="text-blue-600">
                https://github.com/shoja
              </a>
            </li>
            <li className="">
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/shore-hannah/"
                className="text-blue-600"
              >
                https://www.linkedin.com/in/shore-hannah/
              </a>
            </li>
            <li className="">
              <span className="font-semibold">Resume:</span>{" "}
              <a
                href="https://docs.google.com/document/u/3/d/1nW-5QOKj7zHre1XVhxn4o_h4kxbVJFNR-7PsjGnO8Cs/edit"
                className="text-blue-600"
              >
                Google Docs
              </a>
              {" / "}
              <a
                href="https://docs.google.com/document/d/1nW-5QOKj7zHre1XVhxn4o_h4kxbVJFNR-7PsjGnO8Cs/export?format=pdf"
                className="text-blue-600"
              >
                PDF
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
