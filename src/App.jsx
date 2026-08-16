import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import Navbar from "./components/Navbar";
import { StudentProvider } from "./context/StudentContext";

function App() {
    return (
        <BrowserRouter basename="/Favourite-Student-List">

            <StudentProvider>

                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={<StudentList />}
                    />

                    <Route
                        path="/favourites"
                        element={<FavouriteStudents />}
                    />
                </Routes>

            </StudentProvider>

        </BrowserRouter>
    );
}

export default App;