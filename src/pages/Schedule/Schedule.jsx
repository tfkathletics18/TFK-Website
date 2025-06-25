import { summer2025Schedule, trainingLevelDescriptions } from "../../constants";
import "./Schedule.scss";

function Schedule() {

  return (
    <main className="schedule">
        <section className="schedule__offerings">
            <h1 className="head-text schedule__header-title">Weekly Schedule</h1>
            <h2 className="second-head-text schedule__second-title">Group Training</h2>
            <ul className="schedule__list">
            {trainingLevelDescriptions.map((item, index) => {
                return (
                <li key={index} className="p-text schedule__list-item"><strong>{item.level}</strong> {" "} {item.description}</li>
                )
            })}
            </ul>

            {/* Mobile Cards */}
            <div className="schedule__card-view">
                {summer2025Schedule.map((row, index) => (
                    <div key={index} className="schedule__card">
                    <table className="schedule__card-table">
                        <tbody>
                        <tr>
                            <th className="title-text">Day</th>
                            <td className="p-text">{row.day}</td>
                        </tr>
                        <tr>
                            <th className="title-text">Age Group</th>
                            <td className="p-text">{row.ageGroup}</td>
                        </tr>
                        <tr>
                            <th className="title-text">Level</th>
                            <td className="p-text">{row.level}</td>
                        </tr>
                        <tr>
                            <th className="title-text">Time Slot</th>
                            <td className="p-text">{row.timeSlot}</td>
                        </tr>
                        <tr>
                            <th className="title-text">Location</th>
                            <td className="p-text">{row.location}</td>
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
                    <th className="title-text">Day</th>
                    <th className="title-text">Age Group</th>
                    <th className="title-text">Level</th>
                    <th className="title-text">Time Slot</th>
                    <th className="title-text">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {summer2025Schedule.map((row, index) => (
                    <tr key={index}>
                        <td className="p-text">{row.day}</td>
                        <td className="p-text">{row.ageGroup}</td>
                        <td className="p-text">{row.level}</td>
                        <td className="p-text">{row.timeSlot}</td>
                        <td className="p-text">{row.location}</td>
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
