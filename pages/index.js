import Head from "next/head";
import { useState } from "react";
import Day from "../components/Day";
import TimeTable from "../components/TimeTable";
import Week from "../components/Week";
import WeekCounter from "../components/WeekCounter";
import { prisma } from "../lib/db";

export default function Home({ schedule_data: { schedule_json } }) {
    const [currentWeekNumber, setCurrentWeekNumber] = useState(false);
    return (
        <>
            <Head>
                <title>МИРЭА Расписание</title>
                <meta name="description" content="Расписание для БФБО-01-21" />
                <meta property="og:image" content="/logo.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen w-screen bg-slate-100 flex justify-center">
                <div className="w-full lg:w-3/4 flex flex-col  items-center pt-4">
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
                        <TimeTable />
                    </Week>
                </div>
            </main>

            <footer></footer>
        </>
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
