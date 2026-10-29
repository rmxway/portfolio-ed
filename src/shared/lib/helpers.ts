export const repoLink = (name: string) => `https://raw.githubusercontent.com/rmxway/${name}/refs/heads/master`;
export const linkToJson = (link: string) => `${repoLink(link)}/${link}.json`;
