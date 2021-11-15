class Cards {
    constructor(id, member, description, tag, checklist, deadline, lastUpdate, timeCreation) {
        this._id = id
        this._member = member
        this._description = description
        this._tag = tag
        this._checklist = checklist
        this._deadline = deadline
        this._lastUpdate = lastUpdate
        this._timeCreation = timeCreation
    }
    get(){
        return [this._id, this._member, this._description, this._tag, this._checklist, this._deadline, this._lastUpdate, this._timeCreation]
    }

    setCreate(id, member, description, tag, checklist, deadline, lastUpdate, timeCreation){
        this._id = id
        this._member = member
        this._description = description
        this._tag = tag
        this._checklist = checklist
        this._deadline = deadline
        this._lastUpdate = lastUpdate
        this._timeCreation = timeCreation
    }

    setUpdate(newMember, newDescription, newTag, newChecklist, newDeadline, newLastUpdate, newTimeCreation){
        this._member = newMember
        this._description = newDescription
        this._tag = newTag
        this._checklist = newChecklist
        this._deadline = newDeadline
        this._lastUpdate = newLastUpdate
        this._timeCreation = newTimeCreation
    }
}