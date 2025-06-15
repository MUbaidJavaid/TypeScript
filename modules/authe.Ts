export class Authe {
 login(name: string, password: string) {
   if(name && password) {
     return (`User ${name} logged in successfully.`);
   }else {
        return "Login failed. Please provide valid credentials.";
    }

 }

}