
// generic type

type Role = "admin" | "editor" | "user";

type User= {
    username: string,
    role: Role,

}


type DataStorage<T> ={
    storage: T[];
    add:  (data: T) => void;
}


const textStorage: DataStorage<string> ={
    storage: [],
    add(data){
        this.storage.push(data)
    }

}

const userStorage : DataStorage<User> ={
    storage: [],
    add(user){
        this.storage.push(user)
    }
}


// function

function merge<T, U>(a: T, b: U){
    return {
        ...a,
        ...b
    }
}



const user = merge<{name: string},{age: number}>({name: 'Mad'},{age: 25})


console.log(user)