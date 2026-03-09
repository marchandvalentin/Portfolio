export interface Project {
    title: string
    description: string
    imageURL: string  // path relative to /public
}

export const Projects: Project[] = [
    {
        // ─────────────────────POTFOLIO 3D─────────────────────
        title: "Portfolio 3D",
        description: "Un portfolio construit avec  React Three Fiber, Three.js et Blender.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        // ─────────────────────HTML && CSS─────────────────────
        title: "HTML&CSS PROJECT",
        description: "Description d'un projet HTML et CSS.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        // ─────────────────────Javascript─────────────────────
        title: "Pong",
        description: "Pong est un projet Javascript fait en classe afin d'apprendre les bases du langage.Le challenge de ce projet etait de simuler une gravité et de gérer les collisions.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        // ─────────────────────React─────────────────────
        title: "Fragement",
        description: "Fragement est un projet personel React, qui m'a servis à apprendre React, il a pour but de servir de chatbot pour créer des images.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        //─────────────────────TypeScript─────────────────────
        title: "Portfolio 3D",
        description: "Un portfolio construit avec  React Three Fiber, Three.js et Blender.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        //─────────────────────PHP─────────────────────
        title: "DungeonXplorer",
        description: "DungeonXplorer est un projet PHP fait en cours afin de se familiariser avec le langage, le sujet était de reprendre un projet php abandonné d'un site web pour représenter un livre dont vous êtes le héros avec une base de donnée à moitié faite, nous avons donc, en equipe de trois, repris le projet avec comme objectif de pouvoir créer des héros de différentes classes, un  système de sauvegarde et une dynamique de combat dans certains chapitres de l'histoire.",
        imageURL: "/Projects-Images/test.jpg",
    },
    {
        //─────────────────────Java─────────────────────
        title: "SAE Java",
        description: "",
        imageURL: "",
    },
    {
        //─────────────────────Laravel─────────────────────
        title: "Raid Navigator",
        description: "Raid Navigator est un projet Laravel + React, fait en équipe de 8 personnes, pour créer une application web qui permet de gérer des Raids, clubs et s'inscrire à des courses ainsi que de suivre vos résultats.",
        imageURL: "",
    },
    {
        //─────────────────────C─────────────────────
        title: "SAE 1.1",
        description: "Cette SAE en C avait pour but de confirmer notre coompréhension du language C en nous faisant construire un projet de jeu à deux personnes tour par tour , ou un joueur bouge d'une case dans n'importe quelle direction disponible, puis place un obstacle, puis l'autre joueur répète ce proccesus jusqu'a ce qu'un des joueurs ne puisse plus bouger.",
        imageURL: "",
    },
    {
        //─────────────────────Python─────────────────────
        title: "Algorithmes de chiffrement et déchiffrement",
        description: "Durant une ressource de notre parcours, nous avons appris et implementé plusieurs types de chiffrement de donnée et comment les déchiffrer, ainsi que leurs failles et points fort.",
        imageURL: "",
    },
    {
        //─────────────────────Csharp─────────────────────
        title: "Brightside",
        description: "Ce projet une un jeux, que je développe sur mon temps libre, avec unity et C#. Il s'agit d'un jeu de gestion de village 3D, ou le joueur doit gérer les ressources de son village, faire prospérer sa population et peu à peu automatiser tout les proccessus de recupération et traitment de ressources.",
        imageURL: "",
    },
    {
        //─────────────────────Kotlin─────────────────────
        title: "Raid Navigator Mobile",
        description: "Cette application mobile Android est l'adaptation de Raid Navigator en version mobile, avec un nombre de fonctionnalités réduite ",
        imageURL: "",
    }
]

export const DEFAULT_PROJECT: Project = Projects[0]
