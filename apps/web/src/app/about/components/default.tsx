import { Author } from "@/repository/author/types";

const AboutDefaultComponent = ({
  attributes: {
    name,
  }
}: Author) => {
  return (
    <div>
      {name}
    </div>
  );
};

export default AboutDefaultComponent;
