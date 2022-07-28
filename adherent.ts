import { Budget } from "./budget";
export class Adherent {
    //données
    private id : string;
    private nom: string;
    private prenom : string;
    private budget : Budget;
    private role:string[] = [];
    private telephone : string;
    private email : string;


    //constructor 
    constructor(nom: string, prenom: string) {
        this.id = Date.now.toString()
        this.nom = nom;
        this.prenom = prenom
        this.budget = new Budget(900,[])
        this.role = []
        this.telephone = "telephone"
        this.email = "email"
    }
    

    create(){
        
    }

    read(){

    }
    
    update(){

    }

    delete(){

    }

    voirBudget(){
        return this.budget.GetBudget()
    }

    public ModifierArgent(somme:number,ajout:boolean, nom:string = "", cate:string = "Aucune"){
        this.budget.ModifierArgent(somme,ajout,nom,cate)
        
        localStorage.setItem("user",JSON.stringify(this))
    }
    
}