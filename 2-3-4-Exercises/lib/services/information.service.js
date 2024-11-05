const {NotFoundError } =  require("@aliceo2/web-ui")
 class InformationService{
    constructor(){
        this._information = {
            alice: "Alice is a software engineer",
            bob: "Bob is a software engineer",
            charlie:"Charlie is a software engieer"
        }
    }

    getInformationByUser(name){
        if(!this._information[name]){
            throw new NotFoundError(`User ${name} not found`)
        }
        return this._information[name];
    }
}

module.exports.InformationService = InformationService;