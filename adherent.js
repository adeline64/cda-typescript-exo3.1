"use strict";
exports.__esModule = true;
exports.Adherent = void 0;
var budget_1 = require("./budget");
var Adherent = /** @class */ (function () {
    //constructor 
    function Adherent(nom, prenom) {
        this.role = [];
        this.id = Date.now.toString();
        this.nom = nom;
        this.prenom = prenom;
        this.budget = new budget_1.Budget(900, []);
        this.role = [];
        this.telephone = "telephone";
        this.email = "email";
    }
    Adherent.prototype.create = function () {
    };
    Adherent.prototype.read = function () {
    };
    Adherent.prototype.update = function () {
    };
    Adherent.prototype["delete"] = function () {
    };
    Adherent.prototype.voirBudget = function () {
        return this.budget.GetBudget();
    };
    Adherent.prototype.ModifierArgent = function (somme, ajout, nom, cate) {
        if (nom === void 0) { nom = ""; }
        if (cate === void 0) { cate = "Aucune"; }
        this.budget.ModifierArgent(somme, ajout, nom, cate);
        localStorage.setItem("user", JSON.stringify(this));
    };
    return Adherent;
}());
exports.Adherent = Adherent;
