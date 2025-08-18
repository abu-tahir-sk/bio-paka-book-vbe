import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utilites/utilites";


const BookDetail = () => {
       const {bookId} = useParams();
       
       const data = useLoaderData();
       const id = parseInt(bookId);

       const book = data.find(book => book.bookId === id);
       
       const {bookId: currentBookId, image,review,bookName,author} = book;


       const handleRead = (id) => {
            addToStoredReadList(id)
       }

      return (
            <div className="hero bg-base-200 min-h-screen rounded-md py-8">
  <div className="hero-content flex-col lg:flex-row gap-8">
    <img
      src={image}
      className=" rounded-lg shadow-2xl w-96" />
    <div className="">
      <h2 className="text-5xl font-bold pt-3">{bookName} </h2>
      <h6>{author}</h6>
      <p className="py-6">
            {review}
      </p>
      <div>
             <button onClick={() =>handleRead(bookId)} className="btn btn-outline mr-4 btn-accent" >Read</button>
                  <button className="btn  btn-accent">Read</button>
      </div>
    </div>
  </div>
</div>
      );
};

export default BookDetail;