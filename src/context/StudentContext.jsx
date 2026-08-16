import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
    const [favouriteStudents, setFavouriteStudents] = useState([]);

    return (
        <StudentContext.Provider
            value={{
                favouriteStudents,
                setFavouriteStudents
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}