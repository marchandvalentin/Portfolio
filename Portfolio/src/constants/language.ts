export const Language = {
    HTML: "HTML",
    CSS: "CSS",
    JavaScript: "JavaScript",
    React: "React",
    TypeScript: "TypeScript",
    PHP : "PHP",
    Java : "Java",
    Laravel : "Laravel",
    C : "C",
    Python : "Python",
} as const

export type Language = (typeof Language)[keyof typeof Language]
