import { Controller, Get, ReturnType } from "@tsed/common";
import * as ExampleModel from '../models/Example';
import { Returns } from "@tsed/swagger";

@Controller('/example')
export class ExampleController {
    @Get('/')
    // This shows up in swagger
    @Returns(200, {type: ExampleModel.TestModel200})
    // This doesnt show up
    @Returns(400, {type: ExampleModel.TestModel400})
    // This doesnt show up
    @Returns(500, {type: ExampleModel.TestModel500})
    // Note that i've also tried @ReturnType and the same thing happens
    public async exampleControllerMethod() {
        return {
            exampleItem: 1,
        }
    }
}