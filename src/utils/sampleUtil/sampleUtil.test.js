import { add } from "./sampleUtil";
import {sub} from "./sampleUtil"
describe("add tests",()=>{
    it("should return sum of two number",()=>{
        expect(add(1,2)).toBe(3)

    })
    it("should not add strings",()=>{
        expect(add("1",2)).toBe(null)
    })
    // it("should only accept two numbers",()=>{
    //     expect(add(1,2)).toBe(add(1,2))
    // })
})
describe("add tests",()=>{
    it("should return sub of two number",()=>{
        expect(sub(1,2)).toBe(-1)
    })
})