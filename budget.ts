type Operation = {
    date:Date,
    nom:string,
    somme:number,
    estUneDepense:boolean,
    categorrie:string
}

export class Budget{
    
    //Attribut
    private id:string
    private sommeTotal:number = 900
    private operation:Operation[]

    //Constructeur
    constructor(sommeTotal:number, operations:Operation[]){
        this.sommeTotal = sommeTotal
        this.operation = operations
        this.id = Date.now().toString()
        this.operation = []

    }


    //Methodes

    //ModifierArgent
    public ModifierArgent(somme:number,ajout:boolean, nom:string = "", cate:string = "Aucune"){

        if(ajout){
            const nouvelleSomme = this.sommeTotal + somme
            this.EffectuerOperation(somme,ajout,nom,cate)
            this.sommeTotal = nouvelleSomme
            
            return {nouvelleSomme:nouvelleSomme};
        }else{
            const nouvelleSomme = this.sommeTotal - somme
            this.EffectuerOperation(somme,ajout,nom,cate)
            this.sommeTotal = nouvelleSomme

            return {nouvelleSomme:nouvelleSomme};
        }
        
    }
    //Get Operation, retourne tout les operation effectuer sur le compte
    public GetOperation():Operation[]{
        return this.operation
    }

    public GetBudget(){
        const Budget = {
            id: this.id,
            sommeTotal: this.sommeTotal,
            operations:this.operation
        }
        return Budget

    }

    private EffectuerOperation(nsomme:number,depense:boolean, nom:string = "",cate:string = ""){
        const operation:Operation = {
            date:new Date(),
            nom:nom,
            somme:nsomme,
            estUneDepense:depense,
            categorrie:cate
        }
        this.operation.push(operation)
    }
}