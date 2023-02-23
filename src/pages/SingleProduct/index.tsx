import React from "react";

import { Img, Text, Button, Line, List } from "components";

const SingleProductPage: React.FC = () => {
  function handleNavigate16() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate23() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate24() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate25() {
    window.location.href = "https://www.facebook.com/login/";
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
                      onClick={handleNavigate23}
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
                      onClick={handleNavigate24}
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
        <div className="flex flex-col gap-[120px] md:gap-[40px] items-center justify-start max-w-[1297px] mt-[150px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[86px] items-center justify-center max-w-[1297px] w-[100%]">
            <div className="bg-gray_50 flex md:flex-1 items-center justify-end p-[70px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[45%]">
              <div className="h-[509px] relative sm:w-[100%] w-[87%]">
                <div className="bg-gray_53 border-[6px] border-gray_303 border-solid h-[506px] m-[auto] shadow-bs1 w-[100%]"></div>
                <div
                  className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[32px] sm:px-[20px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[2px] mt-[8px] w-[100%]">
                    <Img
                      src="images/img_name.svg"
                      className="h-[130px] w-[auto]"
                      alt="Name"
                    />
                    <Text
                      className="font-cardo italic leading-[130.00%] mt-[63px] text-center text-indigo_900 tracking-[-0.26px] sm:w-[100%] w-[82%]"
                      variant="body20"
                    >
                      A long established fact that a reader normal as well
                      distribution of letters
                    </Text>
                    <Img
                      src="images/img_trees.svg"
                      className="h-[110px] mt-[17px] w-[auto]"
                      alt="Trees"
                    />
                    <Text
                      className="font-bold font-inter mt-[20px] text-center text-indigo_900 tracking-[1.40px] uppercase w-[auto]"
                      variant="body19"
                    >
                      JOHN ABRAHAM
                    </Text>
                    <Text
                      className="font-cardo font-normal italic mt-[4px] text-center text-lime_700 tracking-[-0.28px] w-[auto]"
                      variant="body19"
                    >
                      A supreme packages and web page editors.
                    </Text>
                    <div className="font-inter md:h-[19px] h-[9px] mt-[10px] relative w-[80%]">
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
            <div className="flex flex-1 flex-col gap-[34px] items-start justify-start max-w-[631px] w-[100%]">
              <div className="flex flex-col gap-[26px] items-start justify-start max-w-[631px] w-[100%]">
                <div className="flex flex-col gap-[6px] items-start justify-start w-[345px]">
                  <Text
                    className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                    variant="body6"
                  >
                    The Atomic One’s
                  </Text>
                  <Text
                    className="font-inter font-semibold text-amber_A200 text-left tracking-[-0.25px] w-[auto]"
                    variant="body9"
                  >
                    <span className="md:text-[28px] sm:text-[26px] text-amber_A200 text-[30px] font-extrabold">
                      $30.
                    </span>
                    <span className="text-amber_A200 text-[20px] font-extrabold">
                      00 USD
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start max-w-[631px] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[631px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                    variant="body14"
                  >
                    Making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum.
                  </Text>
                  <Text
                    className="font-normal leading-[250.00%] not-italic text-gray_500 text-left tracking-[-0.19px]"
                    variant="body14"
                  >
                    Publisher ‏ : ‎ Learning Private Limited (1 January 2021)
                    <br />
                    Language ‏ : ‎ English
                    <br />
                    Paperback : ‎212 pages
                    <br />
                    ISBN-10 ‏ : ‎ 9788120345799
                    <br />
                    Dimensions ‏ : ‎ 20 x 14 x 4 cm
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start sm:w-[100%] w-[507px]">
                <Button
                  className="cursor-pointer font-inter font-medium min-w-[120px] text-[20px] text-center text-gray_500 tracking-[-0.20px] w-[auto]"
                  size="md"
                  variant="OutlineAmberA200_1"
                >
                  1
                </Button>
                <Button
                  className="flex items-center justify-center min-w-[377px] sm:min-w-[100%] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_cart_indigo_900.svg"
                      className="mr-[12px] text-center"
                      alt="cart"
                    />
                  }
                  size="lg"
                  variant="FillAmberA200"
                >
                  <div className="bg-transparent cursor-pointer font-bold font-cardo text-[19px] text-center text-indigo_900 tracking-[0.38px]">
                    Add to Cart
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-cardo gap-[48px] items-center justify-start max-w-[1297px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-center md:w-[100%] w-[53%]">
              <Button
                className="cursor-pointer font-bold min-w-[315px] text-[18px] text-center text-white_A700 tracking-[-0.18px] uppercase w-[auto]"
                size="md"
                variant="FillIndigo900"
              >
                Product Description
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[314px] text-[18px] text-center text-indigo_900 tracking-[-0.18px] uppercase w-[auto]"
                size="md"
                variant="OutlineIndigo51"
              >
                Additional Info
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[92px] items-start justify-start max-w-[1297px] w-[100%]">
              <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:w-[100%] w-[571px]">
                <Text
                  className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                  variant="body6"
                >
                  Do you offer discounts for education?
                </Text>
                <Text
                  className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[571px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                  variant="body14"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, bypassed injected humour, or randomised words which
                  don&#39;t look even slightly believable.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[11px] items-start justify-start max-w-[634px] w-[100%]">
                <Text
                  className="font-cardo text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                  variant="body6"
                >
                  Is this book for me?
                </Text>
                <Text
                  className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[634px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                  variant="body14"
                >
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn&#39;t anything embarrassing hidden in the
                  middle of text. All the Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[385px] items-center justify-start mt-[152px] p-[85px] sm:px-[20px] md:px-[40px] w-[100%]"
          style={{ backgroundImage: "url('images/img_features.svg')" }}
        >
          <List
            className="sm:flex-col flex-row md:gap-[40px] gap-[90px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1297px] mx-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
              <div className="bg-indigo_900 flex h-[80px] items-start justify-start p-[20px] w-[80px]">
                <Img
                  src="images/img_checkmark_white_a700.svg"
                  className="h-[36px] my-[2px] w-[36px]"
                  alt="checkmark"
                />
              </div>
              <Text
                className="font-cardo mt-[19px] text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                variant="body6"
              >
                Secure Payments
              </Text>
              <Text
                className="font-inter font-normal leading-[180.00%] mt-[3px] not-italic text-center text-indigo_900 tracking-[-0.19px] w-[100%]"
                variant="body14"
              >
                There are many variations of passages of alteration in some
                form.
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
              <div className="bg-indigo_900 flex h-[80px] items-center justify-end p-[19px] w-[80px]">
                <Img
                  src="images/img_mail_white_a700.svg"
                  className="h-[41px] w-[auto]"
                  alt="mail"
                />
              </div>
              <Text
                className="font-cardo mt-[18px] text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                variant="body6"
              >
                Free Shipping
              </Text>
              <Text
                className="font-inter font-normal leading-[180.00%] mt-[4px] not-italic text-center text-indigo_900 tracking-[-0.19px] w-[100%]"
                variant="body14"
              >
                There are many variations of passages of alteration in some
                form.
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
              <div className="bg-indigo_900 flex h-[80px] items-center justify-end p-[16px] w-[80px]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[42px] mt-[4px] w-[auto]"
                  alt="arrowleft"
                />
              </div>
              <Text
                className="font-cardo mt-[13px] text-indigo_900 text-left tracking-[-0.64px] w-[auto]"
                variant="body6"
              >
                100% Satisfactions
              </Text>
              <Text
                className="font-inter font-normal leading-[180.00%] mt-[9px] not-italic text-center text-indigo_900 tracking-[-0.19px] w-[100%]"
                variant="body14"
              >
                There are many variations of passages of alteration in some
                form.
              </Text>
            </div>
          </List>
        </div>
        <footer className="flex items-center justify-center md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate25}
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="facebook One"
                      />
                    </Button>
                    <Button
                      className="common-pointer flex h-[55px] items-center justify-center w-[55px]"
                      onClick={handleNavigate16}
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

export default SingleProductPage;
