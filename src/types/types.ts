export interface NavItemProps {
    linkTo: string,
}

export interface NextSectionProps {
    sections: HTMLCollection | null,
}

export interface ProgressProps {
    percentage: number,
    icon?: string,
    title?: string,
}

export interface SkillsProps {
    skills: ProgressProps[],
}

export interface LinkButtonProps {
    link: string,
    icon: string,
    targetBlank?: boolean,
}

export interface ContactCardProps {
    icon: string[],
    linkTo: string
}