export class NoteModel{
    id : number;
    title : string;
    content : string;
    createdAt : Date;
    constructor(){
        this.id=1;
        this.title='';
        this.content='';
        this.createdAt=new Date();
    }
}