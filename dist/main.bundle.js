/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/adherent.ts":
/*!*************************!*\
  !*** ./src/adherent.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Adherent = void 0;
var budget_1 = __webpack_require__(/*! ./budget */ "./src/budget.ts");
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
        document.getElementById("form-inline").addEventListener("click", function () {
            // Récupération des champs
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            if (email && password) {
                // Nouvelle ligne
                var movie = { email: email, password: password };
                // Ajout de la nouvelle ligne
                movies.push(movie);
                // Affichage du nouveau tableau
                return movies;
            }
        });
    };
    Adherent.prototype.read = function () {
    };
    Adherent.prototype.update = function () {
    };
    Adherent.prototype.delete = function () {
    };
    Adherent.prototype.voirBudget = function () {
        return this.budget.GetBudget();
    };
    Adherent.prototype.ModifierArgent = function (somme, ajout, nom, cate) {
        if (nom === void 0) { nom = ""; }
        if (cate === void 0) { cate = "Aucune"; }
        var retur = this.budget.ModifierArgent(somme, ajout, nom, cate);
        localStorage.setItem("user", JSON.stringify(this));
        return retur;
    };
    return Adherent;
}());
exports.Adherent = Adherent;


/***/ }),

/***/ "./src/budget.ts":
/*!***********************!*\
  !*** ./src/budget.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var adherent_1 = __webpack_require__(/*! ./adherent */ "./src/adherent.ts");
