export class client {
    id?: string;
    nom?: string;
    email?: string;
    avatar?: string;
    description?: string;
    constructor(args: client = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.email = args.avatar;
    this.avatar = args.avatar;
    this.description = args.description;
    }
   }