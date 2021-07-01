import { storage, Context } from "near-sdk-as"
import {Books,BookInfomation} from "../models"

const MAX_DESCRIPTION_LENGTH :i32 =255;
const MAX_BOOKPAGE_LENGTH :u64 =1200;
// return the string 'hello world'
export function helloWorld(): string {
    return 'hello world'
  }

/**
 * 
 * @param isbn 
 * @param name 
 * @param description 
 * @param numpage 
 * @param author 
 * @param datepublished 
 * @param editions 
 */
export function AddBook(
        isbn:string,
        name:string,
        description:string,
        numpage:u64,
        author:string,
        datepublished:string,
        editions:u64
):void{
  assert(isbn.length>0 ,"the ISBN is required")
  assert(name.length>0,"the name is required")
  assert(description.length>0  && description.length< MAX_DESCRIPTION_LENGTH,"the description is required or you exceed the character's number")
  assert(numpage>0 && numpage< MAX_BOOKPAGE_LENGTH,"the numpage is required or you exceed the page's number")
  assert(author.length>0 ,"the author is required")
  assert(datepublished.length>0 ,"the datepublished is required")
  assert(editions >0 ,"the editions is required")

   Books.push(
     new BookInfomation(Books.length,Context.sender,
      isbn,name,description,numpage,author,datepublished,editions,Context.blockTimestamp)
   );
}