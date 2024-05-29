export default class Food {
  constructor(foodJSON) {
    this._id = foodJSON.id
    this._nom = foodJSON.nom
    this._photo = foodJSON.photo ?? ""
    this._qte = foodJSON.qte ?? ""
  }

  get nom() {
    return this._nom
  }

  get id() {
    return this._id
  }

  get photo() {
    return this._photo
  }

  get qte() {
    return this._qte
  }

  toString() {
    return `--> ${this._nom} (${this._qte})`;
  }
}
