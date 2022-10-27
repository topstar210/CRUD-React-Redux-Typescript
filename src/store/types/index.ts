// Define a type for the slice state
export interface postsState {
    list: any[],
    selected_post: {
        id?: string,
        title?: string,
        content?: string
    }
}

export type ApplicationAction = 
    | postsState;