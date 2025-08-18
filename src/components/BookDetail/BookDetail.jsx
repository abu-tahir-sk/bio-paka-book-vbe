import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utilites/utilites";


const BookDetail = () => {
       const {bookId} = useParams();
       
       const data = useLoaderData();
       const id = parseInt(bookId);

       const book = data.find(book => book.bookId === id);
       
       const {bookId: currentBookId, image} = book;


       const handleRead = (id) => {
            addToStoredReadList(id)
       }

      return (
            <div>
                  <h2>deaakdldkf</h2>
                  <img className="w-36" src={image} alt="" />
                  <br />
                  <button onClick={() =>handleRead(bookId)} className="btn btn-outline mr-4 btn-accent" >Read</button>
                  <button className="btn  btn-accent">Read</button>
            </div>
      );
};

export default BookDetail;