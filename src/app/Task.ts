export interface Task {
    //optional id for init task
    id?: number; 
    text: string;
    day: string;
    reminder: boolean;
}