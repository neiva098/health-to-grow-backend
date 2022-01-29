import * as yup from 'yup';
const RandExp = require('randexp');

export class HttpError extends Error {
    statusCode: number;
    communicationId: string | undefined;

    constructor(statusCode: number, message: string, communicationId?: string) {
        super(message);

        this.statusCode = statusCode;
        this.communicationId = communicationId;
    }
}

export const generateRegexExample = (err: any) => {
    let example: typeof RandExp | undefined;

    if (err.type == 'matches') {
        example = new RandExp(err.params?.regex);
    }

    return example?.gen();
};

export class ValidateError extends HttpError {
    errors: { msg: string; param: string; example: string }[];

    constructor(error: yup.ValidationError) {
        super(400, 'Validation Error');

        this.errors = error.inner.map((err: any) => {
            return {
                msg: this.buildMessage(err),
                param: err.path!,
                example: generateRegexExample(err),
            };
        });
    }

    protected buildMessage(err?: any) {
        return err.errors.join(', ');
    }
}

export class BranchValidateError extends ValidateError {
    protected buildMessage() {
        return 'Dados da filial inválidos';
    }
}
