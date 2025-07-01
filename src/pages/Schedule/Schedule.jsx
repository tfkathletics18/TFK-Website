import { summer2025Schedule, trainingLevelDescriptions, summerSeasonHolidays } from "../../constants";
import "./Schedule.scss";

function Schedule() {
    const handleLink = (url) => {
        window.open(url, '_blank');
    };

  return (
    <main className="schedule">
        <section className="schedule__offerings">
            <h1 className="head-text schedule__header-title">Weekly Schedule</h1>
            <p className="p-text schedule__subtext">The summer season will take place from the beginning of May until the end of October, weather permitting.</p>
            <h2 className="second-head-text schedule__second-title">Field Locations</h2>
            <p className="p-text schedule__subtext"><strong>Mitchell Pond Park -</strong> 12820 Estate Garden Dr, Richmond Hill, ON L4E 1J4 <span className="p-text p-text--500 schedule__span-link" onClick={() => handleLink('https://maps.app.goo.gl/mcY2JyswxxcLUaHY8')}>(View on Google Maps)</span></p>
            <p className="p-text schedule__subtext"><strong>Bayview Hill Community Centre -</strong> 114 Spadina Rd, Richmond Hill, ON L4B 2Y9 <span className="p-text p-text--500 schedule__span-link" onClick={() => handleLink('https://maps.app.goo.gl/5Wjpkkgs5zrLuY2R7')}>(View on Google Maps)</span></p>
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
                            <th className="title-text schedule__table-header">Day</th>
                            <td className="p-text schedule__table-data">{row.day}</td>
                        </tr>
                        <tr>
                            <th className="title-text schedule__table-header">Age Group</th>
                            <td className="p-text schedule__table-data">{row.ageGroup}</td>
                        </tr>
                        <tr>
                            <th className="title-text schedule__table-header">Level</th>
                            <td className="p-text schedule__table-data">{row.level}</td>
                        </tr>
                        <tr>
                            <th className="title-text schedule__table-header">Time Slot</th>
                            <td className="p-text schedule__table-data">{row.timeSlot}</td>
                        </tr>
                        <tr>
                            <th className="title-text schedule__table-header">Location</th>
                            <td className="p-text schedule__table-data">{row.location}</td>
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
                    <th className="title-text schedule__table-header">Day</th>
                    <th className="title-text schedule__table-header">Age Group</th>
                    <th className="title-text schedule__table-header">Level</th>
                    <th className="title-text schedule__table-header">Time Slot</th>
                    <th className="title-text schedule__table-header">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {summer2025Schedule.map((row, index) => (
                    <tr key={index}>
                        <td className="p-text schedule__table-data">{row.day}</td>
                        <td className="p-text schedule__table-data">{row.ageGroup}</td>
                        <td className="p-text schedule__table-data">{row.level}</td>
                        <td className="p-text schedule__table-data">{row.timeSlot}</td>
                        <td className="p-text schedule__table-data">{row.location}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div className="schedule__holidays-container">
                <h2 className="second-head-text schedule__third-title">Holidays</h2>
                <p className="p-text schedule__subtext">There will not be training on any of the following federal holidays during the summer season.</p>
                <div className="schedule__holidays">
                    <ul className="schedule__list--bottom">
                    {summerSeasonHolidays.map((item, index) => {
                        return (
                        <li key={index} className="p-text schedule__list-item schedule__list-item--bottom"><strong>{item}</strong></li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Schedule;
