import React from "react";

import { Img, Text, Button, Line, List, Input } from "components";

const StorePage: React.FC = () => {
  function handleNavigate21() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate22() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate28() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate29() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[527px] md:px-[20px] relative w-[100%]">
          <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
            <div className="bg-indigo_900_b0 h-[527px] w-[100%]"></div>
          </div>
          <div className="absolute flex flex-col gap-[136px] md:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] top-[7%] w-[68%]">
            <header className="flex md:flex-col flex-row gap-[251px] md:gap-[40px] items-center justify-center w-[100%]">
              <div className="flex flex-row gap-[33px] items-center justify-start w-[306px]">
                <div className="flex flex-row gap-[9px] items-start justify-start w-[39%]">
                  <Img
                    src="images/img_bookmark.svg"
                    className="h-[28px] w-[auto]"
                    alt="bookmark"
                  />
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    variant="body8"
                  >
                    Pages
                  </Text>
                </div>
                <ul className="flex flex-row gap-[10px] sm:hidden items-center justify-start w-[155px] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[30%]">
                    <Button
                      className="common-pointer flex h-[45px] items-center justify-center"
                      onClick={handleNavigate28}
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_facebook_indigo_900.svg"
                        className=""
                        alt="facebook"
                      />
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[30%]">
                    <Button
                      className="common-pointer flex h-[45px] items-center justify-center"
                      onClick={handleNavigate29}
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_facebook_indigo_900.svg"
                        className=""
                        alt="twitter"
                      />
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[30%]">
                    <Button
                      className="flex h-[45px] items-center justify-center"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_facebook_indigo_900.svg"
                        className=""
                        alt="linkedin"
                      />
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-end max-w-[742px] w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row font-inter gap-[26px] items-center justify-end sm:w-[100%] w-[532px]">
                  <div className="h-[21px] relative sm:w-[100%] w-[89%]">
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[16px] ml-[147px] my-[auto] w-[16px]"
                      alt="arrowdown"
                    />
                    <Text
                      className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-left text-white_A700 tracking-[-0.17px] w-[max-content]"
                      variant="body16"
                    >
                      Home Pages About Services Contact
                    </Text>
                  </div>
                  <div className="md:h-[21px] h-[31px] relative sm:w-[100%] w-[7%]">
                    <Img
                      src="images/img_cart.svg"
                      className="absolute bottom-[0] h-[21px] left-[0] w-[22px]"
                      alt="cart"
                    />
                    <Text
                      className="absolute bg-amber_A200 flex font-extrabold h-[21px] items-center justify-center right-[0] rounded-[10px] text-center text-indigo_900 top-[0] tracking-[-0.10px] w-[21px]"
                      variant="body22"
                    >
                      01
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold font-cardo min-w-[180px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                  size="sm"
                  variant="FillAmberA200"
                >
                  Order Today
                </Button>
              </div>
            </header>
            <div className="flex flex-col gap-[28px] items-center justify-start max-w-[633px] w-[100%]">
              <div className="flex flex-col font-cardo gap-[34px] items-center justify-start w-[200px]">
                <Text
                  className="text-center text-white_A700 tracking-[-1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  My Store
                </Text>
                <Line className="bg-amber_A200 h-[3px] w-[28%]" />
              </div>
              <Text
                className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[633px] not-italic text-center text-indigo_100 tracking-[-0.19px]"
                variant="body14"
              >
                There are many variations of passages of Lorem Ipsum available,
                have suffered alteration in some form.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start max-w-[1299px] mt-[150px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[70px] items-center justify-start max-w-[1299px] w-[100%]">
            <List
              className="sm:flex-col flex-row gap-[48px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1299px] w-[100%]"
              orientation="horizontal"
            >
              <div className="flex sm:flex-1 flex-col gap-[20px] items-start justify-start sm:w-[100%] w-[401px]">
                <div className="bg-gray_50 flex items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_53 border-[4px] border-gray_303 border-solid flex items-center justify-start pt-[4px] px-[4px] shadow-bs1 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[396px] items-center justify-start p-[12px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group7.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[49px] items-center justify-start mb-[9px] md:w-[100%] w-[96%]">
                        <Img
                          src="images/img_name.svg"
                          className="h-[108px] w-[auto]"
                          alt="Name"
                        />
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-cardo font-normal italic leading-[130.00%] text-center text-indigo_900 tracking-[-0.24px] w-[100%]"
                            variant="body21"
                          >
                            A long established fact that a reader normal as well
                            distribution of letters
                          </Text>
                          <Img
                            src="images/img_trees.svg"
                            className="h-[86px] mt-[15px] w-[auto]"
                            alt="Trees"
                          />
                          <Text
                            className="font-bold font-inter mt-[16px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                            variant="body21"
                          >
                            JOHN ABRAHAM
                          </Text>
                          <Text
                            className="font-cardo font-normal italic mt-[2px] text-center text-lime_700 tracking-[-0.28px] w-[auto]"
                            variant="body19"
                          >
                            A supreme packages and web page editors.
                          </Text>
                          <div className="font-inter md:h-[19px] h-[9px] mt-[10px] relative w-[99%]">
                            <Text
                              className="font-light m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ********************** **********************
                            </Text>
                            <div className="absolute bg-amber_A200 h-[8px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[8px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[401px]">
                  <div className="flex flex-col font-inter gap-[9px] items-start justify-start sm:w-[100%] w-[401px]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[401px]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                        variant="body6"
                      >
                        Atomic One’s
                      </Text>
                      <Text
                        className="font-inter text-amber_A200 text-right tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        $23.89
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[401px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        Many variations of passages of Lorem Ipsum willing
                        araise alteration in some form.
                      </Text>
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[46%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Printed Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-cardo min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="OutlineAmberA200_1"
                  >
                    Order Today
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[401px]">
                <div className="bg-gray_50 md:h-[400px] h-[500px] p-[18px] relative w-[100%]">
                  <div className="absolute bg-gray_53 border-[4px] border-gray_303 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[4px] px-[4px] shadow-bs1 w-[75%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[396px] items-center justify-start p-[12px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group7.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[50px] items-center justify-start mb-[9px] md:w-[100%] w-[96%]">
                        <Img
                          src="images/img_name.svg"
                          className="h-[108px] w-[auto]"
                          alt="Name One"
                        />
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-cardo font-normal italic leading-[130.00%] text-center text-indigo_900 tracking-[-0.24px] w-[100%]"
                            variant="body21"
                          >
                            A long established fact that a reader normal as well
                            distribution of letters
                          </Text>
                          <Img
                            src="images/img_trees.svg"
                            className="h-[86px] mt-[14px] w-[auto]"
                            alt="Trees One"
                          />
                          <Text
                            className="font-bold font-inter mt-[16px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                            variant="body21"
                          >
                            JOHN ABRAHAM
                          </Text>
                          <Text
                            className="font-cardo font-normal italic mt-[2px] text-center text-lime_700 tracking-[-0.28px] w-[auto]"
                            variant="body19"
                          >
                            A supreme packages and web page editors.
                          </Text>
                          <div className="font-inter md:h-[19px] h-[9px] mt-[10px] relative w-[99%]">
                            <Text
                              className="font-light m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ********************** **********************
                            </Text>
                            <div className="absolute bg-amber_A200 h-[8px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[8px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-amber_A200 bottom-[4%] flex h-[78px] items-center justify-start p-[15px] right-[5%] rounded-[50%] w-[78px]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[41px] mb-[6px] w-[41px]"
                      alt="music"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[401px]">
                  <div className="flex flex-col font-inter gap-[9px] items-start justify-start sm:w-[100%] w-[401px]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[401px]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                        variant="body6"
                      >
                        Atomic One’s
                      </Text>
                      <Text
                        className="font-inter text-amber_A200 text-right tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        $23.89
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[401px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        Many variations of passages of Lorem Ipsum willing
                        araise alteration in some form.
                      </Text>
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[46%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Printed Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-cardo min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="OutlineAmberA200_1"
                  >
                    Order Today
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[401px]">
                <div className="h-[500px] relative w-[100%]">
                  <div className="h-[500px] m-[auto] w-[100%]">
                    <div className="bg-gray_50 h-[500px] m-[auto] w-[100%]"></div>
                    <div className="absolute bg-gray_53 border-[4px] border-gray_303 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[4px] px-[4px] shadow-bs1 w-[75%]">
                      <div
                        className="bg-cover bg-no-repeat flex h-[396px] items-center justify-start p-[12px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group7.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[49px] items-center justify-start mb-[9px] md:w-[100%] w-[96%]">
                          <Img
                            src="images/img_name.svg"
                            className="h-[108px] w-[auto]"
                            alt="Name Two"
                          />
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-cardo font-normal italic leading-[130.00%] text-center text-indigo_900 tracking-[-0.24px] w-[100%]"
                              variant="body21"
                            >
                              A long established fact that a reader normal as
                              well distribution of letters
                            </Text>
                            <Img
                              src="images/img_trees.svg"
                              className="h-[86px] mt-[15px] w-[auto]"
                              alt="Trees Two"
                            />
                            <Text
                              className="font-bold font-inter mt-[16px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                              variant="body21"
                            >
                              JOHN ABRAHAM
                            </Text>
                            <Text
                              className="font-cardo font-normal italic mt-[2px] text-center text-lime_700 tracking-[-0.28px] w-[auto]"
                              variant="body19"
                            >
                              A supreme packages and web page editors.
                            </Text>
                            <div className="font-inter md:h-[19px] h-[9px] mt-[10px] relative w-[99%]">
                              <Text
                                className="font-light m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                ********************** **********************
                              </Text>
                              <div className="absolute bg-amber_A200 h-[8px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[8px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_mockup11.png"
                    className="absolute bottom-[5%] h-[91px] object-cover right-[5%] w-[24%]"
                    alt="MockupEleven"
                  />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[401px]">
                  <div className="flex flex-col font-inter gap-[9px] items-start justify-start sm:w-[100%] w-[401px]">
                    <div className="flex flex-row items-center justify-between sm:w-[100%] w-[401px]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                        variant="body6"
                      >
                        Atomic One’s
                      </Text>
                      <Text
                        className="font-inter text-amber_A200 text-right tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        $23.89
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[401px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        Many variations of passages of Lorem Ipsum willing
                        araise alteration in some form.
                      </Text>
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[46%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Printed Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-cardo min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="OutlineAmberA200_1"
                  >
                    Order Today
                  </Button>
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-[48px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1299px] w-[100%]"
              orientation="horizontal"
            >
              <div className="flex sm:flex-1 flex-col gap-[20px] items-start justify-start sm:w-[100%] w-[401px]">
                <div className="bg-gray_50 md:h-[400px] h-[500px] p-[48px] sm:px-[20px] md:px-[40px] relative w-[100%]">
                  <div className="absolute bg-gray_53 border-[4px] border-gray_303 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[4px] px-[4px] shadow-bs1 w-[75%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[396px] items-center justify-start p-[12px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group7.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[49px] items-center justify-start mb-[9px] md:w-[100%] w-[96%]">
                        <Img
                          src="images/img_name.svg"
                          className="h-[108px] w-[auto]"
                          alt="Name Three"
                        />
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-cardo font-normal italic leading-[130.00%] text-center text-indigo_900 tracking-[-0.24px] w-[100%]"
                            variant="body21"
                          >
                            A long established fact that a reader normal as well
                            distribution of letters
                          </Text>
                          <Img
                            src="images/img_trees.svg"
                            className="h-[86px] mt-[15px] w-[auto]"
                            alt="Trees Three"
                          />
                          <Text
                            className="font-bold font-inter mt-[16px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                            variant="body21"
                          >
                            JOHN ABRAHAM
                          </Text>
                          <Text
                            className="font-cardo font-normal italic mt-[2px] text-center text-lime_700 tracking-[-0.28px] w-[auto]"
                            variant="body19"
                          >
                            A supreme packages and web page editors.
                          </Text>
                          <div className="font-inter md:h-[19px] h-[9px] mt-[10px] relative w-[99%]">
                            <Text
                              className="font-light m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ********************** **********************
                            </Text>
                            <div className="absolute bg-amber_A200 h-[8px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[8px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white_A700 border-[12px] border-gray_302 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[10px] shadow-bs2 w-[75%]">
                    <div className="bg-gray_52 flex flex-col items-center justify-end p-[12px] w-[100%]">
                      <div className="flex font-lexend h-[80px] justify-end relative w-[90%]">
                        <div className="flex flex-col gap-[26px] h-[100%] items-center justify-start mb-[7px] mt-[auto] mx-[auto] w-[87%]">
                          <div className="bg-amber_A200 h-[13px] w-[100%]"></div>
                          <div className="bg-amber_A200 h-[13px] w-[63%]"></div>
                        </div>
                        <Text
                          className="absolute font-extrabold h-[100%] inset-[0] justify-center leading-[110.00%] m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[100%]"
                          variant="body5"
                        >
                          THE DARK LIGHT
                        </Text>
                      </div>
                      <Text
                        className="font-cardo font-normal italic leading-[160.00%] text-center text-indigo_900 tracking-[-0.10px] sm:w-[100%] w-[95%]"
                        variant="body22"
                      >
                        There are many variations of passages of Lorem Ipsum
                        majority have suffered alteration in some form.
                      </Text>
                      <div className="flex flex-row font-inter items-start justify-center mt-[5px] md:w-[100%] w-[23%]">
                        <Line className="bg-indigo_900 h-[1px] my-[4px] w-[32%]" />
                        <Text
                          className="ml-[7px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          *
                        </Text>
                        <Line className="bg-indigo_900 h-[1px] ml-[7px] my-[4px] w-[32%]" />
                      </div>
                      <div className="font-cardo md:h-[215px] h-[217px] mt-[7px] relative w-[86%]">
                        <div className="absolute flex md:h-[208px] h-[216px] inset-y-[0] justify-end left-[0] my-[auto] w-[91%]">
                          <Text
                            className="absolute bottom-[0] font-normal inset-x-[0] italic mx-[auto] text-center text-indigo_900 tracking-[-0.10px] w-[max-content]"
                            variant="body22"
                          >
                            The majority have suffered alteration in some form.
                          </Text>
                          <Text
                            className="mb-[14px] mt-[auto] mx-[auto] text-center text-indigo_900 w-[auto]"
                            variant="body18"
                          >
                            -John Abraham-
                          </Text>
                          <div className="absolute flex font-inter h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[5px] w-[84%]">
                            <div className="flex flex-col justify-end mb-[34px] mt-[3px] md:w-[100%] w-[93%]">
                              <div className="h-[152px] md:h-[87px] relative w-[100%]">
                                <div className="absolute h-[132px] md:h-[87px] right-[0] top-[0] w-[133px]">
                                  <div className="absolute h-[131px] md:h-[87px] inset-y-[0] my-[auto] right-[0] w-[78%]">
                                    <Img
                                      src="images/img_vector12.png"
                                      className="absolute bottom-[0] h-[87px] object-cover right-[0] w-[auto]"
                                      alt="VectorTwelve"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex h-[76px] items-end justify-end left-[0] p-[11px] top-[0] w-[76px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group9.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_contrast.svg"
                                        className="h-[20px] mr-[9px] mt-[33px] w-[20px]"
                                        alt="contrast"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_map.svg"
                                    className="absolute h-[7px] left-[35%] top-[0] w-[7px]"
                                    alt="map"
                                  />
                                  <Img
                                    src="images/img_checkmark.svg"
                                    className="absolute h-[67px] left-[0] top-[8%] w-[auto]"
                                    alt="checkmark"
                                  />
                                </div>
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="absolute bottom-[0] h-[56px] left-[6%] w-[auto]"
                                  alt="arrowdown One"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[38%] flex h-[22px] items-center justify-start left-[0] p-[6px] w-[22px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group10.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_contrast_indigo_900.svg"
                                    className="h-[8px] w-[9px]"
                                    alt="contrast One"
                                  />
                                </div>
                                <Text
                                  className="absolute bottom-[0] font-extrabold leading-[200.00%] right-[3%] text-center text-indigo_900 tracking-[1.50px] uppercase sm:w-[100%] w-[59%]"
                                  variant="body22"
                                >
                                  THE GREAT TOOLKIT FOR WOMEN’S LIFE
                                </Text>
                              </div>
                              <Line className="bg-indigo_900 h-[4px] md:ml-[0] ml-[9px] mr-[81px] w-[37%]" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-amber_A200_87 flex items-center justify-start p-[5px] right-[0] rounded-[41px] top-[0] w-[82px]">
                          <div className="bg-amber_A200 flex flex-col items-center justify-center p-[6px] rounded-[36px] md:w-[100%] w-[72px]">
                            <Text
                              className="font-bold mt-[7px] text-center text-indigo_900 w-[auto]"
                              variant="body22"
                            >
                              Majority
                            </Text>
                            <Text
                              className="font-normal italic leading-[150.00%] mb-[7px] text-center text-indigo_900 tracking-[-0.07px] sm:w-[100%] w-[99%]"
                              as="h3"
                              variant="h3"
                            >
                              The majority have suffered alteration in some
                              form.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[401px]">
                  <div className="flex flex-col font-inter gap-[9px] items-start justify-start sm:w-[100%] w-[401px]">
                    <div className="flex flex-row gap-[99px] items-center justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                        variant="body6"
                      >
                        The Dark Light
                      </Text>
                      <Text
                        className="font-inter text-amber_A200 text-right tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        $23.89
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[401px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        Many variations of passages of Lorem Ipsum willing
                        araise alteration in some form.
                      </Text>
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[46%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Printed Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-cardo min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="OutlineAmberA200_1"
                  >
                    Order Today
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[401px]">
                <div className="bg-gray_50 md:h-[400px] h-[500px] p-[18px] relative w-[100%]">
                  <div className="absolute bg-white_A700 border-[12px] border-gray_302 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[9px] shadow-bs2 w-[75%]">
                    <div className="bg-gray_53 flex items-center justify-start shadow-bs1 w-[100%]">
                      <div className="bg-gray_52 flex flex-col items-center justify-end p-[12px] w-[100%]">
                        <div className="flex font-lexend h-[80px] justify-end relative w-[90%]">
                          <div className="flex flex-col gap-[26px] h-[100%] items-center justify-start mb-[7px] mt-[auto] mx-[auto] w-[87%]">
                            <div className="bg-amber_A200 h-[13px] w-[100%]"></div>
                            <div className="bg-amber_A200 h-[13px] w-[63%]"></div>
                          </div>
                          <Text
                            className="absolute font-extrabold h-[100%] inset-[0] justify-center leading-[110.00%] m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[100%]"
                            variant="body5"
                          >
                            THE DARK LIGHT
                          </Text>
                        </div>
                        <Text
                          className="font-cardo font-normal italic leading-[160.00%] text-center text-indigo_900 tracking-[-0.10px] sm:w-[100%] w-[95%]"
                          variant="body22"
                        >
                          There are many variations of passages of Lorem Ipsum
                          majority have suffered alteration in some form.
                        </Text>
                        <div className="flex flex-row font-inter items-start justify-center mt-[5px] md:w-[100%] w-[23%]">
                          <Line className="bg-indigo_900 h-[1px] my-[4px] w-[32%]" />
                          <Text
                            className="ml-[7px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            *
                          </Text>
                          <Line className="bg-indigo_900 h-[1px] ml-[7px] my-[4px] w-[32%]" />
                        </div>
                        <div className="font-cardo md:h-[215px] h-[217px] mt-[7px] relative w-[86%]">
                          <div className="absolute flex md:h-[208px] h-[216px] inset-y-[0] justify-end left-[0] my-[auto] w-[91%]">
                            <Text
                              className="absolute bottom-[0] font-normal inset-x-[0] italic mx-[auto] text-center text-indigo_900 tracking-[-0.10px] w-[max-content]"
                              variant="body22"
                            >
                              The majority have suffered alteration in some
                              form.
                            </Text>
                            <Text
                              className="mb-[14px] mt-[auto] mx-[auto] text-center text-indigo_900 w-[auto]"
                              variant="body18"
                            >
                              -John Abraham-
                            </Text>
                            <div className="absolute flex font-inter h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[5px] w-[84%]">
                              <div className="flex flex-col justify-end mb-[34px] mt-[3px] md:w-[100%] w-[93%]">
                                <div className="h-[152px] md:h-[87px] relative w-[100%]">
                                  <div className="absolute h-[132px] md:h-[87px] right-[0] top-[0] w-[133px]">
                                    <div className="absolute h-[131px] md:h-[87px] inset-y-[0] my-[auto] right-[0] w-[78%]">
                                      <Img
                                        src="images/img_vector12.png"
                                        className="absolute bottom-[0] h-[87px] object-cover right-[0] w-[auto]"
                                        alt="VectorTwelve One"
                                      />
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex h-[76px] items-end justify-end left-[0] p-[11px] top-[0] w-[76px]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group9.svg')",
                                        }}
                                      >
                                        <Img
                                          src="images/img_contrast.svg"
                                          className="h-[20px] mr-[9px] mt-[33px] w-[20px]"
                                          alt="contrast One"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_map.svg"
                                      className="absolute h-[7px] left-[35%] top-[0] w-[7px]"
                                      alt="map One"
                                    />
                                    <Img
                                      src="images/img_checkmark.svg"
                                      className="absolute h-[67px] left-[0] top-[8%] w-[auto]"
                                      alt="checkmark One"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_arrowdown.svg"
                                    className="absolute bottom-[0] h-[56px] left-[6%] w-[auto]"
                                    alt="arrowdown Two"
                                  />
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[38%] flex h-[22px] items-center justify-start left-[0] p-[6px] w-[22px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group10.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_contrast_indigo_900.svg"
                                      className="h-[8px] w-[9px]"
                                      alt="contrast One One"
                                    />
                                  </div>
                                  <Text
                                    className="absolute bottom-[0] font-extrabold leading-[200.00%] right-[3%] text-center text-indigo_900 tracking-[1.50px] uppercase sm:w-[100%] w-[59%]"
                                    variant="body22"
                                  >
                                    THE GREAT TOOLKIT FOR WOMEN’S LIFE
                                  </Text>
                                </div>
                                <Line className="bg-indigo_900 h-[4px] md:ml-[0] ml-[9px] mr-[81px] w-[37%]" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-amber_A200_87 flex items-center justify-start p-[5px] right-[0] rounded-[41px] top-[0] w-[82px]">
                            <div className="bg-amber_A200 flex flex-col items-center justify-center p-[6px] rounded-[36px] md:w-[100%] w-[72px]">
                              <Text
                                className="font-bold mt-[7px] text-center text-indigo_900 w-[auto]"
                                variant="body22"
                              >
                                Majority
                              </Text>
                              <Text
                                className="font-normal italic leading-[150.00%] mb-[7px] text-center text-indigo_900 tracking-[-0.07px] sm:w-[100%] w-[99%]"
                                as="h3"
                                variant="h3"
                              >
                                The majority have suffered alteration in some
                                form.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-amber_A200 bottom-[4%] flex h-[78px] items-center justify-start p-[15px] right-[5%] rounded-[50%] w-[78px]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[41px] mb-[6px] w-[41px]"
                      alt="music One"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[401px]">
                  <div className="flex flex-col font-inter gap-[9px] items-start justify-start sm:w-[100%] w-[401px]">
                    <div className="flex flex-row gap-[99px] items-center justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                        variant="body6"
                      >
                        The Dark Light
                      </Text>
                      <Text
                        className="font-inter text-amber_A200 text-right tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        $23.89
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[401px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        Many variations of passages of Lorem Ipsum willing
                        araise alteration in some form.
                      </Text>
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[46%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Printed Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-cardo min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="OutlineAmberA200_1"
                  >
                    Order Today
                  </Button>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[401px]">
                <div className="h-[500px] relative w-[100%]">
                  <div className="h-[500px] m-[auto] w-[100%]">
                    <div className="bg-gray_50 h-[500px] m-[auto] w-[100%]"></div>
                    <div className="absolute bg-gray_53 border-[4px] border-gray_303 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] shadow-bs1 w-[75%]">
                      <div className="bg-white_A700 border-[12px] border-gray_302 border-solid flex items-center justify-start p-[10px] shadow-bs2 w-[100%]">
                        <div className="bg-gray_52 flex flex-col items-center justify-end p-[12px] w-[100%]">
                          <div className="flex font-lexend h-[80px] justify-end relative w-[90%]">
                            <div className="flex flex-col gap-[26px] h-[100%] items-center justify-start mb-[7px] mt-[auto] mx-[auto] w-[87%]">
                              <div className="bg-amber_A200 h-[13px] w-[100%]"></div>
                              <div className="bg-amber_A200 h-[13px] w-[63%]"></div>
                            </div>
                            <Text
                              className="absolute font-extrabold h-[100%] inset-[0] justify-center leading-[110.00%] m-[auto] text-center text-indigo_900 tracking-[1.75px] w-[100%]"
                              variant="body5"
                            >
                              THE DARK LIGHT
                            </Text>
                          </div>
                          <Text
                            className="font-cardo font-normal italic leading-[160.00%] text-center text-indigo_900 tracking-[-0.10px] sm:w-[100%] w-[95%]"
                            variant="body22"
                          >
                            There are many variations of passages of Lorem Ipsum
                            majority have suffered alteration in some form.
                          </Text>
                          <div className="flex flex-row font-inter items-start justify-center mt-[5px] md:w-[100%] w-[23%]">
                            <Line className="bg-indigo_900 h-[1px] my-[4px] w-[32%]" />
                            <Text
                              className="ml-[7px] text-center text-indigo_900 tracking-[1.20px] uppercase w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              *
                            </Text>
                            <Line className="bg-indigo_900 h-[1px] ml-[7px] my-[4px] w-[32%]" />
                          </div>
                          <div className="font-cardo md:h-[215px] h-[217px] mt-[7px] relative w-[86%]">
                            <div className="absolute flex md:h-[208px] h-[216px] inset-y-[0] justify-end left-[0] my-[auto] w-[91%]">
                              <Text
                                className="absolute bottom-[0] font-normal inset-x-[0] italic mx-[auto] text-center text-indigo_900 tracking-[-0.10px] w-[max-content]"
                                variant="body22"
                              >
                                The majority have suffered alteration in some
                                form.
                              </Text>
                              <Text
                                className="mb-[14px] mt-[auto] mx-[auto] text-center text-indigo_900 w-[auto]"
                                variant="body18"
                              >
                                -John Abraham-
                              </Text>
                              <div className="absolute flex font-inter h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[5px] w-[84%]">
                                <div className="flex flex-col justify-end mb-[34px] mt-[3px] md:w-[100%] w-[93%]">
                                  <div className="h-[152px] md:h-[87px] relative w-[100%]">
                                    <div className="absolute h-[132px] md:h-[87px] right-[0] top-[0] w-[133px]">
                                      <div className="absolute h-[131px] md:h-[87px] inset-y-[0] my-[auto] right-[0] w-[78%]">
                                        <Img
                                          src="images/img_vector12.png"
                                          className="absolute bottom-[0] h-[87px] object-cover right-[0] w-[auto]"
                                          alt="VectorTwelve Two"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex h-[76px] items-end justify-end left-[0] p-[11px] top-[0] w-[76px]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group9.svg')",
                                          }}
                                        >
                                          <Img
                                            src="images/img_contrast.svg"
                                            className="h-[20px] mr-[9px] mt-[33px] w-[20px]"
                                            alt="contrast Two"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_map.svg"
                                        className="absolute h-[7px] left-[35%] top-[0] w-[7px]"
                                        alt="map Two"
                                      />
                                      <Img
                                        src="images/img_checkmark.svg"
                                        className="absolute h-[67px] left-[0] top-[8%] w-[auto]"
                                        alt="checkmark Two"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_arrowdown.svg"
                                      className="absolute bottom-[0] h-[56px] left-[6%] w-[auto]"
                                      alt="arrowdown Three"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[38%] flex h-[22px] items-center justify-start left-[0] p-[6px] w-[22px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group10.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_contrast_indigo_900.svg"
                                        className="h-[8px] w-[9px]"
                                        alt="contrast One Two"
                                      />
                                    </div>
                                    <Text
                                      className="absolute bottom-[0] font-extrabold leading-[200.00%] right-[3%] text-center text-indigo_900 tracking-[1.50px] uppercase sm:w-[100%] w-[59%]"
                                      variant="body22"
                                    >
                                      THE GREAT TOOLKIT FOR WOMEN’S LIFE
                                    </Text>
                                  </div>
                                  <Line className="bg-indigo_900 h-[4px] md:ml-[0] ml-[9px] mr-[81px] w-[37%]" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-amber_A200_87 flex items-center justify-start p-[5px] right-[0] rounded-[41px] top-[0] w-[82px]">
                              <div className="bg-amber_A200 flex flex-col items-center justify-center p-[6px] rounded-[36px] md:w-[100%] w-[72px]">
                                <Text
                                  className="font-bold mt-[7px] text-center text-indigo_900 w-[auto]"
                                  variant="body22"
                                >
                                  Majority
                                </Text>
                                <Text
                                  className="font-normal italic leading-[150.00%] mb-[7px] text-center text-indigo_900 tracking-[-0.07px] sm:w-[100%] w-[99%]"
                                  as="h3"
                                  variant="h3"
                                >
                                  The majority have suffered alteration in some
                                  form.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_mockup11.png"
                    className="absolute bottom-[5%] h-[91px] object-cover right-[5%] w-[24%]"
                    alt="MockupEleven One"
                  />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[401px]">
                  <div className="flex flex-col font-inter gap-[9px] items-start justify-start sm:w-[100%] w-[401px]">
                    <div className="flex flex-row gap-[99px] items-center justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                        variant="body6"
                      >
                        The Dark Light
                      </Text>
                      <Text
                        className="font-inter text-amber_A200 text-right tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        $23.89
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start sm:w-[100%] w-[401px]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[401px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        Many variations of passages of Lorem Ipsum willing
                        araise alteration in some form.
                      </Text>
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[46%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Printed Books
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold font-cardo min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="OutlineAmberA200_1"
                  >
                    Order Today
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-amber_A200 flex items-center justify-start max-w-[1300px] mt-[150px] mx-[auto] md:px-[20px] px-[230px] py-[121px] w-[100%]">
          <div className="flex flex-col gap-[38px] items-center justify-start max-w-[840px] w-[100%]">
            <div className="flex flex-col gap-[20px] items-center justify-start max-w-[657px] w-[100%]">
              <div className="flex flex-col font-cardo gap-[17px] items-center justify-start sm:w-[100%] w-[467px]">
                <Text
                  className="text-center text-indigo_900 tracking-[-0.90px] w-[auto]"
                  variant="body2"
                >
                  Read a free chapter
                </Text>
                <Line className="bg-indigo_900 h-[3px] w-[12%]" />
              </div>
              <Text
                className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[657px] not-italic text-center text-indigo_900 tracking-[-0.19px]"
                variant="body14"
              >
                Making this the first true value generator on the Internet. It
                of over 200 Latin words, combined with a handful.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[11px] items-center justify-start max-w-[840px] w-[100%]">
              <Input
                className="flex-1 font-inter font-normal not-italic p-[0] text-[17px] placeholder:text-gray_500 text-gray_500 text-left tracking-[-0.17px] w-[100%]"
                wrapClassName="md:w-[100%] sm:w-[100%] w-[63%]"
                type="email"
                name="Name Four"
                placeholder="Your Email id..."
                size="lg"
                variant="FillWhiteA700"
              ></Input>
              <Button
                className="cursor-pointer font-bold font-cardo text-[19px] text-center text-white_A700 tracking-[0.38px] w-[300px]"
                size="md"
                variant="FillIndigo900"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-[150px] md:px-[20px] w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex h-[510px] items-center justify-center p-[23px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group115.svg')" }}
          >
            <div className="flex flex-col md:gap-[40px] gap-[77px] h-[403px] md:h-[auto] items-center justify-start mt-[60px] md:w-[100%] w-[auto]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1298px] w-[100%]">
                <div className="flex flex-col gap-[27px] items-start justify-start w-[250px]">
                  <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] w-[52%]">
                    <Img
                      src="images/img_bookmark.svg"
                      className="h-[29px] w-[auto]"
                      alt="bookmark One"
                    />
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      variant="body7"
                    >
                      Pages
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[250px]">
                    <Button
                      className="common-pointer flex h-[55px] items-center justify-center w-[55px]"
                      onClick={handleNavigate21}
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="facebook One"
                      />
                    </Button>
                    <Button
                      className="common-pointer flex h-[55px] items-center justify-center w-[55px]"
                      onClick={handleNavigate22}
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="twitter One"
                      />
                    </Button>
                    <Button className="flex h-[55px] items-center justify-center w-[55px]">
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="linkedin One"
                      />
                    </Button>
                    <Button className="flex h-[55px] items-center justify-center w-[55px]">
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="instagram"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row font-cardo md:gap-[40px] gap-[65px] items-start justify-end max-w-[867px] w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[22%]">
                    <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body10"
                      >
                        Explore
                      </Text>
                      <div className="flex flex-row font-inter gap-[19px] items-center justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[98%]">
                        <ul className="flex flex-col items-center justify-start md:w-[100%] w-[12%] common-column-list">
                          <li className="w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon One"
                            />
                          </li>
                          <li className="mt-[33px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Two"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Three"
                            />
                          </li>
                          <li className="mt-[35px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Four"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Five"
                            />
                          </li>
                        </ul>
                        <Text
                          className="font-normal leading-[205.00%] not-italic text-indigo_101 text-left tracking-[-0.18px]"
                          variant="body15"
                        >
                          Home
                          <br />
                          About Us
                          <br />
                          Services
                          <br />
                          Appointments
                          <br />
                          Blog
                          <br />
                          Contact Us
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[27%]">
                    <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body10"
                      >
                        Utility Pages
                      </Text>
                      <div className="flex flex-row font-inter gap-[18px] items-center justify-start w-[100%]">
                        <ul className="flex md:flex-1 flex-col items-center justify-start w-[10%] md:w-[100%] common-column-list">
                          <li className="w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Six"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Seven"
                            />
                          </li>
                          <li className="mt-[33px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Eight"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Nine"
                            />
                          </li>
                          <li className="mt-[35px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Ten"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Eleven"
                            />
                          </li>
                        </ul>
                        <Text
                          className="font-normal leading-[205.00%] not-italic text-indigo_101 text-left tracking-[-0.18px]"
                          variant="body15"
                        >
                          Start here
                          <br />
                          Style guide
                          <br />
                          404 not found
                          <br />
                          Password protected
                          <br />
                          Licenses
                          <br />
                          Changelog
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[29px] items-start justify-start w-[322px]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                      variant="body10"
                    >
                      Keep in Touch
                    </Text>
                    <ul className="flex flex-col gap-[15px] items-start justify-start md:w-[100%] w-[322px] common-column-list">
                      <li className="w-[100%]">
                        <div className="cursor-pointer flex flex-row gap-[14px] items-start justify-start">
                          <Text
                            className="font-bold font-cardo text-center text-white_A700 tracking-[0.36px] w-[auto]"
                            variant="body15"
                          >
                            Address :
                          </Text>
                          <Text
                            className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[232px] not-italic text-indigo_101 text-left tracking-[-0.18px]"
                            variant="body15"
                          >
                            24A Kingston St, Los Vegas NC 28202, USA.
                          </Text>
                        </div>
                      </li>
                      <li className="w-[87%]">
                        <div className="cursor-pointer flex flex-row gap-[40px] items-center justify-start">
                          <Text
                            className="font-bold font-cardo text-center text-white_A700 tracking-[0.36px] w-[auto]"
                            variant="body15"
                          >
                            Mail :
                          </Text>
                          <Text
                            className="font-inter font-normal not-italic text-indigo_101 text-left tracking-[-0.18px] w-[auto]"
                            variant="body15"
                          >
                            support@doctors.com
                          </Text>
                        </div>
                      </li>
                      <li className="w-[88%]">
                        <div className="cursor-pointer flex flex-row gap-[24px] items-center justify-start">
                          <Text
                            className="font-bold font-cardo text-center text-white_A700 tracking-[0.36px] w-[auto]"
                            variant="body15"
                          >
                            Phone :
                          </Text>
                          <Text
                            className="font-inter font-normal not-italic text-indigo_101 text-left tracking-[-0.18px] w-[auto]"
                            variant="body15"
                          >
                            (+22) 123 - 4567 - 900
                          </Text>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-cardo gap-[18px] items-center justify-start max-w-[1300px] w-[100%]">
                <Line className="bg-white_A700_6c h-[1px] w-[100%]" />
                <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-center md:w-[100%] w-[30%]">
                  <Text
                    className="font-bold text-center text-indigo_101 tracking-[0.38px] w-[auto]"
                    variant="body14"
                  >
                    ©
                  </Text>
                  <div className="flex font-inter items-center justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-indigo_101 text-left tracking-[-0.17px] w-[auto]"
                      variant="body16"
                    >
                      <span className="text-indigo_101 text-[17px] font-inter">
                        Drafted by{" "}
                      </span>
                      <span className="text-white_A700 text-[17px] font-inter font-medium">
                        Victorflow
                      </span>
                      <span className="text-indigo_101 text-[17px] font-inter">
                        {" "}
                        - Powered by{" "}
                      </span>
                      <span className="text-white_A700 text-[17px] font-inter font-medium">
                        Webflow
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StorePage;
