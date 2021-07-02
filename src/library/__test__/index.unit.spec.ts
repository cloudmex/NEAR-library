import * as contract from "../assembly";
import { VMContext ,Context, context} from "near-sdk-as";

describe("add a new book tests",()=>{
  it("should run fine with this config", () => {
      expect(() => {
          contract.AddBook("123-4564-54-4","Test","Description test",123,"juan perez","marzo 2099",1);
      }).not.toThrow();
});
it("should fail if we give it a empity isbn", () => {
  expect(() => {
      contract.AddBook("","Test","Description test",123,"juan perez","marzo 2099",1);
  }).not.toThrow();
});
it("should fail if we give it a empity name", () => {
  expect(() => {
      contract.AddBook("123-4564-54-4","","Description test",123,"juan perez","marzo 2099",1);
  }).not.toThrow();
});
it("should fail if we give it a empity description", () => {
  expect(() => {
      contract.AddBook("123-4564-54-4","Test","",123,"juan perez","marzo 2099",1);
  }).not.toThrow();
});
it("should fail if we give it a empity numepage", () => {
  expect(() => {
      contract.AddBook("123-4564-54-4","Test","Description test",0,"juan perez","marzo 2099",1);
  }).not.toThrow();
});
})

describe("get a specific book by id",()=>{
  it("should run fine with this config", () => {
      expect(() => {
          contract.getBook(<i32>1);
      }).not.toThrow();
});
it("should fail if we give it a negative id", () => {
  expect(() => {
      contract.getBook(<i32>-1);
  }).not.toThrow();
});
it("should fail if we give a index out of bond",()=>{
  expect(()=>{contract.getBook(<i32>1600);}).toThrow()
});
})