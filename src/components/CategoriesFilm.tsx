const categories = [
  {
    name: "Kinh Dị",
  },
  {
    name: "Tâm Lý",
  },
  {
    name: "Hài Hước",
  },
  {
    name: "Tình Cảm",
  },
  {
    name: "Chính Kịch",
  },
  {
    name: "Giả Tượng",
  },
  {
    name: "Hài Hước",
  },
  { name: "Hành Động" },
  { name: "Khoa Học" },
];
function CategoriesFilm() {
  return (
    <div className="">
      <span className="px-2 py-1 text-xl">Thể loại:</span>
      {categories.map((item, index) => {
        return (
          <span
            className="w-fit px-2 py-1 text-base bg-primary ml-2 rounded-lg cursor-pointer"
            key={index}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
}

export default CategoriesFilm;
