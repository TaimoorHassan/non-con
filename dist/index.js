"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
app.get("/", (x, y) => {
    y.send("Hello");
});
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log("Server Started @ http://localhost:${ port }");
});
//# sourceMappingURL=index.js.map