import { prisma } from "../../lib/db";
import scheduleFormatter from "../../lib/scheduleFormatter";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        try {
            const { data: requestData, password, letters } = req.body;

            if (password !== process.env.PASSWORD)
                return res.status(400).json({
                    success: false,
                    message: "Unauthorized... This will be reported to HQ.",
                });

            const updatedData = scheduleFormatter(requestData, letters);
            console.log(updatedData);

            await prisma.schedule.update({
                where: {
                    id: 1,
                },
                data: {
                    schedule_json: updatedData,
                },
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(503).json({ success: false });
        }
    } else {
        return res.status(400).json({
            success: false,
            message: "Unauthorized... This will be reported to HQ.",
        });
    }
}
