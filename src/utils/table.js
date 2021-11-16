class Table{
    constructor(id, name, listCrud, lastUpdate, tags) {
        this._id = id
        this._name = name
        this._listCrud = listCrud
        this._lastUpdate = lastUpdate
        this._timeCreation = Date.now()
        this._tags = tags
    }

    get(){
        return [this._id, this._name, this._listCrud, this._lastUpdate, this._timeCreation, this._tags]
    }

    setUpdate(newName, newCrud, newTags){
        this._name = newName
        this._listCrud = newCrud
        this._lastUpdate = Date.now()
        this._tags = newTags
    }
}