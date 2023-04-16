export class User {
   
    username: string;
    password: string;
   
    token?: string; // jeton d'authentification facultatif
  
    constructor(id: number, username: string, password: string) {
     
      this.username = username;
      this.password = password;
    
      
    }
  }