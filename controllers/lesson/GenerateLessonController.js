import { generateLessonService } from "../../services/index.js";

export class GenerateLessonsController {
    async generateLessons(req, res) {
        try {
            const school_id = req.user.school_id; // или req.body.school_id

            const response = await generateLessonService.generate(school_id);

            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ошибка генерации занятий." });
        }
    }
}

export const generateLessonsController = new GenerateLessonsController();
