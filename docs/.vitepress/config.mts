import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Replace with your own title, base and description
  title: "VitePress ST",
  base: "/vitepress-starter-template/",
  description: "VitePress Starter Template",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // Below is an example of a dropdown menu - make sure to uncomment and add folders in the /docs folder for these links to make it work.
      // {
      //   text: "Labs",
      //   items: [
      //     { text: "Lab 01", link: "/lab-01/" },
      //     { text: "Lab 02", link: "/lab-02/" },
      //     { text: "Lab 03", link: "/lab-03/" },
      //     { text: "Lab 04", link: "/lab-04/" },
      //   ],
      // },
    ],

    sidebar: [
      {
        text: "Home",
        items: [{ text: "Home", link: "/" }],
      },
      // Below is an example of a menu - make sure to uncomment and add folders in the /docs folder for these links to make it work.
      // {
      //   text: "Labs",
      //   items: [
      //     { text: "Lab 01", link: "/lab-01/" },
      //     { text: "Lab 02", link: "/lab-02/" },
      //     { text: "Lab 03", link: "/lab-03/" },
      //     { text: "Lab 04", link: "/lab-04/" },
      //   ],
      // },
    ],

    socialLinks: [
      {
        icon: "github",
        // Replace with your own repo URL
        link: "https://github.com/laskewitz/vitepress-starter-template",
      },
    ],
  },
});
