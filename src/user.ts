export class User{
    que:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    ans:string;
    

    constructor(que:string,option1:string,option2:string,option3:string,option4:string,ans:string){
        this.que=que;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        this.ans=ans;
    }
}