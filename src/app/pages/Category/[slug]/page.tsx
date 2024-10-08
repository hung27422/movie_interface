"use client";
import useGetFilmByCategory from "@/hooks/api/useGetFilmByCategory";
import Spinner from "../../Spinner/page";
import FilmItem from "@/components/FilmItem";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import useDataCategoryFilm from "@/hooks/components/useDataCategoryFilm";
import TittlePage from "@/components/TittlePage";

function Category({ params }: { params: { slug: string } }) {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data } = useGetFilmByCategory({
    page: page,
    limit: 20,
    slug: params.slug,
  });
  const { categoryFilms } = useDataCategoryFilm();
  const title = categoryFilms.find((item) => item.slug === params.slug);
  const dataFilm = data?.data.items;
  if (!dataFilm) return <Spinner />;
  const totalPages = data?.data.params.pagination.totalPages;
  return (
    <div>
      <div className="flex min-h-screen flex-col p-2 relative">
        <div>
          <TittlePage title={`Thể Loại: ${title?.name}`} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 mt-3 mb-20">
          {dataFilm?.map((movie, index) => {
            return <FilmItem key={index} data={movie} />;
          })}
        </div>
        <div className="flex items-center justify-center py-2 absolute bottom-3 left-0 right-0">
          <Stack spacing={2} className="block md:hidden">
            <Pagination
              onChange={handleChange}
              page={page}
              count={totalPages}
              color="primary"
              size="small"
              style={{
                color: "black",
                backgroundColor: "#374151",
                padding: "4px 0",
                borderRadius: "24px",
              }}
            />
          </Stack>
          {/*  */}
          <Stack spacing={2} className="hidden md:block">
            <Pagination
              onChange={handleChange}
              page={page}
              count={totalPages}
              color="primary"
              style={{
                color: "black",
                backgroundColor: "#374151",
                padding: "4px 0",
                borderRadius: "24px",
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Category;
