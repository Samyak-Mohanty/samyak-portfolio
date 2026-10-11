export const globalConfig = {
  site: {
    name: "Samyak Mohanty | Portfolio",
    author: "Samyak Mohanty",
    description:
      "Portfolio of Samyak Mohanty, a CSE student and aspiring backend and full-stack developer.",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: <{ title: string; href: string; hidden?: boolean }[]>[
      { title: "Home", href: "/" },
      { title: "Projects", href: "/projects" },
      // Posts is hidden until the first article is published.
      // To show it again, delete `hidden: true` below.
      { title: "Posts", href: "/posts", hidden: true },
      { title: "About", href: "/about" }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Samyak Mohanty. All rights reserved.",
    social: {
      github: "https://github.com/Samyak-Mohanty",
      linkedin: "https://www.linkedin.com/in/samyak-mohanty/",
      email: "samyakmohanty.contact@gmail.com"
    }
  }
};
