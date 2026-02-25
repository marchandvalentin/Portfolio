import { Projects } from "./projects"

export const Languages = {
    "HTML": { name: "HTML", url : "/Textures/html_texture.png", project : Projects[1] },
    "CSS": { name: "CSS", url : "/Textures/css_texture.png", project : Projects[1] },
    "JavaScript": { name: "JavaScript", url : "/Textures/javascript_logo.png", project : Projects[2] },
    "React": { name: "React", url : "/Textures/react_texture.png", project : Projects[0] }, // X no project yet 
    "TypeScript": { name: "TypeScript", url : "/Textures/ts_texture.png", project : Projects[0] },// X no project yet 
    "PHP" : { name: "PHP", url : "/Textures/php_texture.png", project : Projects[0] },// X no project yet 
    "Java" : { name: "Java", url : "/Textures/java_texture.png", project : Projects[0] },// X no project yet 
    "Laravel" : { name: "Laravel", url : "/Textures/laravel_texture.png", project : Projects[0] },// X no project yet 
    "C" : { name: "C", url : "/Textures/c_texture.png", project : Projects[0] },// X no project yet 
    "Python" : { name: "Python", url : "/Textures/python_texture.png", project : Projects[0] },// X no project yet 
    "Csharp" : { name: "C#", url : "/Textures/csharp_texture.png", project : Projects[0] },// X no project yet 
    "Kotlin" : { name: "Kotlin", url : "", project : Projects[0] },// X no project yet 
} as const

export type Language = (typeof Languages)[keyof typeof Languages]
