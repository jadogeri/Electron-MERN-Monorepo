import { UserType } from "./UserType.type"

export type InfoTableProps = {
    users : UserType[];
    setUsers : React.Dispatch<React.SetStateAction<never[]>>
}