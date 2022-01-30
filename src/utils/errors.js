"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BranchValidateError = exports.ValidateError = exports.generateRegexExample = exports.HttpError = void 0;
var RandExp = require('randexp');
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(statusCode, message, communicationId) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        _this.communicationId = communicationId;
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
var generateRegexExample = function (err) {
    var _a;
    var example;
    if (err.type == 'matches') {
        example = new RandExp((_a = err.params) === null || _a === void 0 ? void 0 : _a.regex);
    }
    return example === null || example === void 0 ? void 0 : example.gen();
};
exports.generateRegexExample = generateRegexExample;
var ValidateError = /** @class */ (function (_super) {
    __extends(ValidateError, _super);
    function ValidateError(error) {
        var _this = _super.call(this, 400, 'Validation Error') || this;
        _this.errors = error.inner.map(function (err) {
            return {
                msg: _this.buildMessage(err),
                param: err.path,
                example: (0, exports.generateRegexExample)(err)
            };
        });
        return _this;
    }
    ValidateError.prototype.buildMessage = function (err) {
        return err.errors.join(', ');
    };
    return ValidateError;
}(HttpError));
exports.ValidateError = ValidateError;
var BranchValidateError = /** @class */ (function (_super) {
    __extends(BranchValidateError, _super);
    function BranchValidateError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchValidateError.prototype.buildMessage = function () {
        return 'Dados da filial inválidos';
    };
    return BranchValidateError;
}(ValidateError));
exports.BranchValidateError = BranchValidateError;
