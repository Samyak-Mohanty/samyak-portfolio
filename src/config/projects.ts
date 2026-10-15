export const projectsConfig = {
  title: "Projects",
  description:
    "Things I'm building and learning from. More projects will be added here as they are completed.",
  featuredLabel: "Featured",
  items: [
    {
      slug: "project-eg",
      title: "Project EG",
      subtitle: "Smart Headphone Break Manager",
      status: "In Progress",
      description:
        "A Windows desktop application that automatically mutes headphones after a configurable listening session and enforces a rest period, helping users build healthier listening habits. Built as a full-stack app: a web-based frontend (HTML, CSS, JavaScript) running in Qt WebEngine on top of a Python backend.",
      type: "Full-Stack Desktop App",
      techGroups: [
        { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "Qt WebEngine"] },
        {
          label: "Backend",
          items: ["Python", "PySide6", "SQLite", "Windows Core Audio (pycaw/comtypes)"]
        },
        { label: "Testing & Quality", items: ["pytest", "Ruff"] }
      ],
      features: [
        "Configurable listening and rest durations.",
        "Automatic headphone muting during rest periods.",
        "Headphone disconnection and reconnection handling without resetting the listening timer.",
        "System tray integration and desktop notifications.",
        "Local session history and statistics using SQLite.",
        "Automated testing and code quality checks."
      ],
      href: "https://github.com/Samyak-Mohanty/Earguard",
      // Main screenshot (replace the file or change this path any time).
      imageUrl: "/assets/images/projects/project-eg-dashboard.png",
      // Extra screenshots shown as a gallery on the Projects page.
      gallery: [
        { src: "/assets/images/projects/project-eg-dashboard.png", label: "Dashboard" },
        { src: "/assets/images/projects/project-eg-settings.png", label: "Settings" },
        { src: "/assets/images/projects/project-eg-statistics.png", label: "Statistics" }
      ]
    }
  ]
} as const;
