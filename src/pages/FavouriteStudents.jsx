import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {

    const {
        favouriteStudents,
        setFavouriteStudents
    } = useContext(StudentContext);

    const removeFromFavourite = (studentId) => {
        const updatedFavourites = favouriteStudents.filter(
            (student) => student.id !== studentId
        );

        setFavouriteStudents(updatedFavourites);
    };

    return (
        <main className="page-container">

            <section className="hero favourite-hero">

                <div>
                    <span className="eyebrow">
                        YOUR COLLECTION
                    </span>

                    <h1>
                        Your
                        <span> Favourite Students ❤️</span>
                    </h1>

                    <p>
                        Students you've selected as your favourites
                        are collected here.
                    </p>
                </div>

                <div className="hero-badge heart-badge">
                    <strong>{favouriteStudents.length}</strong>
                    <span>Favourites</span>
                </div>

            </section>

            {favouriteStudents.length === 0 ? (

                <section className="empty-state">

                    <div className="empty-icon">
                        ❤️
                    </div>

                    <h2>No Favourite Students Yet</h2>

                    <p>
                        You haven't added any students to your
                        favourites list.
                    </p>

                </section>

            ) : (

                <section className="student-grid">

                    {favouriteStudents.map((student) => (

                        <article
                            className="student-card favourite-card"
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
                                    <strong>
                                        {student.rollNumber}
                                    </strong>
                                </p>

                            </div>

                            <button
                                className="remove-btn"
                                onClick={() =>
                                    removeFromFavourite(student.id)
                                }
                            >
                                Remove
                            </button>

                        </article>

                    ))}

                </section>

            )}

        </main>
    );
}

export default FavouriteStudents;