"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __importDefault(require("pg"));
var dotenv_1 = __importDefault(require("dotenv"));
var Pool = pg_1.default.Pool;
dotenv_1.default.config();
var configDatabase = {
    connectionString: process.env.DATABASE_URL
};
var db = new Pool(configDatabase);
exports.default = db;
