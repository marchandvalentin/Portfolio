export interface Project {
    title: string
    description: string
    imageURL: string  // path relative to /public
}

export const Projects: Project[] = [
    {
        title: "Portfolio 3D",
        description: "An interactive 3D portfolio built with React Three Fiber, Three.js and Blender. Features a dark-room aesthetic lit only by the monitor glow.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        title: "HTML&CSS PROJECT",
        description: "Short description of the second project. Technologies used, key features, and outcomes.",
        imageURL: "/Projects-Images/project2.png",
    },
    {
        title: "JS PROJECT",
        description: "Short description of the third project. Technologies used, key features, and outcomes.",
        imageURL: "/Projects-Images/project3.png",
    },
]

export const DEFAULT_PROJECT: Project = Projects[0]
