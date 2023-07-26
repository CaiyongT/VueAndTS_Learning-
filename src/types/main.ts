
interface Course{
    readonly name:string,
    price:number,
    isOnline:boolean,
    students:string[],
    desc?:string
}
//包装起来，对外暴露
export type {Course}