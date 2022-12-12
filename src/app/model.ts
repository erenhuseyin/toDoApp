export class Model {
    user;
    items;

    constructor(){
        this.user = "John Wick's"
        this.items = [
            new ToDoItem("Kitap Oku", false),
            new ToDoItem("FrontEnd Çalışması", true),
            new ToDoItem("BackEnd Çalışması", false),
            new ToDoItem("Spor", false)
        ];

    }
}

export class ToDoItem{
    description;
    action;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}
