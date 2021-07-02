import { storage, Context } from "near-sdk-as"
import {Books,BookInformation,rateL} from "../models"

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
     new BookInformation(Books.length,Context.sender,
      isbn,name,description,numpage,author,datepublished,editions,Context.blockTimestamp)
   );
}

export function getBooks():Array<BookInformation>{
  const result = new Array<BookInformation>(Books.length);
  for (let i =0; i< Books.length; i++){
    result[i] = Books[i];
  }
  return result;
}

export function getBook(id :i32): BookInformation{
  assert(Books.length >0,"we haven't any Books")
  assert(id<= (Books.length-1),"we haven't that Book")
  return Books[id];
}

export function rate(id:i32 ,rateid:i32):string{

  let book = Books[id];
  let key = Context.sender+rateid.toString()
  assert(!book.rate.contains(key)," already voted")
  assert(rateid< Books.length,"we haven't that Book")
  book.rate.set(key,rateid)
  
  return "Book rated";
}

export function getRateBook(id :i32): Array<BookInformation>{
  assert(Books.length >0,"we haven't any Books")
  assert(id<= (Books.length-1),"we haven't that Book")
  const result = new Array<BookInformation>(Books.length);
  for(let i = 0; i < Books.length; i++) {
    result[i].rate = Books[id].rate;
  }
  return result;
}

 
 