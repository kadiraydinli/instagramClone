export type ThemeType = "dark" | "light";
export type StatusType = "idle" | "loading" | "failed";
export type MediaType = "image" | "video";
export interface Media {
    id: string;
    type: MediaType,
    url: string;
}