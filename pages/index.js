import { useState } from "react";
import Day from "../components/Day";
import DefaultLayout from "../components/DefaultLayout";
import HelpButton from "../components/HelpButton";
import Week from "../components/Week";
import WeekCounter from "../components/WeekCounter";
import { prisma } from "../lib/db";

export default function Home({
    schedule_data: { schedule_json, updatedAt },
    currentWeekNumber,
}) {
    console.log(currentWeekNumber);
    return (
        <DefaultLayout title={"МИРЭА Расписание"}>
            <HelpButton date={updatedAt} />
            <WeekCounter currentWeekNumber={currentWeekNumber} />
            <Week>
                <Day day="Понедельник" data={schedule_json["Понедельник"]} />
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

    const SECOND = 1e3,
        MINUTE = SECOND * 60,
        HOUR = MINUTE * 60,
        DAY = HOUR * 24,
        WEEK = DAY * 7;

    const curr = Date.now(),
        prev = Date.parse("08/29/2022 0:00:00"),
        diff = curr - prev;

    return {
        props: {
            schedule_data: JSON.parse(strJson),
            currentWeekNumber: Math.ceil(diff / WEEK),
        },
    };
}
