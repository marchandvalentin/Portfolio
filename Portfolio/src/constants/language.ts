export const Language = {
    HTML: { name: "HTML", url : "/Textures/html_texture.png"},
    CSS: { name: "CSS", url : "/Textures/css_texture.png"},
    JavaScript: { name: "JavaScript", url : "/Textures/javascript_logo.png"},
    React: { name: "React", url : "/Textures/react_texture.png"},
    TypeScript: { name: "TypeScript", url : "/Textures/ts_texture.png"},
    PHP : { name: "PHP", url : "/Textures/php_texture.png"},
    Java : { name: "Java", url : "/Textures/java_texture.png"},
    Laravel : { name: "Laravel", url : "/Textures/laravel_texture.png"},
    C : { name: "C", url : "/Textures/c_texture.png"},
    Python : { name: "Python", url : "/Textures/python_texture.png"},
    Csharp : { name: "C#", url : "/Textures/csharp_texture.png"},
} as const

export type Language = (typeof Language)[keyof typeof Language]
