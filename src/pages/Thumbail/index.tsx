import React from "react";

import { Img } from "components";

const ThumbailPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex items-center justify-start mx-[auto] w-[100%]">
        <Img
          src="images/img_pages1.png"
          className="h-[960px] sm:h-[auto] object-cover w-[100%]"
          alt="PagesOne"
        />
      </div>
    </>
  );
};

export default ThumbailPage;
