export class ResponseMessage<T> {
    code: number;
    data?: T;
    message?: string;
}