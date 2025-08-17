export interface task{
    id: number;
    title: string;
    description?: string;
    createdAt: Date;
    deadline: Date;
    status: string;
    urgency: string;
    completed: boolean;
}