interface PropTypes {
    id: number;
    title: string;
    desc: string;
    img: string;
    alt: string;
    ishosted: boolean;
    hostedLink: string;
    githubLink: string;
    isMore: boolean;
    projectID?: int
}

interface images {
    id: number;
    url: string;
}

interface frameworks {
    id: number;
    logo: string;
    name: string;
}

interface Project extends PropTypes {
    id: number;
    videolink: string;
    longdesc: string;
    projectId: number;
    images: images[]
    frameworks: frameworks[]
}