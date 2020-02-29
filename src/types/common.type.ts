export interface INoteAction {
    type: string;
    value?: string;
}

export interface INote {
    headline: string;
    content: string;
}