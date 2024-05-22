"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";

export type AnimeCard = React.JSX.Element

const LoadMore = () => {
  const [data, setData] = useState<AnimeCard[]>([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        setPage((prev) => prev + 1);
      });
    }
  }, [inView, page]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 sm:gap-5">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