var test = new adherent_1.Adherent("Jean", "Michel");
console.log(test.ModifierArgent(40, true));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkaGVyZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9idWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsc0VBQWtDO0FBQ2xDO0lBV0ksY0FBYztJQUNkLGtCQUFZLEdBQVcsRUFBRSxNQUFjO1FBTi9CLFNBQUksR0FBWSxFQUFFLENBQUM7UUFPdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxD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O0lBRUwsQ0FBQztJQUVELG9FQUFvRTtJQUM3RCw2QkFBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVM7SUFDekIsQ0FBQztJQUVNLDBCQUFTLEdBQWhCO1FBQ0ksSUFBTSxNQUFNLEdBQUc7WUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFDLElBQUksQ0FBQyxTQUFTO1NBQzVCO1FBQ0QsT0FBTyxNQUFNO0lBQ2pCLENBQUM7SUFFTyxtQ0FBa0IsR0FBMUIsVUFBMkIsTUFBYSxFQUFDLE9BQWUsRUFBRSxHQUFlLEVBQUMsSUFBZ0I7UUFBaEMsOEJBQWU7UUFBQyxnQ0FBZ0I7UUFDdEYsSUFBTSxTQUFTLEdBQWE7WUFDeEIsSUFBSSxFQUFDLElBQUksSUFBSSxFQUFFO1lBQ2YsR0FBRyxFQUFDLEdBQUc7WUFDUCxLQUFLLEVBQUMsTUFBTTtZQUNaLGFBQWEsRUFBQyxPQUFPO1lBQ3JCLFVBQVUsRUFBQyxJQUFJO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQTlEWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDUm5CLDRFQUFzQztBQUV0QyxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLENBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQztBQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBCdWRnZXQgfSBmcm9tIFwiLi9idWRnZXRcIjtcbmV4cG9ydCBjbGFzcyBBZGhlcmVudCB7XG4gICAgLy9kb25uw6llc1xuICAgIHByaXZhdGUgaWQgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBub206IHN0cmluZztcbiAgICBwcml2YXRlIHByZW5vbSA6IHN0cmluZztcbiAgICBwcml2YXRlIGJ1ZGdldCA6IEJ1ZGdldDtcbiAgICBwcml2YXRlIHJvbGU6c3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIHRlbGVwaG9uZSA6IHN0cmluZztcbiAgICBwcml2YXRlIGVtYWlsIDogc3RyaW5nO1xuXG5cbiAgICAvL2NvbnN0cnVjdG9yIFxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nLCBwcmVub206IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3cudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcbiAgICAgICAgdGhpcy5wcmVub20gPSBwcmVub21cbiAgICAgICAgdGhpcy5idWRnZXQgPSBuZXcgQnVkZ2V0KDkwMCxbXSlcbiAgICAgICAgdGhpcy5yb2xlID0gW11cbiAgICAgICAgdGhpcy50ZWxlcGhvbmUgPSBcInRlbGVwaG9uZVwiXG4gICAgICAgIHRoaXMuZW1haWwgPSBcImVtYWlsXCJcbiAgICB9XG4gICAgXG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWlubGluZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZXMgY2hhbXBzXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZW1haWwgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgLy8gTm91dmVsbGUgbGlnbmVcbiAgICAgICAgICAgICAgY29uc3QgbW92aWUgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIEFqb3V0IGRlIGxhIG5vdXZlbGxlIGxpZ25lXG4gICAgICAgICAgICAgIG1vdmllcy5wdXNoKG1vdmllKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQWZmaWNoYWdlIGR1IG5vdXZlYXUgdGFibGVhdVxuICAgICAgICAgICAgICByZXR1cm4gbW92aWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWQoKXtcblxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoKXtcblxuICAgIH1cblxuICAgIGRlbGV0ZSgpe1xuXG4gICAgfVxuXG4gICAgdm9pckJ1ZGdldCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5idWRnZXQuR2V0QnVkZ2V0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgTW9kaWZpZXJBcmdlbnQoc29tbWU6bnVtYmVyLGFqb3V0OmJvb2xlYW4sIG5vbTpzdHJpbmcgPSBcIlwiLCBjYXRlOnN0cmluZyA9IFwiQXVjdW5lXCIpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmV0dXIgPSB0aGlzLmJ1ZGdldC5Nb2RpZmllckFyZ2VudChzb21tZSxham91dCxub20sY2F0ZSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsSlNPTi5zdHJpbmdpZnkodGhpcykpXG5cbiAgICAgICAgcmV0dXJuIHJldHVyXG4gICAgfVxuICAgIFxufSIsInR5cGUgT3BlcmF0aW9uID0ge1xuICAgIGRhdGU6RGF0ZSxcbiAgICBub206c3RyaW5nLFxuICAgIHNvbW1lOm51bWJlcixcbiAgICBlc3RVbmVEZXBlbnNlOmJvb2xlYW4sXG4gICAgY2F0ZWdvcnJpZTpzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEJ1ZGdldHtcbiAgICBcbiAgICAvL0F0dHJpYnV0XG4gICAgcHJpdmF0ZSBpZDpzdHJpbmdcbiAgICBwcml2YXRlIHNvbW1lVG90YWw6bnVtYmVyID0gOTAwXG4gICAgcHJpdmF0ZSBvcGVyYXRpb246T3BlcmF0aW9uW11cblxuICAgIC8vQ29uc3RydWN0ZXVyXG4gICAgY29uc3RydWN0b3Ioc29tbWVUb3RhbDpudW1iZXIsIG9wZXJhdGlvbnM6T3BlcmF0aW9uW10pe1xuICAgICAgICB0aGlzLnNvbW1lVG90YWwgPSBzb21tZVRvdGFsXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uc1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpXG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gW11cblxuICAgIH1cblxuXG4gICAgLy9NZXRob2Rlc1xuXG4gICAgLy9Nb2RpZmllckFyZ2VudFxuICAgIHB1YmxpYyBNb2RpZmllckFyZ2VudChzb21tZTpudW1iZXIsYWpvdXQ6Ym9vbGVhbiwgbm9tOnN0cmluZyA9IFwiXCIsIGNhdGU6c3RyaW5nID0gXCJBdWN1bmVcIil7XG5cbiAgICAgICAgaWYoYWpvdXQpe1xuICAgICAgICAgICAgY29uc3Qgbm91dmVsbGVTb21tZSA9IHRoaXMuc29tbWVUb3RhbCArIHNvbW1lXG4gICAgICAgICAgICB0aGlzLkVmZmVjdHVlck9wZXJhdGlvbihzb21tZSxham91dCxub20sY2F0ZSlcbiAgICAgICAgICAgIHRoaXMuc29tbWVUb3RhbCA9IG5vdXZlbGxlU29tbWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtub3V2ZWxsZVNvbW1lOm5vdXZlbGxlU29tbWV9O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IG5vdXZlbGxlU29tbWUgPSB0aGlzLnNvbW1lVG90YWwgLSBzb21tZVxuICAgICAgICAgICAgdGhpcy5FZmZlY3R1ZXJPcGVyYXRpb24oc29tbWUsYWpvdXQsbm9tLGNhdGUpXG4gICAgICAgICAgICB0aGlzLnNvbW1lVG90YWwgPSBub3V2ZWxsZVNvbW1lXG5cbiAgICAgICAgICAgIHJldHVybiB7bm91dmVsbGVTb21tZTpub3V2ZWxsZVNvbW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvL0dldCBPcGVyYXRpb24sIHJldG91cm5lIHRvdXQgbGVzIG9wZXJhdGlvbiBlZmZlY3R1ZXIgc3VyIGxlIGNvbXB0ZVxuICAgIHB1YmxpYyBHZXRPcGVyYXRpb24oKTpPcGVyYXRpb25bXXtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlcmF0aW9uXG4gICAgfVxuXG4gICAgcHVibGljIEdldEJ1ZGdldCgpe1xuICAgICAgICBjb25zdCBCdWRnZXQgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHNvbW1lVG90YWw6IHRoaXMuc29tbWVUb3RhbCxcbiAgICAgICAgICAgIG9wZXJhdGlvbnM6dGhpcy5vcGVyYXRpb25cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQnVkZ2V0XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBFZmZlY3R1ZXJPcGVyYXRpb24obnNvbW1lOm51bWJlcixkZXBlbnNlOmJvb2xlYW4sIG5vbTpzdHJpbmcgPSBcIlwiLGNhdGU6c3RyaW5nID0gXCJcIil7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbjpPcGVyYXRpb24gPSB7XG4gICAgICAgICAgICBkYXRlOm5ldyBEYXRlKCksXG4gICAgICAgICAgICBub206bm9tLFxuICAgICAgICAgICAgc29tbWU6bnNvbW1lLFxuICAgICAgICAgICAgZXN0VW5lRGVwZW5zZTpkZXBlbnNlLFxuICAgICAgICAgICAgY2F0ZWdvcnJpZTpjYXRlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVyYXRpb24ucHVzaChvcGVyYXRpb24pXG4gICAgfVxufSIsImltcG9ydCB7IEFkaGVyZW50IH0gZnJvbSBcIi4vYWRoZXJlbnRcIjtcblxubGV0IHRlc3QgPSBuZXcgQWRoZXJlbnQoXCJKZWFuXCIsXCJNaWNoZWxcIilcblxuY29uc29sZS5sb2codGVzdC5Nb2RpZmllckFyZ2VudCg0MCx0cnVlKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=