import React from "react";

import {
  Img,
  Text,
  Button,
  Line,
  List,
  Input,
  CheckBox,
  Radio,
} from "components";

const ContactPage: React.FC = () => {
  function handleNavigate42() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate43() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate44() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate45() {
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
            <div className="absolute flex flex-col gap-[129px] md:gap-[40px] inset-x-[0] items-center justify-start mx-[auto] top-[7%] w-[68%]">
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
                        onClick={handleNavigate42}
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
                        onClick={handleNavigate43}
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
                <div className="flex flex-col font-cardo gap-[34px] items-center justify-start w-[245px]">
                  <Text
                    className="text-center text-white_A700 tracking-[-1.00px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Contact Us
                  </Text>
                  <Line className="bg-amber_A200 h-[3px] w-[23%]" />
                </div>
                <Text
                  className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[633px] not-italic text-center text-indigo_100 tracking-[-0.19px]"
                  variant="body14"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, have suffered alteration in some form.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[106px] md:gap-[40px] items-start justify-start max-w-[1299px] mt-[110px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-1 flex-col gap-[40px] items-start justify-start sm:w-[100%] w-[523px]">
            <div className="flex flex-col gap-[27px] items-start justify-start sm:w-[100%] w-[523px]">
              <div className="flex flex-col font-cardo gap-[15px] items-start justify-start md:w-[100%] w-[56%]">
                <Text
                  className="text-indigo_900 text-left tracking-[-0.90px] w-[auto]"
                  variant="body2"
                >
                  Keep in Touch
                </Text>
                <Line className="bg-amber_A200 h-[3px] md:ml-[0] ml-[4px] w-[19%]" />
              </div>
              <Text
                className="font-inter font-normal leading-[180.00%] md:max-w-[100%] max-w-[523px] not-italic text-gray_500 text-left tracking-[-0.19px]"
                variant="body14"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable.
              </Text>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start sm:w-[100%] w-[431px]">
              <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start sm:w-[100%] w-[431px]">
                <Button
                  className="flex h-[65px] items-center justify-center w-[65px]"
                  size="smIcn"
                  variant="icbFillIndigo900"
                >
                  <Img
                    src="images/img_home.svg"
                    className="h-[35px]"
                    alt="home"
                  />
                </Button>
                <div className="flex flex-col gap-[7px] items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold font-cardo text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                    variant="body10"
                  >
                    Visit Us :
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                    variant="body14"
                  >
                    No: 09a, Downtown, San Dieago, USA.
                  </Text>
                </div>
              </div>
              <List
                className="flex-col gap-[18px] grid w-[66%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[27px] items-center justify-start w-[276px]">
                  <Button
                    className="flex h-[65px] items-center justify-center w-[65px]"
                    variant="icbFillIndigo900"
                  >
                    <Img
                      src="images/img_mail.svg"
                      className="h-[35px]"
                      alt="mail"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-bold font-cardo text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                      variant="body10"
                    >
                      Drop Us :
                    </Text>
                    <Text
                      className="font-inter font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                      variant="body14"
                    >
                      support@pages.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start w-[283px]">
                  <Button
                    className="flex h-[65px] items-center justify-center w-[65px]"
                    variant="icbFillIndigo900"
                  >
                    <Img
                      src="images/img_call_amber_a200.svg"
                      className="h-[30px]"
                      alt="call"
                    />
                  </Button>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold font-cardo text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                      variant="body10"
                    >
                      Call Us :
                    </Text>
                    <Text
                      className="font-inter font-normal not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                      variant="body14"
                    >
                      Call: 1-800-123-9999
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[28px] items-start justify-start md:w-[100%] w-[606px]">
            <div className="flex flex-col gap-[15px] items-start justify-start md:w-[100%] w-[606px]">
              <div className="flex md:flex-col flex-row gap-[8px] items-start justify-start md:w-[100%] w-[606px]">
                <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex flex-row gap-[14px] items-center justify-start p-[20px] md:w-[100%] w-[50%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[24px] w-[24px]"
                    alt="user"
                  />
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                    variant="body14"
                  >
                    Name
                  </Text>
                </div>
                <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex flex-row gap-[11px] items-center justify-center p-[20px] md:w-[100%] w-[50%]">
                  <Img
                    src="images/img_mail.svg"
                    className="h-[24px] ml-[5px] w-[24px]"
                    alt="mail One"
                  />
                  <Text
                    className="font-normal mr-[170px] not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                    variant="body14"
                  >
                    Email
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start md:w-[100%] w-[606px]">
                <Input
                  className="font-normal not-italic p-[0] text-[19px] placeholder:text-gray_500 text-gray_500 text-left tracking-[-0.19px] w-[100%]"
                  wrapClassName="flex w-[100%]"
                  type="number"
                  name="Phone"
                  placeholder="Phone"
                  prefix={
                    <Img
                      src="images/img_call.svg"
                      className="ml-[21px] mr-[15px] my-[auto]"
                      alt="call"
                    />
                  }
                  variant="OutlineGray300"
                ></Input>
                <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex flex-row gap-[15px] items-start justify-start p-[19px] w-[100%]">
                  <Img
                    src="images/img_edit.svg"
                    className="h-[23px] mb-[158px] ml-[3px] w-[23px]"
                    alt="edit"
                  />
                  <Text
                    className="font-normal mb-[152px] mt-[5px] not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                    variant="body14"
                  >
                    Message
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[606px]">
              <CheckBox
                className="font-inter font-normal not-italic text-[18px] text-gray_500 text-left tracking-[-0.18px]"
                inputClassName="h-[25px] mr-[5px] w-[25px]"
                label="Keep me up to date with news and offers from time to time by email"
                name="Keepmeuptodate"
                size="md"
              ></CheckBox>
              <Button
                className="cursor-pointer font-bold font-cardo md:min-w-[100%] min-w-[606px] text-[19px] text-center text-indigo_900 tracking-[0.38px] w-[auto]"
                size="md"
                variant="FillAmberA200"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex font-cardo items-center justify-start max-w-[1920px] mt-[130px] sm:px-[20px] px-[310px] md:px-[40px] py-[146px] w-[100%]">
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1299px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start md:w-[100%] w-[31%]">
              <Text
                className="text-center text-indigo_900 tracking-[-0.90px] w-[auto]"
                variant="body2"
              >
                Frequent Questions?
              </Text>
              <Line className="bg-amber_A200 h-[3px] w-[14%]" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[82px] items-start justify-start max-w-[1299px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[611px]">
                <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[71%]">
                      <div className="bg-amber_A200 h-[14px] mb-[11px] sm:mt-[0] mt-[7px] rounded-[50%] w-[14px]"></div>
                      <Text
                        className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Do you offer discounts for education?
                      </Text>
                    </div>
                    <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Radio
                    value="IsHackProducivitybookavailableontheonestores"
                    className="font-bold font-cardo md:ml-[0] ml-[3px] sm:text-[20px] md:text-[22px] text-[24px] text-indigo_900 text-left tracking-[-0.24px]"
                    inputClassName="h-[14px] mr-[5px] w-[14px]"
                    checked={false}
                    name="IsHackProducivity"
                    label="Is Hack Producivity book available on the one stores"
                    variant="OutlineAmberA200"
                  ></Radio>
                  <Text
                    className="font-inter font-normal leading-[180.00%] md:ml-[0] ml-[32px] mt-[4px] not-italic text-gray_500 text-left tracking-[-0.19px] sm:w-[100%] w-[95%]"
                    variant="body14"
                  >
                    Many desktop publishing packages and web page editors to now
                    use Lorem Ipsum as their default model text, and angle
                    uncover many web sites still in their infancy.
                  </Text>
                  <Text
                    className="font-inter font-normal md:ml-[0] ml-[32px] mt-[27px] not-italic text-gray_500 text-left tracking-[-0.19px] w-[auto]"
                    variant="body14"
                  >
                    There are many variations of of Lorem Ipsum available.
                  </Text>
                  <Line className="bg-indigo_900_6c h-[1px] mt-[34px] w-[99%]" />
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[76%]">
                      <div className="bg-amber_A200 h-[14px] mb-[11px] sm:mt-[0] mt-[7px] rounded-[50%] w-[14px]"></div>
                      <Text
                        className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        What is Hack Productivity book about?
                      </Text>
                    </div>
                    <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[80%]">
                      <div className="bg-amber_A200 h-[14px] mb-[12px] sm:mt-[0] mt-[6px] rounded-[50%] w-[14px]"></div>
                      <Text
                        className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Where can I get Hack Productivity book?
                      </Text>
                    </div>
                    <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[83%]">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[85%]">
                      <div className="bg-amber_A200 h-[14px] mb-[12px] sm:mt-[0] mt-[6px] rounded-[50%] w-[14px]"></div>
                      <Text
                        className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                        variant="body10"
                      >
                        Do you offer discounts for education?
                      </Text>
                    </div>
                    <Line className="bg-white_A700_87 h-[1px] w-[100%]" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                <List
                  className="flex-col gap-[22px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[71%]">
                        <div className="bg-amber_A200 h-[14px] mb-[11px] sm:mt-[0] mt-[7px] rounded-[50%] w-[14px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Do you offer discounts for education?
                        </Text>
                      </div>
                      <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                        <div className="bg-amber_A200 h-[14px] mb-[11px] md:mt-[0] mt-[7px] rounded-[50%] w-[14px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Is Hack Producivity book available on the one stores?
                        </Text>
                      </div>
                      <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[76%]">
                        <div className="bg-amber_A200 h-[14px] mb-[11px] sm:mt-[0] mt-[7px] rounded-[50%] w-[14px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          What is Hack Productivity book about?
                        </Text>
                      </div>
                      <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[76%]">
                        <div className="bg-amber_A200 h-[14px] mb-[11px] sm:mt-[0] mt-[7px] rounded-[50%] w-[14px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          What is Hack Productivity book about?
                        </Text>
                      </div>
                      <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:w-[100%] w-[80%]">
                        <div className="bg-amber_A200 h-[14px] mb-[12px] sm:mt-[0] mt-[6px] rounded-[50%] w-[14px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Where can I get Hack Productivity book?
                        </Text>
                      </div>
                      <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:w-[100%] w-[80%]">
                        <div className="bg-amber_A200 h-[14px] mb-[12px] sm:mt-[0] mt-[6px] rounded-[50%] w-[14px]"></div>
                        <Text
                          className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                          variant="body10"
                        >
                          Where can I get Hack Productivity book?
                        </Text>
                      </div>
                      <Line className="bg-indigo_900_6c h-[1px] w-[100%]" />
                    </div>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:w-[100%] w-[80%]">
                  <div className="bg-amber_A200 h-[14px] mb-[12px] sm:mt-[0] mt-[6px] rounded-[50%] w-[14px]"></div>
                  <Text
                    className="font-bold text-indigo_900 text-left tracking-[-0.24px] w-[auto]"
                    variant="body10"
                  >
                    Where can I get Hack Productivity book?
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex font-inter items-center justify-center md:px-[20px] w-[100%]">
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
                      onClick={handleNavigate44}
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className=""
                        alt="facebook One"
                      />
                    </Button>
                    <Button
                      className="common-pointer flex h-[55px] items-center justify-center w-[55px]"
                      onClick={handleNavigate45}
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

export default ContactPage;
