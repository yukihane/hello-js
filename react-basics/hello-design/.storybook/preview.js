import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // https://storybook.js.org/docs/react/essentials/viewport
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
