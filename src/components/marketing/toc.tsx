import React from "react";
import  slugify  from "slugify";

const Toc = ({ headings }: any) => (
  <div className="mx-auto mt-8 max-w-2xl rounded-sm border text-center dark:border-purple-950 ">
    <h2 className="bg:amber-50 mb-5 border-b p-2 text-xl font-bold dark:border-purple-950 dark:bg-slate-900/20">
      Table of Contents
    </h2>
    <nav>
      <ul>
        {headings?.map((heading: any) => (
          <li key={heading?._key} className="mb-2">
            <a
              className="hover:underline"
              href={`#${slugify(heading.children[0].text)}`}
            >
              {heading.children[0].text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Toc;
