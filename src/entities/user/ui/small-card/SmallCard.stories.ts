import type { Meta, StoryObj } from "@storybook/react";

import SmallCard from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SmallCard> = {
  title: "User/SmallCard",
  component: SmallCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof SmallCard>;

export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    user: {
      name: "Jack",
      id: 1,
      email: "jack@jack.com",
      address: "1st Street",
      phone: "123456",
      website: "jack.com",
      company: {
        name: "Margins",
        catchphrase: "Just do it",
        bs: "Blah",
      },
    },
  },
};
