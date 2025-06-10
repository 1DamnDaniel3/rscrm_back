export class BaseController {
    constructor(model, options = {}) {
        this.model = model;
        this.modelIdName = options.modelIdName || 'id';
        this.defaultIncludes = Array.isArray(options.includes) ? options.includes : undefined;
        this.attributes = Array.isArray(options.attributes) ? options.attributes : undefined;
    }

    async create(req, res) {
        try {
            const item = await this.model.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const queryOptions = {};

            // Добавляем includes только если это массив и он не пустой
            if (Array.isArray(this.defaultIncludes)) {
                queryOptions.include = this.defaultIncludes;
            }

            // Включаем атрибуты главной модели
            if (Array.isArray(this.attributes)) {
                queryOptions.attributes = this.attributes;
            }

            const items = await this.model.findAll(queryOptions);
            res.json(items);
        } catch (error) {
            res.status(500).json({
                message: error.message,
                // Добавляем детали ошибки для отладки
                details: error.errors?.map(err => err.message)
            });
        }
    }

    async getAllWhere(req, res) {
        try {
            const whereClause = {};

            // 1. Фильтруем только разрешенные поля основной модели
            const modelFields = Object.keys(this.model.rawAttributes);

            for (const key of Object.keys(req.body)) {
                if (modelFields.includes(key)) {
                    whereClause[key] = req.body[key];
                }
            }


            // 2. Настраиваем связи БЕЗ условий
            const safeIncludes = (this.defaultIncludes || []).map(include => ({
                ...include,
                required: false,    // Не превращает JOIN в INNER JOIN
                where: {}          // Сбрасываем все условия для связи
            }));

            // 3. Формируем запрос
            const items = await this.model.findAll({
                where: whereClause,
                include: safeIncludes,
                subQuery: false,
                attributes: this.attributes || undefined
            });
            res.json(items);
        } catch (error) {
            // Обработка ошибок
        }
    }


    async getOne(req, res) {
        try {
            const queryOptions = {
                where: { [this.modelIdName]: req.params.id }
            };

            // Та же проверка для getOne
            if (Array.isArray(this.defaultIncludes)) {
                queryOptions.include = this.defaultIncludes;
            }

            const item = await this.model.findOne(queryOptions);

            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({
                message: error.message,
                details: error.errors?.map(err => err.message)
            });
        }
    }

    async updateData(req, res) {
        try {
            const updatedItem = await this.model.update(req.body, {
                where: { [this.modelIdName]: req.params.id },
                returning: true,
            });
            if (updatedItem[0] === 0 || !updatedItem[1][0]) {
                return res.status(404).json({ message: 'Элемент не найден' });
            }
            res.json(updatedItem[1][0]);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const item_id = req.params.id;
            const deletedItem = await this.model.destroy({
                where: { [this.modelIdName]: item_id },
            });
            if (!deletedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json({ message: 'Item deleted', id: item_id });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}