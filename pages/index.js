import { useState } from "react";
import Day from "../components/Day";
import DefaultLayout from "../components/DefaultLayout";
import Week from "../components/Week";
import WeekCounter from "../components/WeekCounter";
import { prisma } from "../lib/db";

export default function Home({ schedule_data: { schedule_json } }) {
    const [currentWeekNumber, setCurrentWeekNumber] = useState(false);
    return (
        <DefaultLayout title={"МИРЭА Расписание"}>
            <WeekCounter currentWeekNumber={currentWeekNumber} />
            <Week>
                <Day
                    showHelp={true}
                    day="Понедельник"
                    data={schedule_json["Понедельник"]}
                />
                <Day day="Вторник" data={schedule_json["Вторник"]} />
                <Day day="Среда" data={schedule_json["Среда"]} />
                <Day day="Четверг" data={schedule_json["Четверг"]} />
                <Day day="Пятница" data={schedule_json["Пятница"]} />
                <Day day="Суббота" data={schedule_json["Суббота"]} />
            </Week>
        </DefaultLayout>
    );
}

export async function getServerSideProps() {
    const schedule = await prisma.schedule.findFirst({
        where: {
            id: 1,
        },
    });
    const strJson = JSON.stringify(schedule);
    return {
        props: { schedule_data: JSON.parse(strJson) },
    };
}
