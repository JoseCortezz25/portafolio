export const projects = [
  {
    id: '01',
    name: 'JSON AI',
    description: `Aplicación web que facilita la generación rápida y sencilla de mocks asistidos por IA.

    Permite crear datos ficticios en formato JSON sobre cualquier tema introduciendo una estructura o utilizando un tipo o interfaz. La aplicación ofrece la opción de seleccionar entre modelos como GPT (OpenAI), Gemini (Google) o Claude (Anthropic), y permite ajustar el nivel de creatividad para la generación de contenidos.`,
    technologies: ['Next.js', 'React', 'Shadcn UI', 'Tailwind CSS', 'Langchain', 'Next Intl', 'TypeScript'],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/JSON-AI/main/screenshot.jpg'
    ],
    summary: 'Crea mocks con ayuda de la IA. Elige el nivel de creatividad y LLM de tu agrado.',
    repo: 'https://github.com/JoseCortezz25/JSON-AI',
    page: 'https://json-ai-app.vercel.app/'
  },
  {
    id: '0',
    name: 'Idea: Notion Clone',
    description: 'Idea es un clon de Notion, una aplicación de notas y gestión de proyectos. Esta aplicación fue desarrollada con React, usando React Hooks y Axios, y cuenta con capacidad de adaptarse a diferentes dimensiones de pantalla. El proyecto hace uso de la API de Notion para la creación de notas y gestión de proyectos.',
    summary: 'Clon de Notion, una aplicación de notas y gestión de proyectos.',
    technologies: ['Next.js', 'React', 'Shadcn UI', 'Tailwind CSS'],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/notion-clone/main/screenshot2.png'
    ],
    repo: 'https://github.com/JoseCortezz25/notion-clone',
    page: 'https://idea-note-taking-app.vercel.app/'
  },
  {
    id: '1',
    name: 'RegEx Wizard',
    description: 'RegEx Wizard es una aplicación de generación de expresiones regulares simple y fácil de usar, que permite generar expresiones regulares a partir de prompts escritos en lenguaje natural o pasar una expresión regular para que la aplicación explique su significado. Esta aplicación fue desarrollada con React, usando React Hooks y Axios, y cuenta con capacidad de adaptarse a diferentes dimensiones de pantalla. El proyecto hace uso de la API de OpenAI para la generación de expresiones regulares y su explicación.',
    summary: 'Generador de expresiones regulares a partir solicitudes escritas en lenguaje natural. Hace uso de la API Google Gemini Pro ✨.',
    technologies: [
      'JavaScript', 'React', 'React Hooks', 'Axios', 'Google Gemini Pro'
    ],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/regex-wizard/main/public/screenshot.png'
    ],
    repo: 'https://github.com/JoseCortezz25/regex-wizard',
    page: 'https://regex-wizard.vercel.app/'
  },
  {
    id: '2',
    name: 'PokeRedux',
    description:
      'Una aplicación web permite a los usuarios ver las características de los Pokemones, compararlos, y filmarlos mediante sus tipos. La información se obtiene de la API de Pokemon, la cual brinda información actualizada y precisa sobre los Pokemones. La aplicación fue desarrollada utilizando React y Redux como el encargado de manejar el estado global. El usuario puede buscar y seleccionar un Pokemon de la lista y ver sus características detalladas, como su tipo, habilidades, stats y otras informaciones. También es posible comparar dos Pokemones para ver sus diferencias y similitudes.',
    summary:
      'Aplicación que muestra información sobre pokemones haciendo uso de la PokeAPI y permite la comparación entre ellos.',
    technologies: [
      'React',
      'React Hooks',
      'Axios',
      'Redux'
    ],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/pokeredux/master/screenshot.png'
    ],
    repo: 'https://github.com/JoseCortezz25/pokeredux',
    page: 'https://pokeredux.vercel.app/'
  },
  {
    id: '3',
    name: 'To-Do list Machine',
    description:
      'Esta aplicación web es una herramienta para llevar un seguimiento de tareas pendientes y lograr una mayor organización en el día a día. A su vez, las tareas son filtradas de acuerdo si fueron completadas o siguen pendientes. Desarrollada con React, utiliza hooks para brindar una experiencia de usuario intuitiva y eficiente. Además, el local storage se utiliza para almacenar las tareas y mantenerlas disponibles, incluso después de cerrar la página web.',
    summary:
      'Una aplicación de To Do, donde clasifica las tareas por pendientes o realizadas.',
    technologies: [
      'React',
      'React Hooks',
      'Axios',
      'Local Storage'
    ],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/todo-list-machine/master/screenshot.png',
      'https://raw.githubusercontent.com/JoseCortezz25/todo-list-machine/master/screenshot2.png'
    ],
    repo: 'https://github.com/JoseCortezz25/todo-list-machine',
    page: 'https://todo-list-machine-app.vercel.app/'
  },
  {
    id: '4',
    name: 'Where in the world?',
    description:
      'Esta aplicación permite a los usuarios visualizar información detallada de los países del mundo, incluyendo la población, bandera, capital, idioma, moneda y más. Con un buscador interactivo, los usuarios pueden buscar y seleccionar un país específico para ver su información detallada. A su vez, cuenta con modo claro y oscuro en su interfaz. La aplicación fue desarrollada utilizando Angular, hace uso de la API proveída por REST Countries y cuenta con un diseño responsive adaptado a diferentes dimensiones de pantalla.',
    summary:
      'Sitio web con una lista completa de todos los países del mundo, incluyendo información relevante sobre cada uno.',
    technologies: ['Angular'],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/where-in-the-world-app/master/screenshot.png'
    ],
    repo: 'https://github.com/JoseCortezz25/where-in-the-world-app',
    page: 'https://where-in-the-world-app-delta.vercel.app/'
  },
  {
    id: '5',
    name: 'Simple Weather App',
    description:
      'Aplicación web que muestra el pronóstico del tiempo en cualquier ciudad del mundo. La información se obtiene de la API de Open Weather Map, la cual brinda información actualizada y precisa sobre la temperatura, humedad, viento y otros aspectos meteorológicos. La aplicación fue desarrollada utilizando Next.js',
    summary:
      'Página que proporciona información meteorológica específica para cada ciudad.',
    technologies: [
      'React',
      'Next.js',
      'React Hook',
      'Axios'
    ],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/SimpleWeatherApp/main/screenshot.png?token=GHSAT0AAAAAABV4OKY2ZOV22WCXV4TO7ZQ2YWIJR5Q'
    ],
    repo: 'https://github.com/JoseCortezz25/SimpleWeatherApp',
    page: 'https://simple-weather-app-cyan.vercel.app/'
  },
  {
    id: '6',
    name: 'Dictionary App',
    description:
      'Aplicación web que permite buscar el significado de cualquier palabra en inglés. La información se obtiene de una API pública, la cual brinda definiciones claras, pronunciación y ejemplos de uso de las palabras. La aplicación fue desarrollada utilizando React.js. y cuenta con modo oscuro',
    summary:
      'Aplicación de diccionario de inglés con definiciones, pronunciación y ejemplos provenientes de una API pública. Desarrollada con React.js usando Next.js',
    technologies: [
      'React',
      'Next.js',
      'React Hook',
      'Axios'
    ],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/dictionary-app/main/Screenshot.png',
      'https://raw.githubusercontent.com/JoseCortezz25/dictionary-app/main/Screenshot.png2'
    ],
    repo: 'https://github.com/JoseCortezz25/dictionary-app',
    page: 'https://dictionary-application.vercel.app/'
  },
  {
    id: '7',
    name: 'Tic Tac Toe',
    description:
      'El tic tac toe, tres en línea o triqui 🇨🇴 es un juego donde hay que poner tres símbolos iguales en una fila. A los símbolos se les dice ceros y cruces, pero en cada país tienen otros nombres.',
    summary:
      'Un juego de tres símbolos iguales en fila, llamados ceros y cruces o de otras formas hecho con React.',
    technologies: ['React', 'React Hook'],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/tic-tac-toe-game/main/screenshot.png'
    ],
    repo: 'https://github.com/JoseCortezz25/tic-tac-toe-game',
    page: 'https://tic-tac-toe-game-flax.vercel.app/'
  },
  {
    id: '8',
    name: 'Code Notes',
    description:
      'Un simple editor de código en la web.',
    summary:
      'Un simple editor de código en la web.',
    technologies: ['Astro', 'Tippy', 'Monaco Editor'],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/code-notes/main/screenshot.png'
    ],
    repo: 'https://github.com/JoseCortezz25/code-notes',
    page: 'https://code-notes-pen.vercel.app/'
  },
  {
    id: '9',
    name: 'Markdown Editor',
    description:
      'Este es un editor de markdown que permite a los usuarios crear y editar documentos en formato markdown. Tiene un tema oscuro, cuenta con una vista de escritura, y una vista previa del documento.',
    summary:
      'Este es un editor de markdown que permite crear y editar documentos en formato markdown.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    images: [
      'https://raw.githubusercontent.com/JoseCortezz25/simple-markdown-editor/main/screenshot.png'
    ],
    repo: 'https://github.com/JoseCortezz25/simple-markdown-editor',
    page: 'https://simple-markdown-editor-bltj.vercel.app/'
  }
];