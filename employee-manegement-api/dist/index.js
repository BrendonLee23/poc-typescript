"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_routes_1 = __importDefault(require("./routes/index.routes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_routes_1.default);
dotenv_1.default.config();
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Servidor rodando na porta ".concat(port));
});
