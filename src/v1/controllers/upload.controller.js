const handleCsv = (request, response) => {
    try {
        return response.status(200).send({
            message: 'it works!'
        })
    } catch (error) {
        
    }
}


module.exports = handleCsv;