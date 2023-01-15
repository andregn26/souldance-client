import React from "react";

type Props = { name: string; modality?: string; image?: string };

const Professor = ({ name, modality, image }: Props) => {
  return (
    <div className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 mx-5 max-w-[480px] rounded-lg border  bg-purple-lighter shadow-md md:mx-0 md:max-w-[700px]">
      <img className="rounded-t-lg" src={image} alt={image} />

      <div className="p-5">
        {" "}
        <p className=" mb-3 font-normal">{modality}</p>
        <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight">
          {name}
        </h5>
      </div>
    </div>
  );
};

export default Professor;
