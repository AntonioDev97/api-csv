
const handleCsv = (request, response) => {
    try {
        const CSV = request.file.buffer;
        console.log(CSV.toString());
        return response.status(200).send({
            message: 'it works!'
        })
    } catch (error) {
        console.error(error);
    }
}


module.exports = handleCsv;