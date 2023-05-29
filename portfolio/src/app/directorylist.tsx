import AboutMe from "../content/AboutMe.mdx";
export const DirList = [
    {
        title: "About Me",
        backgroundRender: "question-mark-svgrepo-com_animated.svg",
        backgroundImage: "wilderness-pexels.jpeg",
        contents: <AboutMe/>
    }, 
    {
        title:"Projects",
        backgroundRender: "projects_anim.svg",
        backgroundImage: "blueprint.jpg",
        contents: <>Oops! This is in development.</>,
    }, 
    {
        title: "Contact",
        backgroundRender: "mail-read-svgrepo-com_animated.svg",
        backgroundImage: "pexels-photo-1148999.jpeg",
        contents: <>Oops! This is in development.</>
        
    }, 
    {
        title: "Blog", 
        backgroundRender: "",
        // gears.jpg resourced from https://www.vecteezy.com/vector-art/294074-gears-on-blue-background-template
        // creator: Graphics RF on vecteezy
        backgroundImage: "gears.jpg",
        contents: <>Oops! This is in development.</>
    },
    {
        // resourced from https://s.yimg.com/ny/api/res/1.2/nrVEvhMyLPC4qUTWZv60cw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/coin_rivet_596/3fd0a4ec5ae28d6f32593a9fe1e6752a
        // at https://finance.yahoo.com/news/iota-outlines-tokenisation-framework-mainnet-094226640.html
        title: "Donate",
        backgroundRender: "iota-svgrepo-com_animated.svg",
        backgroundImage: "iota_pattern.jpeg",
        contents: <>Oops! This is in development.</>
    }
  ];