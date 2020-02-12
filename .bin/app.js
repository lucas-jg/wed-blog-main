"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
app.use(ctx => {
    ctx.body = 'Hello Koa';
});
app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});
//# sourceMappingURL=app.js.map