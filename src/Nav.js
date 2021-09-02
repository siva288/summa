import "./nav.css";
import { Link} from "react-router-dom";
function Nav()
{
    return(
        <div>
             <nav className="nav">
                <h2>ExerciseTracker</h2>
                    <Link className="list" to="/">Exercise</Link>
                    <Link className="list" to="/createExercise">Create Exercise</Link>
                    <Link className="list" to="/createuser">Create User</Link>
            </nav>
        </div>
    )

}
export default Nav;