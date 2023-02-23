import React from "react";

import { Img, Text, Button, Line, RadioGroup, Radio } from "components";

const BlogSinglePage: React.FC = () => {
  function handleNavigate46() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate47() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate51() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate52() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex items-center justify-start w-[100%]">
          <div className="h-[527px] md:px-[20px] relative w-[100%]">
            <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
              <div className="bg-indigo_900_b0 h-[527px] w-[100%]"></div>
            </div>
            <div className="absolute flex flex-col gap-[172px] md:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] top-[7%] w-[68%]">
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
                        onClick={handleNavigate51}
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
                        onClick={handleNavigate52}
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
              <div className="flex font-cardo items-center justify-start max-w-[635px] w-[100%]">
                <div className="flex flex-col gap-[34px] items-center justify-start max-w-[635px] w-[100%]">
                  <Text
                    className="leading-[110.00%] md:max-w-[100%] max-w-[635px] text-center text-gray_50 tracking-[-1.00px]"
                    as="h6"
                    variant="h6"
                  >
                    Significant reading has more info number
                  </Text>
                  <Line className="bg-amber_A200 h-[3px] w-[9%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[44px] items-start justify-start max-w-[1299px] mt-[150px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[26px] items-start justify-start max-w-[1299px] w-[100%]">
            <div className="flex flex-col font-cardo gap-[15px] items-start justify-start max-w-[1299px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_photo.png"
                  className="h-[700px] md:h-[auto] object-cover rounded-[5px] w-[100%]"
                  alt="Photo"
                />
              </div>
              <Text
                className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                variant="body10"
              >
                October 6, 2021 / Classics
              </Text>
            </div>
            <Text
              className="font-inter font-normal leading-[170.00%] md:max-w-[100%] max-w-[1297px] not-italic text-gray_500 text-left tracking-[-0.19px]"
              variant="body14"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majorithave suffered alteration in some form, by injected
              humour, or randomised words whicdon&#39;t look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, need
              to be sure there isn&#39;t anything embarrassing hidden in the
              middle of text. All thLorem Ipsum generators on the Internet tend.
            </Text>
          </div>
          <div className="flex flex-col gap-[26px] justify-start w-[100%]">
            <div className="flex flex-col gap-[11px] items-start justify-start max-w-[1299px] w-[100%]">
              <Text
                className="font-cardo text-indigo_900 text-left w-[auto]"
                variant="body7"
              >
                The perfect book for all
              </Text>
              <Text
                className="font-inter font-normal leading-[170.00%] md:max-w-[100%] max-w-[1299px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                variant="body14"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has less normal
                distribution of letters, as opposed.
              </Text>
            </div>
            <RadioGroup className="md:ml-[0] ml-[44px] w-[44%]" name="Points">
              <Radio
                value="IthasrootsinapieceofclassicalLatinliteraturefrom45BC"
                className="font-normal not-italic text-[19px] text-indigo_900 text-left tracking-[-0.19px]"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                checked={false}
                name="Points"
                label="It has roots in a piece of classical Latin literature from 45 BC"
              ></Radio>
              <Radio
                value="TogenerateLoremIpsumwhichlooksreasonable"
                className="font-normal mr-[97px] mt-[18px] not-italic text-[19px] text-indigo_900 text-left tracking-[-0.19px]"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                checked={false}
                name="Points"
                label="To generate Lorem Ipsum which looks reasonable"
              ></Radio>
              <Radio
                value="ThefirstlineofLoremIpsumquotLoremipsumdolorsitamet"
                className="font-normal mr-[18px] mt-[16px] not-italic text-[19px] text-indigo_900 text-left tracking-[-0.19px]"
                inputClassName="h-[15px] mr-[5px] w-[15px]"
                checked={false}
                name="Points"
                label="The first line of Lorem Ipsum quotLorem ipsum dolor sit amet"
              ></Radio>
            </RadioGroup>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-indigo_900 flex flex-col gap-[10px] items-center justify-center max-w-[1299px] sm:px-[20px] md:px-[40px] px-[84px] py-[53px] rounded-[5px] w-[100%]">
              <Img
                src="images/img_icon.svg"
                className="h-[48px] w-[auto]"
                alt="Icon"
              />
              <Text
                className="font-medium text-left text-white_A700 tracking-[-0.18px] w-[auto]"
                variant="body15"
              >
                “Crowdsource term sheet freemium beta stealth responsive web
                design niche market rock star channels.”
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] justify-start w-[100%]">
            <div className="flex flex-col gap-[11px] items-start justify-start max-w-[1299px] w-[100%]">
              <Text
                className="font-cardo text-indigo_900 text-left w-[auto]"
                variant="body7"
              >
                The perfect book for all
              </Text>
              <Text
                className="font-inter font-normal leading-[170.00%] md:max-w-[100%] max-w-[1299px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                variant="body14"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has less normal
                distribution of letters, as opposed.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[43px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-indigo_900 text-left tracking-[-0.19px] w-[auto]"
                variant="body14"
              >
                1 . It has roots in a piece of classical Latin literature from
                45 BC,
              </Text>
              <Text
                className="font-normal mt-[18px] not-italic text-indigo_900 text-left tracking-[-0.19px] w-[auto]"
                variant="body14"
              >
                2 . To generate Lorem Ipsum which looks reasonable
              </Text>
              <Text
                className="font-normal mt-[16px] not-italic text-indigo_900 text-left tracking-[-0.19px] w-[auto]"
                variant="body14"
              >
                3 . The first line of Lorem Ipsum, &quot;Lorem ipsum” dolor sit
                amet
              </Text>
              <Text
                className="font-normal mt-[16px] not-italic text-indigo_900 text-left tracking-[-0.19px] w-[auto]"
                variant="body14"
              >
                4 . Be standard chunk of Lorem used since the 1500s
              </Text>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-[151px] md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate46}
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="facebook One"
                      />
                    </Button>
                    <Button
                      className="common-pointer flex h-[55px] items-center justify-center w-[55px]"
                      onClick={handleNavigate47}
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
                              alt="icon One"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Two"
                            />
                          </li>
                          <li className="mt-[33px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Three"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Four"
                            />
                          </li>
                          <li className="mt-[35px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Five"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Six"
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
                              alt="icon Seven"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Eight"
                            />
                          </li>
                          <li className="mt-[33px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Nine"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Ten"
                            />
                          </li>
                          <li className="mt-[35px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Eleven"
                            />
                          </li>
                          <li className="mt-[32px] w-[100%]">
                            <Img
                              src="images/img_icon_amber_a200.svg"
                              className="cursor-pointer h-[3px]"
                              alt="icon Twelve"
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

export default BlogSinglePage;
