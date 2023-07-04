import { ExpandIcon, PasteIcon } from "@/assets/icons";
import React from "react";

const Card = ({ data, className }) => {
  return (
    <div
      className={`${className} xl:max-w-[395px] py-5 px-6 font-neue font-light text-black border-r-0 xl:border-r-2 border-b-2 border-tertiary border-collapse`}
    >
      <div className="flex justify-between w-full">
        <h4 className="text-xl font-semibold uppercase text-tertiary">
          {data?.title}
        </h4>
        <div className="flex items-center justify-between gap-4">
          <button className="hover:text-tertiary">
            <PasteIcon />
          </button>
          <button className="hover:text-tertiary">
            <ExpandIcon />
          </button>
        </div>
      </div>
      <div className="pr-4 mt-6">
        <p>{data?.description}</p>
        <ul className="mt-3 ml-6 list-disc">
          {data?.list?.length > 0 &&
            data?.list?.map(listItem => <li key={listItem}>{listItem}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Card;
