import { summer2025Schedule } from "../../constants";
import "./Schedule.scss";

function Schedule() {

  return (
    <main className="schedule">
        <section className="schedule__page">
            <h1 className="schedule__header-title">Weekly Schedule</h1>

            {/* Mobile Cards */}
            <div className="schedule__card-view">
                {summer2025Schedule.map((row, index) => (
                    <div key={index} className="schedule__card">
                    <table className="schedule__card-table">
                        <tbody>
                        <tr>
                            <th>Day</th>
                            <td>{row.day}</td>
                        </tr>
                        <tr>
                            <th>Age Group</th>
                            <td>{row.ageGroup}</td>
                        </tr>
                        <tr>
                            <th>Level</th>
                            <td>{row.level}</td>
                        </tr>
                        <tr>
                            <th>Time Slot</th>
                            <td>{row.timeSlot}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>{row.location}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                ))}
            </div>

            {/* Desktop Table */}
            <div className="schedule__table-container">
                <table className="schedule__table">
                <thead>
                    <tr>
                    <th>Day</th>
                    <th>Age Group</th>
                    <th>Level</th>
                    <th>Time Slot</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {summer2025Schedule.map((row, index) => (
                    <tr key={index}>
                        <td>{row.day}</td>
                        <td>{row.ageGroup}</td>
                        <td>{row.level}</td>
                        <td>{row.timeSlot}</td>
                        <td>{row.location}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </section>
    </main>
  );
};

export default Schedule;
