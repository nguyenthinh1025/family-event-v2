import React from "react";
// import { setLicenseKey } from '@syncfusion/ej2-base';
import {
    Agenda,
    Day,
    DragAndDrop,
    Inject,
    Month,
    Resize,
    ScheduleComponent,
    Week,
    WorkWeek,
} from "@syncfusion/ej2-react-schedule";

// import { scheduleData } from "../data/dummy";
// import { Header } from "../components";

// // Thiết lập mã đăng ký Syncfusion
// setLicenseKey('YOUR_LICENSE_KEY');

const Schedule = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            {/* <Header category="App" title="Calendar" /> */}
            <ScheduleComponent
                startHour='7:00'
                height="500px"
                // eventSettings={{ dataSource: scheduleData }}
                selectedDate={new Date()}
                timeScale={{ enable: true, interval: 135, slotCount: 8 }}
            >
                <Inject
                    services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
                />
            </ScheduleComponent>
        </div>
    );
};

export default Schedule;