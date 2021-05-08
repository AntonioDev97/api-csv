const { DBInstance, Models } = require("../../services/sequelize.service");
const convert = require("convert-csv-to-json");

const handleCsv = async (request, response) => {
    try {
        const { provider, description } = request.body;
        const CSV = request?.file?.buffer;
        if(!provider || !CSV) return response.status(400).send({
            success: false,
            error: "File or provider invalid!"
        });
        let data = convert.fieldDelimiter(',').csvStringToJson(CSV.toString());
        const transaction = await DBInstance.transaction();
        const storeProvider = await Models.Provider.create({
            name: provider,
            description: description ? description : null
        }, { transaction });
        if(storeProvider) {
            data = data.map(item => {
                let output = {};
                output.uuid = item.UUID,
                output.vin = item.VIN,
                output.make = item.Make,
                output.model = item.Model,
                output.mileage = item.Mileage,
                output.year = item.Year,
                output.price = item.Price,
                output.zip_code = item.ZipCode,
                output.provider_id = storeProvider.id
                return output;
            });
            const store = await Models.Data.bulkCreate(data, { transaction });
            if (Array.isArray(store) && store.length === data.length) {
                await transaction.commit();
                return response.status(200).send({
                    success: true,
                    message: 'Data stored successfully!',
                    data: store
                });
            } else {
                await transaction.rollback();
                return response.status(500).send({
                    success: false,
                    error: storeProvider,
                    errorDesc: "Data could not be stored!"
                });
            }
        } else {
            await transaction.rollback();
            return response.status(500).send({
                success: false,
                error: storeProvider,
                errorDesc: "Provider could not be stored!"
            });
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports = handleCsv;