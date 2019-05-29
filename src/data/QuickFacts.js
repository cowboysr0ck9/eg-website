const dt = new Date("August 24, 2012 12:30:00")
const dtNow = new Date().getFullYear()
const quickFacts = [
  {
    id: 1,
    fact: `${dtNow - dt.getFullYear()}`,
    description: "Years of Operation",
    src: "",
    alt: "",
  },
  {
    id: 2,
    fact: "75+",
    description: "Projects Delivered",
    src: "",
    alt: "",
  },
  {
    id: 3,
    fact: "10k+",
    description: "Social Followers",
    src: "",
    alt: "",
  },
  {
    id: 4,
    fact: "32+",
    description: "Clients",
    src: "",
    alt: "",
  },
]
export default quickFacts
