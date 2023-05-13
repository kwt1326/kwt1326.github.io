import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="container m-auto px-8 py-8 lg:max-w-4xl">
      {children}
    </div>
  )
}

export default Container