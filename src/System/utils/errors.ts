import { ValidationError } from 'express-validator';

export class HttpError extends Error {
    statusCode: number;
    communicationId: string | undefined;

    constructor(statusCode: number, message: string, communicationId?: string) {
        super(message);

        this.statusCode = statusCode;
        this.communicationId = communicationId;
    }
}

export class ValidatorError extends HttpError {
    errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super(400, 'Bad Request');

        this.errors = errors;
    }
}
