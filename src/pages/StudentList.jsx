import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import students from "../data/students";

function StudentList() {
    const {
        favouriteStudents,
        setFavouriteStudents
    } = useContext(StudentContext);

    const addToFavourite = (student) => {
        const alreadyFavourite = favouriteStudents.some(
            (favStudent) => favStudent.id === student.id
        );

        if (!alreadyFavourite) {
            setFavouriteStudents([
                ...favouriteStudents,
                student
            ]);
        }
    };

    return (
        <main className="page-container">

            <section className="hero">
                <div>
                    <span className="eyebrow">STUDENT DIRECTORY</span>

                    <h1>
                        Discover Your
                        <span> Favourite Students</span>
                    </h1>

                    <p>
                        Explore the student directory and build your
                        personal list of favourite students.
                    </p>
                </div>

                <div className="hero-badge">
                    <strong>{students.length}</strong>
                    <span>Students</span>
                </div>
            </section>

            <section className="section-header">
                <div>
                    <h2>All Students</h2>
                    <p>Select students you want to add to your favourites.</p>
                </div>

                <div className="count-badge">
                    ❤️ {favouriteStudents.length} Favourite
                    {favouriteStudents.length !== 1 && "s"}
                </div>
            </section>

            <section className="student-grid">

                {students.map((student) => {

                    const isFavourite = favouriteStudents.some(
                        (favStudent) => favStudent.id === student.id
                    );

                    return (
                        <article
                            className="student-card"
                            key={student.id}
                        >
                            <div className="student-avatar">
                                {student.name.charAt(0)}
                            </div>

                            <div className="student-info">
                                <span className="student-id">
                                    ID #{student.id}
                                </span>

                                <h3>{student.name}</h3>

                                <p>
                                    Roll Number
                                    <strong>{student.rollNumber}</strong>
                                </p>
                            </div>

                            <button
                                className={
                                    isFavourite
                                        ? "favourite-btn added"
                                        : "favourite-btn"
                                }
                                onClick={() => addToFavourite(student)}
                                disabled={isFavourite}
                            >
                                {isFavourite
                                    ? "❤️ Added"
                                    : "♡ Add Favourite"}
                            </button>
                        </article>
                    );
                })}

            </section>

        </main>
    );
}

export default StudentList;