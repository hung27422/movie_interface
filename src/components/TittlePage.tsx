interface Props {
  title: string | number;
}
function TittlePage({ title }: Props) {
  return (
    <h2 className="md:text-4xl text-3xl py-2 text-center">-- {title} --</h2>
  );
}

export default TittlePage;
