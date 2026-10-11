export const aboutConfig = {
  title: "About Me",
  description:
    "I'm Samyak Mohanty, a Computer Science and Engineering student at Parul University. I enjoy programming in C, C++, and Python, practicing algorithms, and exploring web development using HTML5 and CSS. I'm continuously improving my skills through hands-on projects and problem-solving. My long-term goal is to become a skilled backend or full-stack developer and build reliable, well-designed software.",
  image: "/assets/images/about/profile.jpg",
  imageAlt: "Photo of Samyak Mohanty",
  skills: {
    title: "Skills",
    groups: [
      { name: "Programming Languages", items: ["Python", "C++", "C"] },
      { name: "Web Development", items: ["HTML5"] },
      {
        name: "Tools and Technologies",
        items: ["Git", "GitHub", "Linux", "Bash", "Shell Scripting"]
      },
      { name: "Libraries", items: ["NumPy"] },
      {
        name: "Core Concepts",
        items: ["Software Development Life Cycle (SDLC)", "Version Control"]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        period: "2026 – 2030",
        degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
        institution: "Parul University",
        location: "Vadodara, Gujarat, India"
      }
    ]
  }
} as const;
