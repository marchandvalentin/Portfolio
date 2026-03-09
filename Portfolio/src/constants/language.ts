import { Projects } from "./projects"

export const Languages = {
    "HTML": { name: "HTML", url : "/Textures/html_texture.png", project : Projects[1] },
    "CSS": { name: "CSS", url : "/Textures/css_texture.png", project : Projects[1] },
    "JavaScript": { name: "JavaScript", url : "/Textures/javascript_logo.png", project : Projects[2] },
    "React": { name: "React", url : "/Textures/react_texture.png", project : Projects[3] }, 
    "TypeScript": { name: "TypeScript", url : "/Textures/ts_texture.png", project : Projects[4] }, 
    "PHP" : { name: "PHP", url : "/Textures/php_texture.png", project : Projects[5] },
    "Java" : { name: "Java", url : "/Textures/java_texture.png", project : Projects[6] },
    "Laravel" : { name: "Laravel", url : "/Textures/laravel_texture.png", project : Projects[7] },
    "C" : { name: "C", url : "/Textures/c_texture.png", project : Projects[8] }, 
    "Python" : { name: "Python", url : "/Textures/python_texture.png", project : Projects[9] }, 
    "Csharp" : { name: "Csharp", url : "/Textures/csharp_texture.png", project : Projects[10] }, 
    "Kotlin" : { name: "Kotlin", url : "", project : Projects[11] },// TODO : url(texture) 
} as const

export type Language = (typeof Languages)[keyof typeof Languages]
