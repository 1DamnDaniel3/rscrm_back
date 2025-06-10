import { Lead, LeadGroup } from "../../db/index.js";

export class LeadRegService {

    async createLead(leadData) {
        const transaction = await Lead.sequelize.transaction();
        try {
            const newLead = await Lead.create(leadData, { transaction });
            await LeadGroup.create({
                lead_id: newLead.id,
                group_id: leadData.group_id,
                school_id: newLead.school_id
            }, { transaction });

            await transaction.commit();
            return newLead;
        } catch (err) {
            await transaction.rollback();
            throw err;
        }

    }

}
export const leadRegService = new LeadRegService;