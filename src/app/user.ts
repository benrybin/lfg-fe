export class User {
 userName: String;
 pw: String;
 emailAddress:String;
 profilePic:String;
 banner:String;
 intro: String;
 timeZone: String;
 region: String;
 language: String;
 mic: Boolean;
 discordName: String;
 steamName: String;    
 constructor(userName:String,pw:String,emailAddress:String){
     this.userName=userName;
     this.pw=pw;
     this.emailAddress=emailAddress;

 }
}
