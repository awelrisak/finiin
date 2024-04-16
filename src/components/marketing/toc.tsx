import React from "react";
import  slugify  from "slugify";

const Toc = ({ headings }: any) => (
  <div className="mt-8 max-w-sm rounded-sm border">
    <h2 className="border-b p-2 text-xl font-bold">
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
