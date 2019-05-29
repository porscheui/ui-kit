import { importMDX } from "mdx.macro";

export interface Story {
  design: any;
  code: any;
  props?: string[];
  vrt?: any;
}
export interface Stories {
  [category: string]: {
    [story: string]: Story
  };
}
export const Stories: Stories = {
  Basic: {
    Color: {
      design: importMDX("../../ui-kit-js/src/components/basic/color/color.design.mdx"),
      code: importMDX("../../ui-kit-js/src/components/basic/color/color.code.mdx")
    },
    Typography: {
      design: importMDX("../../ui-kit-js/src/components/basic/typography/typography.design.mdx"),
      code: importMDX("../../workshop/src/components/basic/typography/typography.code.mdx"),
      vrt: importMDX("../../workshop/src/components/basic/typography/typography.vrt.mdx"),
      props: ["Headline", "Text"]
    }
  },
  Action: {
    Buttonregular: {
      design: importMDX("../../ui-kit-js/src/components/action/button-regular/button-regular.design.mdx"),
      code: importMDX("../../ui-kit-js/src/components/action/button-regular/button-regular.code.mdx")
    }
  },
  Feedback: {
    Loader: {
      design: importMDX("../../ui-kit-js/src/components/feedback/loader/loader.design.mdx"),
      code: importMDX("../../ui-kit-js/src/components/feedback/loader/loader.code.mdx"),
      vrt: importMDX("../../ui-kit-js/src/components/feedback/loader/loader.vrt.mdx")
    }
  },
  Icon: {
    Icon: {
      design: importMDX("../../ui-kit-js/src/components/icon/icon/icon.design.mdx"),
      code: importMDX("../../ui-kit-js/src/components/icon/icon/icon.code.mdx"),
      vrt: importMDX("../../ui-kit-js/src/components/icon/icon/icon.vrt.mdx")
    }
  },
  Layout: {
    Flex: {
      design: importMDX("../../workshop/src/components/layout/flex/flex.design.mdx"),
      code: importMDX("../../workshop/src/components/layout/flex/flex.code.mdx"),
      vrt: importMDX("../../workshop/src/components/layout/flex/flex.vrt.mdx"),
      props: ["Flex", "FlexItem"]
    },
    Grid: {
      design: importMDX("../../workshop/src/components/layout/grid/grid.design.mdx"),
      code: importMDX("../../workshop/src/components/layout/grid/grid.code.mdx"),
      vrt: importMDX("../../workshop/src/components/layout/grid/grid.vrt.mdx"),
      props: ["Grid", "GridChild"]
    },
    Spacing: {
      design: importMDX("../../workshop/src/components/layout/spacing/spacing.design.mdx"),
      code: importMDX("../../workshop/src/components/layout/spacing/spacing.code.mdx"),
      vrt: importMDX("../../workshop/src/components/layout/spacing/spacing.vrt.mdx"),
      props: ["Spacing"]
    }
  }
};
