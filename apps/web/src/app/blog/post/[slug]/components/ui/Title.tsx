interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="mb-8 mt-20 text-center text-3xl font-semibold xl:font-bold dark:text-white lg:text-4xl xl:text-5xl">
      {title}
    </h1>
  )
}

export default Title;
