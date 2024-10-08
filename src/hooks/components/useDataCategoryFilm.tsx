function useDataCategoryFilm() {
  const currentYear = new Date().getFullYear();
  const lastTwoDigits = parseInt(currentYear.toString().slice(-2), 10);
  const categoryFilms = [
    { name: "Hành Động", slug: "hanh-dong" },
    { name: "Cổ trang", slug: "co-trang" },
    { name: "Chiến Tranh", slug: "chien-tranh" },
    { name: "Viễn tưởng", slug: "vien-tuong" },
    { name: "Kinh Dị", slug: "kinh-di" },
    { name: "Tài Liệu", slug: "tai-lieu" },
    { name: "Bí ẩn", slug: "bi-an" },
    { name: "Tình Cảm", slug: "tinh-cam" },
    { name: "Tâm Lý", slug: "tam-ly" },
    { name: "Thể Thao", slug: "the-thao" },
    { name: "Phiêu Lưu", slug: "phieu-luu" },
    { name: "Âm Nhạc", slug: "am-nhac" },
    { name: "Gia Đình", slug: "gia-dinh" },
    { name: "Học Đường", slug: "hoc-duong" },
    { name: "Hài Hước", slug: "hai-huoc" },
    { name: "Hình Sự", slug: "hinh-su" },
    { name: "Võ Thuật", slug: "vo-thuat" },
    { name: "Khoa Học", slug: "khoa-hoc" },
    { name: "Thần Thoại", slug: "than-thoai" },
    { name: "Chính Kịch", slug: "chinh-kich" },
    { name: "Kinh Điển", slug: "kinh-dien" },
  ];
  const categoryCountry = [
    { name: "Trung Quốc", slug: "trung-quoc" },
    { name: "Pháp", slug: "phap" },
    { name: "Mexico", slug: "mexico" },
    { name: "Đan Mạch", slug: "dan-mach" },
    { name: "Hàn Quốc", slug: "han-quoc" },
    { name: "Canada", slug: "canada" },
    { name: "Ba Lan", slug: "ba-lan" },
    { name: "UAE", slug: "uae" },
    { name: "Nhật Bản", slug: "nhat-ban" },
    { name: "Thổ Nhĩ Kỳ", slug: "tho-nhi-ky" },
    { name: "Brazil", slug: "brazil" },
    { name: "Nam Phi", slug: "nam-phi" },
    { name: "Thái Lan", slug: "thai-lan" },
    { name: "Đức", slug: "duc" },
    { name: "Thụy Điển", slug: "thuy-dien" },
    { name: "Thụy Sĩ", slug: "thuy-si" },
    { name: "Âu Mỹ", slug: "au-my" },
    { name: "Tây Ban Nha", slug: "tay-ban-nha" },
    { name: "Malaysia", slug: "malaysia" },
    { name: "Châu Phi", slug: "chau-phi" },
    { name: "Đài Loan", slug: "dai-loan" },
    { name: "Nga", slug: "nga" },
    { name: "Ý", slug: "y" },
    { name: "Việt Nam", slug: "viet-nam" },
    { name: "Hồng Kông", slug: "hong-kong" },
    { name: "Hà Lan", slug: "ha-lan" },
    { name: "Philippines", slug: "philippines" },
    { name: "Ukraina", slug: "ukraina" },
    { name: "Ấn Độ", slug: "an-do" },
    { name: "Indonesia", slug: "indonesia" },
    { name: "Bồ Đào Nha", slug: "bo-dao-nha" },
    { name: "Ả Rập Xê Út", slug: "a-rap-xe-ut" },
    { name: "Anh", slug: "anh" },
    { name: "Úc", slug: "uc" },
    { name: "Na Uy", slug: "na-uy" },
    { name: "Quốc Gia Khác", slug: "quoc-gia-khac" },
  ];
  const categoryYears = Array.from(
    { length: lastTwoDigits + 1 },
    (_, index) => ({
      year: 2000 + index,
    })
  );
  return { categoryFilms, categoryCountry, categoryYears };
}

export default useDataCategoryFilm;
