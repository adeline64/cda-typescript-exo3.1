"use strict";
exports.__esModule = true;
var Budget = /** @class */ (function () {
    //Constructeur
    function Budget(sommeTotal, operations) {
        this.sommeTotal = 900;
        this.sommeTotal = sommeTotal;
        this.operation = operations;
        this.id = Date.now().toString();
        this.operation = [];
    }
    //Methodes
    //ModifierArgent
    Budget.prototype.ModifierArgent = function (somme, ajout, nom, cate) {
        if (nom === void 0) { nom = ""; }
        if (cate === void 0) { cate = "Aucune"; }
        if (ajout) {
            var nouvelleSomme = this.sommeTotal + somme;
            this.EffectuerOperation(somme, ajout, nom, cate);
            this.sommeTotal = nouvelleSomme;
            return { nouvelleSomme: nouvelleSomme };
        }
        else {
            var nouvelleSomme = this.sommeTotal - somme;
            this.EffectuerOperation(somme, ajout, nom, cate);
            this.sommeTotal = nouvelleSomme;
            return { nouvelleSomme: nouvelleSomme };
        }
    };
    //Get Operation, retourne tout les operation effectuer sur le compte
    Budget.prototype.GetOperation = function () {
        return this.operation;
    };
    Budget.prototype.GetBudget = function () {
        var Budget = {
            id: this.id,
            sommeTotal: this.sommeTotal,
            operations: this.operation
        };
        return Budget;
    };
    Budget.prototype.EffectuerOperation = function (nsomme, depense, nom, cate) {
        if (nom === void 0) { nom = ""; }
        if (cate === void 0) { cate = ""; }
        var operation = {
            date: new Date(),
            nom: nom,
            somme: nsomme,
            estUneDepense: depense,
            categorrie: cate
        };
        this.operation.push(operation);
    };
    return Budget;
}());
exports.Budget = Budget;
