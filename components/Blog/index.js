import { kebabCase } from "@/lib/utils/slugger";
import { marked } from "marked";
import Link from "next/link";
import React from "react";

const Blog = ({ posts, page }) => {
  return (
    <div className="container">
      <div className="w-full md:w-2/3 mx-auto shadow-lg">
        {posts.map((d) => (
          <div
            className="font-primary border-b border-borderColor py-8 md:w-11/12 mx-auto "
            key={d.slug}
          >
            <h3 className="text-primaryColor text-h3 ">
              {d.frontmatter.title}
            </h3>
            <p className="text-textLight mb-4">
              {d.frontmatter.author} {d.frontmatter.date}{" "}
              {d.frontmatter.categories.map((c) => (
                <Link href={`categories/${kebabCase(c)}`} key={c}>
                  <a className="mr-2">{`${c}`}</a>
                </Link>
              ))}
            </p>

            <div
              className="text-large mb-4 font-normal text-textColor"
              dangerouslySetInnerHTML={{
                __html: marked.parse(d.content.slice(0, 141)),
              }}
            ></div>
            <a className="text-primaryColor border-b border-primaryColor">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
