const {updateAndSendExpressResponseFromNativeError, InvalidInputError } =  require("@aliceo2/web-ui")
class InformationController
{
    /**
     * 
     * @param {InformationService} informationService - Service to be used to retrieve information
     */
    constructor(informationService){
        this._informationService = informationService
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    retrieveInformationHandler(req,res){
        const name = req.params.name;
        if(!name && !name.trim())
            updateAndSendExpressResponseFromNativeError(res,new InvalidInputError("Name is required"));
        try{
            const information = this._informationService.getInformationByUser(name);
            res.json(information);
        }
        catch (error){
           updateAndSendExpressResponseFromNativeError(res,error);
        }
    }

}
module.exports.InformationController = InformationController;