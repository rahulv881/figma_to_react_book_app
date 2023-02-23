import React from "react";
import { Radio } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "rahul_s_application4/Radio",
  component: Radio,
};

export const SampleRadio: Story<any> = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "FillAmberA200",
  inputClassName: "mr-1",
};
