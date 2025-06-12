import { Client, ClientGroup } from "../../db/index.js";

export class ClientRegService {

    async createClien(clientData) {
        const transaction = await Client.sequelize.transaction();
        try {
            const newClient = await Client.create(clientData, { transaction });
            await ClientGroup.create({
                client_id: newClient.id,
                group_id: clientData.group_id,
                school_id: newClient.school_id
            }, { transaction });

            await transaction.commit();
            return newClient;
        } catch (err) {
            await transaction.rollback();
            throw err;
        }

    }

}
export const clientRegService = new ClientRegService;