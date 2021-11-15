class Crud{
    constructor(nameList, cards, timeCreation) {
        this._nameList = nameList
        this._cards = cards
        this._timeCreation = Date.now()
    }

    get(){
        return [this._nameList, this._cards, this._timeCreation]
    }

    setUpdate(newNameList, newCards){
        this._nameList = newNameList
        this._cards = newCards
    }
}