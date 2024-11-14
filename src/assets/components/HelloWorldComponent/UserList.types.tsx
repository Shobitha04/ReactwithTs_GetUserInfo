export interface Name {
    title : string,
    first : string,
    last : string

}

export interface Login {
    void : string,
    username : string
}

export interface UserListProps {
    map(arg0: (user: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    length: number
    name : Name
    email : string,
    login : Login
}