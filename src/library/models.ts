import { context ,PersistentMap, u128,PersistentVector } from "near-sdk-core";

type AccountId = string;
type Address = string;

/**
 * rate th books
 * 
 */
 export enum Rated {
    bad,
    regular,
    awesome,
    none,
  }

  @nearBindgen
  export class BookInformation{
    id:u64;
    owner: string;
     
    isbn:string;
    name:string;
    description:string;
    numpage:u64;
    author:string;
    datepublished:string;
    editions:u64;
    rate:PersistentMap<AccountId,Rated>;
    comments:PersistentMap<AccountId,string>;
    timestamp: u64;
    /**
     * @param isbn is the international standard book number
     * @param rate is the book's qualification
     * @param comments is the list of comments made by the users
     */
    constructor(
        id:u64,
        owner:string,
        isbn:string,
        name:string,
        description:string,
        numpage:u64,
        author:string,
        datepublished:string,
        editions:u64,
        timestamp: u64,
        ){
           this.id=id;
           this.owner=context.sender;
           this.isbn=isbn;
           this.name=name;
           this.description=description;
           this.numpage=numpage;
           this.author=author;
           this.rate= new PersistentMap<AccountId,Rated>("v");
           this.rate.set(owner,4);
           this.comments = new PersistentMap<AccountId,string>("v");
           this.comments.set(owner,"no comments yet")
           this.datepublished=datepublished;
           this.editions=editions; 
           this.timestamp=timestamp;
        }
        

  }
   
  export let Books = new PersistentVector<BookInformation>("Books")
  export let rateL = new PersistentMap<AccountId, u32>("rate")