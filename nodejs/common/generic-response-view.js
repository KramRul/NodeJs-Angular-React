class GenericResponseView {
    constructor(model, error, status = 201){
        this.model = model;
        this.error = error;
        this.status = status;
    }
}

module.exports = GenericResponseView;