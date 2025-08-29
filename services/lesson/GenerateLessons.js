import { Schedule, Lesson } from "../../db/index.js";
import { Op } from "sequelize";
import { startOfDay, addDays, endOfMonth, addMonths } from "date-fns";

export class GenerateLessonService {
  async generate(school_id) {
    try {
      // 1) Определяем диапазон: со следующего дня до конца следующего месяца
      const today = startOfDay(new Date());
      const startDate = addDays(today, 1);
      const endDate = endOfMonth(addMonths(today, 1));

      // 2) Достаём все существующие lessons в этом диапазоне для текущей школы
      const existingLessons = await Lesson.findAll({
        where: {
          school_id,
          lesson_date: { [Op.between]: [
            `${startDate.getFullYear()}-${String(startDate.getMonth()+1).padStart(2,'0')}-${String(startDate.getDate()).padStart(2,'0')}`,
            `${endDate.getFullYear()}-${String(endDate.getMonth()+1).padStart(2,'0')}-${String(endDate.getDate()).padStart(2,'0')}`
          ] }
        },
        attributes: ['lesson_date', 'start_time']
      });

      const existingSet = new Set(
        existingLessons.map(ls => `${ls.lesson_date}|${ls.start_time}`)
      );

      // 3) Берём расписания, пересекающиеся с диапазоном
      const schedules = await Schedule.findAll({
        where: {
          school_id,
          active_from: { [Op.lte]: endDate },
          active_to:   { [Op.gte]: startDate },
        },
      });

      // 4) Для каждого schedule генерируем даты
      for (const sch of schedules) {
        const jsWeekday = sch.weekday % 7;

        for (
          let d = new Date(startDate);
          d <= endDate;
          d = addDays(d, 1)
        ) {
          if (d.getDay() !== jsWeekday) continue;

          // Собираем строку YYYY-MM-DD без смещений
          const yyyy = d.getFullYear();
          const mm = String(d.getMonth() + 1).padStart(2, '0');
          const dd = String(d.getDate()).padStart(2, '0');
          const dateOnly = `${yyyy}-${mm}-${dd}`;

          // Ключ для проверки
          const key = `${dateOnly}|${sch.start_time}`;

          if (existingSet.has(key)) {
            // уже есть — пропускаем
            continue;
          }

          // Создаём урок и сразу добавляем ключ в Set,
          // чтобы в пределах одного запуска не дублировать
          await Lesson.create({
            group_id:         sch.group_id,
            direction_id:     sch.direction_id || null,
            teacher_id:       sch.teacher_id   || null,
            lesson_date:      dateOnly,
            start_time:       sch.start_time,
            duration_minutes: sch.duration_minutes,
            school_id:        sch.school_id,
          });

          existingSet.add(key);
        }
      }
    } catch (err) {
      throw err;
    }
  }
}

export const generateLessonService = new GenerateLessonService();
