import {Output} from "../recipe/Output.ts";
import {Input} from "../recipe/Input.ts";

export class Connection {
    public output: Output;
    public input: Input;

    constructor(output: Output, input: Input) {
        this.output = output;
        this.input = input;
    }
}