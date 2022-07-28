class Adherent {
    //données
    private id : string;
    private nom: string;
    private prenom : string;
    private budget : budget;
    private role:string[] = [];
    private telephone : string;
    private email : string;


    //constructor 
    constructor(nom: string, prenom: string, budget: budget, role:string[], telephone: string, email:string) {
        this.id = Date.now.toString()
        this.nom = nom;
        this.prenom = prenom
        this.budget = budget
        this.role = role
        this.telephone = telephone
        this.email = email
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
        
    }
    
}