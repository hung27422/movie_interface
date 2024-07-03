"use client";
import { Blocks } from "react-loader-spinner";
function Spinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <Blocks
        height="80"
        width="80"
        color="#ff516d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper var(--color-primary)"
        visible={true}
      />
    </div>
  );
}

export default Spinner;
