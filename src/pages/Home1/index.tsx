import React from "react";

import { Img, Text, Button, Line, List, Input } from "components";

const Home1Page: React.FC = () => {
  function handleNavigate30() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate36() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate37() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate38() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-indigo_900 flex flex-col md:gap-[40px] gap-[95px] items-center justify-start p-[40px] sm:px-[20px] w-[100%]">
          <header className="flex md:flex-col flex-row gap-[251px] md:gap-[40px] items-center justify-center md:px-[20px] w-[100%]">
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
                    onClick={handleNavigate36}
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
                    onClick={handleNavigate37}
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
          <div className="flex md:flex-col flex-row font-cardo md:gap-[40px] gap-[95px] items-center justify-start max-w-[1301px] mb-[75px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[614px]">
              <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[35%]">
                <Line className="bg-amber_A200 h-[1px] my-[15px] w-[17%]" />
                <Text
                  className="font-normal italic text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                  variant="body10"
                >
                  Welcome to Pages
                </Text>
              </div>
              <div className="flex flex-col gap-[49px] items-start justify-start md:w-[100%] w-[614px]">
                <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[614px]">
                  <Text
                    className="font-cardo leading-[110.00%] text-left text-white_A700 tracking-[-1.30px]"
                    as="h4"
                    variant="h4"
                  >
                    Books are uniquely
                    <br />
                    portable magic{" "}
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[575px] not-italic text-indigo_100 text-left tracking-[-0.19px]"
                    variant="body14"
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-start sm:w-[100%] w-[414px]">
                  <Button
                    className="cursor-pointer font-bold min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                    size="md"
                    variant="FillAmberA200"
                  >
                    Order Today
                  </Button>
                  <div className="flex flex-col items-center justify-start sm:w-[100%] w-[38%]">
                    <Text
                      className="font-bold text-center text-white_A700 tracking-[0.38px] w-[auto]"
                      variant="body14"
                    >
                      Read Free Demo
                    </Text>
                    <Line className="bg-white_A700 h-[1px] mt-[3px] w-[100%]" />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[80px] items-center justify-start sm:w-[100%] w-[580px]">
                  <div className="flex items-center justify-start sm:w-[100%] w-[20%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start mr-[17px] md:w-[100%] w-[85%]">
                        <div className="bg-amber_A200 h-[16px] mb-[10px] mt-[6px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Pages:
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal md:ml-[0] ml-[29px] mt-[4px] not-italic text-indigo_100 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        586pages
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:w-[100%] w-[20%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start w-[100%]">
                        <div className="bg-amber_A200 h-[16px] my-[8px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Length:
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal md:ml-[0] ml-[29px] mt-[3px] not-italic text-indigo_100 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        10 Hours
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:w-[100%] w-[32%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-row font-cardo gap-[13px] items-center justify-start md:w-[100%] w-[65%]">
                        <div className="bg-amber_A200 h-[16px] mb-[10px] mt-[6px] rounded-[50%] w-[16px]"></div>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Ratings:
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal md:ml-[0] ml-[29px] mt-[3px] not-italic text-indigo_100 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        4.5/5 (305 ratings)
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border-[12px] border-gray_302 border-solid flex md:flex-1 items-center justify-start p-[10px] md:w-[100%] w-[46%]">
              <div className="bg-gray_52 flex flex-col gap-[13px] items-center justify-end p-[32px] sm:px-[20px] w-[100%]">
                <div className="flex items-center justify-start mt-[3px] sm:w-[100%] w-[487px]">
                  <div className="flex flex-col gap-[3px] items-center justify-start sm:w-[100%] w-[487px]">
                    <div className="flex font-lexend h-[164px] justify-end relative sm:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[49px] h-[100%] items-center justify-start mb-[22px] mt-[auto] mx-[auto] w-[87%]">
                        <div className="bg-amber_A200 h-[28px] w-[100%]"></div>
                        <div className="bg-amber_A200 h-[28px] w-[63%]"></div>
                      </div>
                      <Text
                        className="absolute h-[100%] inset-[0] justify-center leading-[110.00%] m-[auto] text-center text-indigo_900 tracking-[3.50px] w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        THE DARK LIGHT
                      </Text>
                    </div>
                    <Text
                      className="font-cardo font-normal italic leading-[160.00%] md:max-w-[100%] max-w-[487px] text-center text-indigo_900 tracking-[-0.18px]"
                      variant="body15"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </Text>
                  </div>
                </div>
                <div className="md:h-[328px] h-[474px] relative sm:w-[100%] w-[84%]">
                  <div className="absolute md:h-[328px] h-[469px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="absolute bottom-[0] md:h-[328px] h-[424px] left-[0] w-[87%]">
                      <div className="absolute bottom-[0] flex flex-col gap-[10px] items-center justify-end right-[0] w-[310px]">
                        <Text
                          className="font-bold text-center text-indigo_900 w-[auto]"
                          variant="body9"
                        >
                          -John Abraham-
                        </Text>
                        <Text
                          className="italic text-center text-indigo_900 tracking-[-0.16px] w-[auto]"
                          variant="body17"
                        >
                          The majority have suffered alteration in some form.
                        </Text>
                      </div>
                      <div className="absolute font-inter md:h-[328px] h-[424px] inset-y-[0] left-[0] my-[auto] pb-[45px] sm:pr-[20px] md:pr-[40px] pr-[45px] w-[94%]">
                        <Img
                          src="images/img_lamp.png"
                          className="h-[328px] object-cover w-[auto]"
                          alt="Lamp"
                        />
                        <Text
                          className="absolute bottom-[17%] font-extrabold leading-[200.00%] right-[16%] text-center text-indigo_900 tracking-[3.00px] uppercase sm:w-[100%] w-[52%]"
                          variant="body12"
                        >
                          THE GREAT TOOLKIT FOR WOMEN’S LIFE
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-amber_A200_87 flex h-[163px] items-center justify-start p-[9px] right-[0] rounded-[81px] top-[0] w-[163px]">
                      <div className="bg-amber_A200 flex h-[145px] items-center justify-start p-[12px] rounded-[72px] w-[145px]">
                        <div className="flex flex-col items-center justify-start my-[14px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-center text-indigo_900 w-[auto]"
                            variant="body12"
                          >
                            Majority
                          </Text>
                          <Text
                            className="font-normal italic leading-[150.00%] text-center text-indigo_900 tracking-[-0.14px] w-[100%]"
                            variant="body19"
                          >
                            The majority have suffered alteration in some form.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row font-inter items-start justify-center left-[32%] top-[0] w-[30%]">
                    <Line className="bg-indigo_900 h-[2px] mb-[9px] mt-[13px] w-[31%]" />
                    <Text
                      className="font-extrabold ml-[17px] text-center text-indigo_900 tracking-[3.00px] uppercase w-[auto]"
                      variant="body12"
                    >
                      *
                    </Text>
                    <Line className="bg-indigo_900 h-[2px] mb-[9px] ml-[18px] mt-[13px] w-[31%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-cardo gap-[57px] items-center justify-start max-w-[1299px] mt-[137px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[22px] items-center justify-start md:w-[100%] w-[37%]">
            <Text
              className="text-center text-indigo_900 tracking-[-0.90px] w-[auto]"
              variant="body2"
            >
              Author’s Book Includes
            </Text>
            <Line className="bg-amber_A200 h-[3px] w-[12%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[66px] items-start justify-center max-w-[1299px] w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[40px] items-center justify-start md:w-[100%] w-[621px]">
              <div className="bg-gray_53 border-[4px] border-gray_303 border-solid flex items-center justify-start pt-[4px] px-[4px] shadow-bs1 md:w-[100%] w-[49%]">
                <div
                  className="bg-cover bg-no-repeat flex h-[396px] items-center justify-start p-[12px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7.svg')" }}
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
              <div className="flex flex-col gap-[30px] items-start justify-start w-[281px]">
                <div className="flex flex-col gap-[14px] items-start justify-start w-[262px]">
                  <Text
                    className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                    variant="body6"
                  >
                    Atomic One’s
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[262px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                    variant="body14"
                  >
                    Many variations of passages of Lorem Ipsum willing araise
                    alteration in some form.
                  </Text>
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[98%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <div className="bg-amber_A200 h-[16px] mb-[13px] mt-[4px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-bold ml-[13px] text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Pages:
                      </Text>
                      <div className="bg-amber_A200 h-[16px] mb-[13px] ml-[65px] mt-[4px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-bold ml-[13px] text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Length:
                      </Text>
                    </div>
                    <div className="flex flex-row font-inter gap-[77px] items-start justify-end ml-[auto] md:w-[100%] w-[87%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        586pages
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        10 Hours
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                  size="md"
                  variant="OutlineAmberA200_1"
                >
                  Order Today
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-[39px] items-center justify-start md:w-[100%] w-[612px]">
              <div className="bg-white_A700 border-[12px] border-gray_302 border-solid flex items-center justify-start p-[10px] shadow-bs2 md:w-[100%] w-[50%]">
                <div className="bg-gray_52 flex flex-col items-end justify-end p-[12px] w-[100%]">
                  <div className="flex font-lexend h-[80px] justify-end mr-[16px] relative w-[90%]">
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
                    className="font-cardo font-normal italic leading-[160.00%] mr-[10px] text-center text-indigo_900 tracking-[-0.10px] sm:w-[100%] w-[95%]"
                    variant="body22"
                  >
                    There are many variations of passages of Lorem Ipsum
                    majority have suffered alteration in some form.
                  </Text>
                  <div className="font-cardo md:h-[213px] h-[234px] mr-[13px] mt-[5px] relative w-[85%]">
                    <div className="absolute bottom-[0] flex md:h-[208px] h-[216px] justify-end left-[0] w-[93%]">
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
                    <div className="absolute flex md:h-[73px] h-[83px] justify-end pl-[2px] pt-[2px] right-[0] top-[3%] w-[82px]">
                      <div className="bg-amber_A200_87 h-[73px] mt-[auto] mx-[auto] rounded-[39px] w-[97%]"></div>
                      <div className="absolute bottom-[0] flex h-[68px] md:h-[73px] justify-end right-[2%] w-[88%]">
                        <div className="bg-amber_A200 h-[73px] mt-[auto] mx-[auto] rounded-[36px] w-[72px]"></div>
                        <div className="absolute bottom-[13%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                          <Text
                            className="font-bold text-center text-indigo_900 w-[auto]"
                            variant="body22"
                          >
                            Majority
                          </Text>
                          <Text
                            className="font-normal italic leading-[150.00%] text-center text-indigo_900 tracking-[-0.07px] w-[100%]"
                            as="h3"
                            variant="h3"
                          >
                            The majority have suffered alteration in some form.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row font-inter items-start justify-center left-[32%] top-[0] w-[27%]">
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
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-[273px]">
                <div className="flex flex-col gap-[14px] items-start justify-start w-[262px]">
                  <Text
                    className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                    variant="body6"
                  >
                    The Dark Light
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[262px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                    variant="body14"
                  >
                    Many variations of passages of Lorem Ipsum willing araise
                    alteration in some form.
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <div className="bg-amber_A200 h-[16px] mb-[13px] mt-[4px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-bold ml-[13px] text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Pages:
                      </Text>
                      <div className="bg-amber_A200 h-[16px] mb-[13px] ml-[63px] mt-[4px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-bold ml-[13px] text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Length:
                      </Text>
                    </div>
                    <div className="flex flex-row font-inter gap-[75px] items-start justify-end ml-[auto] md:w-[100%] w-[86%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        586pages
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        10 Hours
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[220px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                  size="md"
                  variant="OutlineAmberA200_1"
                >
                  Order Today
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_54 flex items-center justify-start max-w-[1919px] mt-[149px] sm:px-[20px] px-[310px] md:px-[40px] py-[150px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1299px] mx-[auto] w-[100%]">
            <div className="md:h-[650px] h-[690px] relative md:w-[100%] w-[46%]">
              <div className="absolute border-[12px] border-amber_A200 border-solid bottom-[0] h-[650px] right-[0] w-[94%]"></div>
              <div className="absolute bg-bluegray_100 flex items-center justify-start left-[0] shadow-bs3 top-[0] w-[94%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_photo_650x550.png"
                    className="h-[650px] md:h-[auto] object-cover w-[100%]"
                    alt="Photo"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[41px] items-start justify-start sm:w-[100%] w-[567px]">
              <div className="flex flex-col gap-[38px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[22px] items-start justify-start sm:w-[100%] w-[567px]">
                  <div className="flex flex-col font-cardo gap-[22px] items-start justify-start md:w-[100%] w-[50%]">
                    <Text
                      className="text-indigo_900 text-left tracking-[-0.90px] w-[auto]"
                      variant="body2"
                    >
                      About Author
                    </Text>
                    <Line className="bg-amber_A200 h-[3px] w-[20%]" />
                  </div>
                  <Text
                    className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[567px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                    variant="body14"
                  >
                    All the Lorem Ipsum generators on the Internet tend to
                    repeated predefined chunks as necessary, making this the
                    first true value generator on the Internet. It uses a
                    dictionary of over 200 Latin words, combined with a handful.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-start sm:w-[100%] w-[567px]">
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-cardo text-indigo_900 text-left tracking-[-1.10px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      02
                    </Text>
                    <Text
                      className="font-inter font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                      variant="body15"
                    >
                      Books Published
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[35px] items-end justify-center sm:w-[100%] w-[27%]">
                    <Line className="bg-amber_A200 h-[88px] mt-[9px] w-[1px]" />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-1.10px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        4.5
                      </Text>
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        User Reviews
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[34px] items-end justify-between sm:w-[100%] w-[34%]">
                    <Line className="bg-amber_A200 h-[88px] mt-[9px] w-[1px]" />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-cardo text-indigo_900 text-left tracking-[-1.10px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        04
                      </Text>
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        Best Seller Awards
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo_900 flex h-[160px] md:h-[auto] items-start justify-center px-[18px] py-[15px] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row gap-[37px] items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex h-[130px] items-center justify-start p-[16px] w-[130px]">
                    <Img
                      src="images/img_qrcode.svg"
                      className="h-[98px] w-[98px]"
                      alt="qrcode"
                    />
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[276px]">
                    <Text
                      className="font-cardo text-amber_A200 text-left tracking-[-0.44px] w-[auto]"
                      variant="body11"
                    >
                      John Abraham , Ph.d
                    </Text>
                    <Text
                      className="font-inter font-normal leading-[180.00%] not-italic text-indigo_101 text-left tracking-[-0.19px]"
                      variant="body14"
                    >
                      Mail : johnabraham@gmail.com
                      <br />
                      Phone : (+2) 123 545 9000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-cardo gap-[40px] items-center justify-start max-w-[1299px] mt-[130px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[15px] items-center justify-start md:w-[100%] w-[29%]">
            <Text
              className="text-center text-indigo_900 tracking-[-0.90px] w-[auto]"
              variant="body2"
            >
              Trusted by the Best
            </Text>
            <Line className="bg-amber_A200 h-[3px] w-[15%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[97px] items-start justify-center max-w-[1299px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[20%]">
              <Img
                src="images/img_profile.svg"
                className="h-[88px] w-[auto]"
                alt="profile"
              />
              <Text
                className="font-bold font-cardo mt-[29px] text-center text-indigo_900 tracking-[-0.24px] w-[auto]"
                variant="body10"
              >
                Amazen Corp
              </Text>
              <Text
                className="font-inter font-normal leading-[170.00%] mt-[4px] not-italic text-center text-gray_500 tracking-[-0.18px] w-[100%]"
                variant="body15"
              >
                A long established fact that a who looking at its layout.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[20%]">
              <Img
                src="images/img_logo.svg"
                className="h-[75px] w-[auto]"
                alt="Logo"
              />
              <Text
                className="font-bold font-cardo mt-[28px] text-center text-indigo_900 tracking-[-0.24px] w-[auto]"
                variant="body10"
              >
                Megan Books
              </Text>
              <Text
                className="font-inter font-normal leading-[170.00%] mt-[5px] not-italic text-center text-gray_500 tracking-[-0.18px] w-[100%]"
                variant="body15"
              >
                A long established fact that a who looking at its layout.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[20%]">
              <Img
                src="images/img_logo_indigo_900.svg"
                className="h-[88px] w-[auto]"
                alt="Logo One"
              />
              <Text
                className="font-bold font-cardo mt-[20px] text-center text-indigo_900 tracking-[-0.24px] w-[auto]"
                variant="body10"
              >
                Los Books
              </Text>
              <Text
                className="font-inter font-normal leading-[170.00%] mt-[9px] not-italic text-center text-gray_500 tracking-[-0.18px] w-[100%]"
                variant="body15"
              >
                A long established fact that a who looking at its layout.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[20%]">
              <Img
                src="images/img_globe.svg"
                className="h-[99px] w-[99px]"
                alt="globe"
              />
              <Text
                className="font-bold font-cardo mt-[15px] text-center text-indigo_900 tracking-[-0.24px] w-[auto]"
                variant="body10"
              >
                Urban Lib
              </Text>
              <Text
                className="font-inter font-normal leading-[170.00%] mt-[9px] not-italic text-center text-gray_500 tracking-[-0.18px] w-[100%]"
                variant="body15"
              >
                A long established fact that a who looking at its layout.
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-indigo_900 flex font-cardo items-center justify-end mt-[141px] p-[36px] sm:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1334px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[31px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[22px] items-start justify-start sm:w-[100%] w-[567px]">
                <div className="flex flex-col font-cardo gap-[15px] items-start justify-start md:w-[100%] w-[81%]">
                  <Text
                    className="text-left text-white_A700 tracking-[-0.90px] w-[auto]"
                    variant="body2"
                  >
                    Get Book Copy Today!
                  </Text>
                  <Line className="bg-amber_A200 h-[3px] w-[13%]" />
                </div>
                <Text
                  className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[567px] not-italic text-indigo_101 text-left tracking-[-0.19px]"
                  variant="body14"
                >
                  This the first true value generator on the Internet. It uses
                  alphas dictionary of over 200 Latin words.
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[220px] text-[19px] text-center text-white_A700 tracking-[0.38px] w-[auto]"
                size="md"
                variant="OutlineAmberA200_1"
              >
                Order Today
              </Button>
            </div>
            <Img
              src="images/img_photo_427x640.png"
              className="md:flex-1 h-[427px] sm:h-[auto] object-cover md:w-[100%] w-[640px]"
              alt="Photo One"
            />
          </div>
        </div>
        <div className="flex flex-col font-cardo gap-[53px] items-center justify-start max-w-[1300px] mt-[144px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[15px] items-center justify-start md:w-[100%] w-[32%]">
            <Text
              className="text-center text-indigo_900 tracking-[-0.90px] w-[auto]"
              variant="body2"
            >
              What will you learn?
            </Text>
            <Line className="bg-amber_A200 h-[3px] w-[14%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[99px] items-center justify-start max-w-[1300px] w-[100%]">
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[47%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="sm:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-gray_55 flex flex-1 items-start justify-start sm:px-[20px] px-[33px] py-[41px] w-[100%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-[224px]">
                      <Text
                        className="bg-amber_A200 flex font-bold h-[50px] items-center justify-center rounded-[50%] text-center text-indigo_900 tracking-[-0.24px] w-[50px]"
                        variant="body10"
                      >
                        01
                      </Text>
                      <Text
                        className="font-bold leading-[140.00%] md:max-w-[100%] max-w-[224px] text-indigo_900 text-left tracking-[-0.24px]"
                        variant="body10"
                      >
                        Use HDFS & Map Reduce for storing & analyzing data at
                        scale.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_55 flex flex-1 items-start justify-start sm:px-[20px] px-[33px] py-[41px] w-[100%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-[224px]">
                      <Text
                        className="bg-amber_A200 flex font-bold h-[50px] items-center justify-center rounded-[50%] text-center text-indigo_900 tracking-[-0.24px] w-[50px]"
                        variant="body10"
                      >
                        02
                      </Text>
                      <Text
                        className="font-bold leading-[140.00%] md:max-w-[100%] max-w-[224px] text-indigo_900 text-left tracking-[-0.24px]"
                        variant="body10"
                      >
                        Consume streaming data using Spark Streaming, Flink, and
                        Storm.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_55 flex flex-1 items-start justify-start sm:px-[20px] px-[33px] py-[41px] w-[100%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-[224px]">
                      <Text
                        className="bg-amber_A200 flex font-bold h-[50px] items-center justify-center rounded-[50%] text-center text-indigo_900 tracking-[-0.24px] w-[50px]"
                        variant="body10"
                      >
                        03
                      </Text>
                      <Text
                        className="font-bold leading-[140.00%] md:max-w-[100%] max-w-[224px] text-indigo_900 text-left tracking-[-0.24px]"
                        variant="body10"
                      >
                        Choose an appropriate data storage technology for your
                        application
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_55 flex flex-1 items-start justify-start sm:px-[20px] px-[33px] py-[41px] w-[100%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-[224px]">
                      <Text
                        className="bg-amber_A200 flex font-bold h-[50px] items-center justify-center rounded-[50%] text-center text-indigo_900 tracking-[-0.24px] w-[50px]"
                        variant="body10"
                      >
                        04
                      </Text>
                      <Text
                        className="font-bold leading-[140.00%] md:max-w-[100%] max-w-[224px] text-indigo_900 text-left tracking-[-0.24px]"
                        variant="body10"
                      >
                        Analyze non-relational data using HBase, Cassandra, and
                        MongoDB.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[650px] h-[690px] relative md:w-[100%] w-[46%]">
              <div className="absolute border-[12px] border-amber_A200 border-solid bottom-[0] h-[650px] right-[0] w-[94%]"></div>
              <div className="absolute bg-bluegray_100 flex items-center justify-start left-[0] top-[0] w-[94%]">
                <Img
                  src="images/img_photo_1.png"
                  className="h-[650px] md:h-[auto] object-cover w-[100%]"
                  alt="Photo Two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_54 flex font-cardo items-center justify-start max-w-[1920px] mt-[144px] sm:px-[20px] px-[310px] md:px-[40px] py-[148px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1300px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[15px] items-center justify-start md:w-[100%] w-[33%]">
              <Text
                className="text-center text-indigo_900 tracking-[-0.90px] w-[auto]"
                variant="body2"
              >
                The Chapter Includes
              </Text>
              <Line className="bg-amber_A200 h-[3px] w-[13%]" />
            </div>
            <div className="flex flex-col md:gap-[40px] gap-[79px] items-center justify-start max-w-[1300px] w-[100%]">
              <div className="flex items-center justify-start max-w-[1300px] w-[100%]">
                <div className="md:gap-[20px] gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[42px] sm:px-[20px] md:px-[40px] shadow-bs w-[100%]">
                    <Text
                      className="font-bold font-cardo md:ml-[0] ml-[11px] mt-[5px] text-indigo_900 text-left tracking-[-0.48px] w-[auto]"
                      variant="body10"
                    >
                      Chapter- 01 Get Started Intro
                    </Text>
                    <Text
                      className="font-inter font-normal leading-[180.00%] md:ml-[0] ml-[11px] mt-[10px] not-italic text-gray_500 text-left tracking-[-0.19px] sm:w-[100%] w-[96%]"
                      variant="body14"
                    >
                      Making this the first true value generator on the
                      Internet. It of over 200 Latin words, combined with a
                      handful.
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[9px] mr-[auto] mt-[25px] md:w-[100%] w-[86%]">
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Pages :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[7px] sm:mt-[0] mt-[5px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        85pages
                      </Text>
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:ml-[0] ml-[43px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Length :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[10px] sm:mt-[0] mt-[3px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        1 Hour 15 mins
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[42px] sm:px-[20px] md:px-[40px] shadow-bs w-[100%]">
                    <Text
                      className="font-bold font-cardo md:ml-[0] ml-[11px] mt-[5px] text-indigo_900 text-left tracking-[-0.48px] w-[auto]"
                      variant="body10"
                    >
                      Chapter- 02 Create a Massive Content
                    </Text>
                    <Text
                      className="font-inter font-normal leading-[180.00%] md:ml-[0] ml-[11px] mt-[10px] not-italic text-gray_500 text-left tracking-[-0.19px] sm:w-[100%] w-[96%]"
                      variant="body14"
                    >
                      Making this the first true value generator on the
                      Internet. It of over 200 Latin words, combined with a
                      handful.
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[9px] mr-[auto] mt-[25px] md:w-[100%] w-[86%]">
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Pages :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[7px] sm:mt-[0] mt-[5px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        85pages
                      </Text>
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:ml-[0] ml-[43px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Length :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[10px] sm:mt-[0] mt-[3px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        1 Hour 15 mins
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[42px] sm:px-[20px] md:px-[40px] shadow-bs w-[100%]">
                    <Text
                      className="font-bold font-cardo md:ml-[0] ml-[11px] mt-[5px] text-indigo_900 text-left tracking-[-0.48px] w-[auto]"
                      variant="body10"
                    >
                      Chapter- 03 Maintaining the Creative Arcs
                    </Text>
                    <Text
                      className="font-inter font-normal leading-[180.00%] md:ml-[0] ml-[11px] mt-[10px] not-italic text-gray_500 text-left tracking-[-0.19px] sm:w-[100%] w-[96%]"
                      variant="body14"
                    >
                      Making this the first true value generator on the
                      Internet. It of over 200 Latin words, combined with a
                      handful.
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[9px] mr-[auto] mt-[25px] md:w-[100%] w-[86%]">
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Pages :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[7px] sm:mt-[0] mt-[5px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        85pages
                      </Text>
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:ml-[0] ml-[43px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Length :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[10px] sm:mt-[0] mt-[3px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        1 Hour 15 mins
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[42px] sm:px-[20px] md:px-[40px] shadow-bs w-[100%]">
                    <Text
                      className="font-bold font-cardo md:ml-[0] ml-[11px] mt-[5px] text-indigo_900 text-left tracking-[-0.48px] w-[auto]"
                      variant="body10"
                    >
                      Chapter- 04 The Conclusion
                    </Text>
                    <Text
                      className="font-inter font-normal leading-[180.00%] md:ml-[0] ml-[11px] mt-[10px] not-italic text-gray_500 text-left tracking-[-0.19px] sm:w-[100%] w-[96%]"
                      variant="body14"
                    >
                      Making this the first true value generator on the
                      Internet. It of over 200 Latin words, combined with a
                      handful.
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[9px] mr-[auto] mt-[25px] md:w-[100%] w-[86%]">
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Pages :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[7px] sm:mt-[0] mt-[5px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        85pages
                      </Text>
                      <div className="bg-amber_A200 h-[16px] mb-[9px] sm:ml-[0] ml-[43px] sm:mt-[0] mt-[5px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-cardo sm:ml-[0] ml-[13px] text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        Length :
                      </Text>
                      <Text
                        className="font-inter font-normal sm:ml-[0] ml-[10px] sm:mt-[0] mt-[3px] not-italic text-gray_500 text-left tracking-[-0.18px] w-[auto]"
                        variant="body15"
                      >
                        1 Hour 15 mins
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-center justify-start sm:w-[100%] w-[434px]">
                <Button
                  className="cursor-pointer font-bold font-cardo text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[434px]"
                  size="md"
                  variant="FillAmberA200"
                >
                  Start a 15-Days Free Trail
                </Button>
                <Text
                  className="font-inter font-normal leading-[170.00%] not-italic text-center text-gray_500"
                  variant="body15"
                >
                  <span className="text-gray_500 text-[18px]">
                    Short description about each chapter
                    <br />
                  </span>
                  <a
                    href="javascript:"
                    className="text-indigo_900 text-[18px] underline"
                  >
                    Have any questions?
                  </a>
                  <span className="text-gray_500 text-[18px]"> Contact us</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-cardo md:gap-[40px] items-center justify-between max-w-[1299px] mt-[141px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-1 flex-col gap-[29px] items-start justify-start sm:w-[100%] w-[418px]">
            <div className="flex flex-col gap-[27px] items-start justify-start w-[326px]">
              <Text
                className="leading-[120.00%] md:max-w-[100%] max-w-[326px] text-indigo_900 text-left tracking-[-0.90px]"
                variant="body2"
              >
                What Readers Say About the Book
              </Text>
              <Line className="bg-amber_A200 h-[3px] w-[16%]" />
            </div>
            <div className="flex flex-col font-inter gap-[43px] items-start justify-start sm:w-[100%] w-[418px]">
              <Text
                className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[418px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                variant="body14"
              >
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&#39;t anything embarrassing hidden in the middle
                of text. All the Lorem Ipsum generators.
              </Text>
              <div className="flex items-center justify-start md:w-[100%] w-[54%]">
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row font-cardo gap-[10px] items-center justify-start md:w-[100%] w-[87%]">
                    <Img
                      src="images/img_group3.svg"
                      className="h-[20px] w-[auto]"
                      alt="GroupThree"
                    />
                    <Text
                      className="text-indigo_900 text-left tracking-[-0.22px] w-[auto]"
                      variant="body11"
                    >
                      (4.8/5)
                    </Text>
                  </div>
                  <Text
                    className="font-inter font-normal not-italic text-indigo_900 text-left tracking-[-0.19px] w-[auto]"
                    variant="body14"
                  >
                    Overall Customer Ratings
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[60%]">
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
              <List
                className="md:flex-1 flex-col gap-[31px] grid md:w-[100%] w-[49%]"
                orientation="vertical"
              >
                <div className="bg-indigo_900 flex items-start justify-start my-[0] sm:px-[20px] px-[31px] py-[36px] sm:w-[100%] w-[370px]">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-[308px]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[257px]">
                      <div className="bg-gray_400 flex h-[85px] items-center justify-start rounded-[42px] w-[85px]">
                        <Img
                          src="images/img_photo_85x85.png"
                          className="h-[85px] md:h-[auto] rotate-[-12deg] rounded-[50%] w-[85px]"
                          alt="Photo Three"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                          variant="body10"
                        >
                          Martin Philips
                        </Text>
                        <Img
                          src="images/img_ticket.svg"
                          className="h-[12px] w-[76px]"
                          alt="ticket"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[308px]">
                      <Text
                        className="font-cardo text-left text-white_A700 tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        “ Awesome Impact ”
                      </Text>
                      <Text
                        className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[308px] not-italic text-indigo_101 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat willings predefined chunks value.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo_900 flex items-start justify-start my-[0] sm:px-[20px] px-[31px] py-[36px] sm:w-[100%] w-[370px]">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-[308px]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[273px]">
                      <div className="bg-gray_400 flex h-[85px] items-center justify-start rounded-[42px] w-[85px]">
                        <Img
                          src="images/img_photo_2.png"
                          className="h-[85px] md:h-[auto] rotate-[-3deg] rounded-[50%] w-[85px]"
                          alt="Photo Four"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                          variant="body10"
                        >
                          James Anderson
                        </Text>
                        <Img
                          src="images/img_ticket.svg"
                          className="h-[12px] w-[76px]"
                          alt="ticket One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[308px]">
                      <Text
                        className="font-cardo text-left text-white_A700 tracking-[-0.22px] w-[auto]"
                        variant="body11"
                      >
                        “ Mind Blowing Words ”
                      </Text>
                      <Text
                        className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[308px] not-italic text-indigo_101 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat willings predefined chunks value.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-indigo_900 flex sm:flex-1 items-start justify-start mb-[130px] md:mt-[0] mt-[210px] sm:px-[20px] px-[31px] py-[36px] sm:w-[100%] w-[370px]">
                <div className="flex flex-col gap-[22px] items-start justify-start w-[308px]">
                  <div className="flex flex-row gap-[20px] items-center justify-start w-[268px]">
                    <div className="bg-gray_400 flex h-[85px] items-center justify-start rounded-[42px] w-[85px]">
                      <div className="h-[85px] relative w-[85px]">
                        <Img
                          src="images/img_photo_85x85.png"
                          className="h-[85px] m-[auto] rotate-[-12deg] rounded-[50%] w-[85px]"
                          alt="Photo Five"
                        />
                        <Img
                          src="images/img_pexelsmikhailnilov6957673.png"
                          className="absolute h-[85px] inset-[0] justify-center m-[auto] rounded-[50%] w-[85px]"
                          alt="pexelsmikhailnilov6957673"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body10"
                      >
                        Christina Louis
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="h-[12px] w-[76px]"
                        alt="ticket Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[308px]">
                    <Text
                      className="font-cardo text-left text-white_A700 tracking-[-0.22px] w-[auto]"
                      variant="body11"
                    >
                      “ Great Books Collections ”
                    </Text>
                    <Text
                      className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[308px] not-italic text-indigo_101 text-left tracking-[-0.19px]"
                      variant="body14"
                    >
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat willings predefined chunks value.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_54 flex font-cardo items-center justify-start max-w-[1920px] mt-[140px] sm:px-[20px] px-[310px] md:px-[40px] py-[145px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1300px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[22px] items-center justify-start md:w-[100%] w-[31%]">
              <Text
                className="text-indigo_900 text-left tracking-[-0.90px] w-[auto]"
                variant="body2"
              >
                Articles & Resources
              </Text>
              <Line className="bg-amber_A200 h-[3px] w-[14%]" />
            </div>
            <List
              className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1300px] w-[100%]"
              orientation="horizontal"
            >
              <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[410px]">
                <div className="bg-bluegray_100 flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_womanstandsin.png"
                    className="h-[326px] md:h-[auto] object-cover w-[100%]"
                    alt="Photo Six"
                  />
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] px-[31px] py-[27px] shadow-bs sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[27px] items-start justify-start w-[347px]">
                    <div className="flex flex-col gap-[14px] items-start justify-start w-[347px]">
                      <Text
                        className="font-bold font-cardo leading-[120.00%] md:max-w-[100%] max-w-[307px] text-indigo_900 text-left tracking-[-0.48px]"
                        variant="body10"
                      >
                        The energy efficiency offers hydrotherapy or swim
                      </Text>
                      <Text
                        className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[347px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        The point of using Lorem Ipsum hiter of that using
                        making it look like others readable will get end.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[91px] items-center justify-start w-[347px]">
                      <div className="flex flex-col font-cardo items-center justify-start w-[27%]">
                        <Text
                          className="font-bold text-center text-indigo_900 tracking-[0.36px] w-[auto]"
                          variant="body15"
                        >
                          Read more
                        </Text>
                        <Line className="bg-indigo_900 h-[1px] mt-[3px] w-[100%]" />
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-indigo_900 text-right w-[auto]"
                        variant="body16"
                      >
                        Author - 23.05.2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[410px]">
                <div className="bg-bluegray_100 flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_monicasaurosi.png"
                    className="h-[326px] md:h-[auto] object-cover w-[100%]"
                    alt="Photo Seven"
                  />
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] px-[31px] py-[27px] shadow-bs sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[27px] items-start justify-start w-[347px]">
                    <div className="flex flex-col gap-[14px] items-start justify-start w-[347px]">
                      <Text
                        className="font-bold font-cardo leading-[120.00%] md:max-w-[100%] max-w-[307px] text-indigo_900 text-left tracking-[-0.48px]"
                        variant="body10"
                      >
                        Release of Letraset sheets tools containing passages
                      </Text>
                      <Text
                        className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[347px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        The point of using Lorem Ipsum hiter of that using
                        making it look like others readable will get end.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[91px] items-center justify-start w-[347px]">
                      <div className="flex flex-col font-cardo items-center justify-start w-[27%]">
                        <Text
                          className="font-bold text-center text-indigo_900 tracking-[0.36px] w-[auto]"
                          variant="body15"
                        >
                          Read more
                        </Text>
                        <Line className="bg-indigo_900 h-[1px] mt-[3px] w-[100%]" />
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-indigo_900 text-right w-[auto]"
                        variant="body16"
                      >
                        Author - 23.05.2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[410px]">
                <div className="bg-bluegray_100 flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_pexelsminan1313809.png"
                    className="h-[326px] md:h-[auto] object-cover w-[100%]"
                    alt="Photo Eight"
                  />
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] px-[31px] py-[27px] shadow-bs sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[27px] items-start justify-start w-[347px]">
                    <div className="flex flex-col gap-[14px] items-start justify-start w-[347px]">
                      <Text
                        className="font-bold font-cardo leading-[120.00%] md:max-w-[100%] max-w-[307px] text-indigo_900 text-left tracking-[-0.48px]"
                        variant="body10"
                      >
                        The energy efficiency offers hydrotherapy or swim
                      </Text>
                      <Text
                        className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[347px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                        variant="body14"
                      >
                        The point of using Lorem Ipsum hiter of that using
                        making it look like others readable will get end.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[91px] items-center justify-start w-[347px]">
                      <div className="flex flex-col font-cardo items-center justify-start w-[27%]">
                        <Text
                          className="font-bold text-center text-indigo_900 tracking-[0.36px] w-[auto]"
                          variant="body15"
                        >
                          Read more
                        </Text>
                        <Line className="bg-indigo_900 h-[1px] mt-[3px] w-[100%]" />
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-indigo_900 text-right w-[auto]"
                        variant="body16"
                      >
                        Author - 23.05.2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-amber_A200 flex items-center justify-start max-w-[1300px] mt-[161px] mx-[auto] md:px-[20px] px-[230px] py-[121px] w-[100%]">
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
                name="Name One"
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
        <footer className="flex font-inter items-center justify-center mt-[150px] md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate38}
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="facebook One"
                      />
                    </Button>
                    <Button
                      className="common-pointer flex h-[55px] items-center justify-center w-[55px]"
                      onClick={handleNavigate30}
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

export default Home1Page;
