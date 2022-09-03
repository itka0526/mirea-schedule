import xlsx from "xlsx";
import { prisma } from "../../lib/db";
import scheduleFormatter from "../../lib/scheduleFormatter";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { url, currentScheduleName } = req.body;

            const fetchedExcelFile = await fetch(url);

            const parsedFile = await fetchedExcelFile.arrayBuffer();

            const workbook = xlsx.read(parsedFile);

            const sheetName = workbook.SheetNames.find(
                (scheduleName) => scheduleName === currentScheduleName
            );

            if (sheetName) {
                const data = scheduleFormatter(workbook.Sheets[sheetName]);
                await prisma.schedule.update({
                    where: {
                        id: 1,
                    },
                    data: {
                        schedule_json: data,
                    },
                });
                return res.status(200).send(data);
            }
            return res.status(503).send("Something went wrong :/");
        } catch (error) {
            console.log(error);
            return res.status(503).send("Something went wrong :/");
        }
    } else {
        return res
            .status(400)
            .send("Unauthorized... This will be reported to HQ.");
    }
}
