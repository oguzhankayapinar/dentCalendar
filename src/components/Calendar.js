import { CalendarDate, CaretUp } from "react-bootstrap-icons"
import { calendarItems } from "./constants"

function Calendar() {

    return (
        <div className="Calendar">
            <div className="header">
                <div className="title">
                    <CalendarDate size="20" />
                    <p>Calendar</p>
                    <div className="btns">
                        <span>
                            <CaretUp size="20" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="items">
                {calendarItems.map(item =>
                    <div className="item" key={item}>
                        {item}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Calendar