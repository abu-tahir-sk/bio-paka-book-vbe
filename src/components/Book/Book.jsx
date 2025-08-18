import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,image, bookName, author, category, rating, tags,totalPages } = book;
  return (
   <Link to={`/books/${bookId}`}>
    <div className="card shadow-xl p-6 h-full">
      <figure className="bg-base-200 py-8 rounded-md">
        <img className="w-32 h-32 skew-y-3" src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <div className="card-actions gap-8">
          {
          tags.map((tag,index) => 
            <button key={index} className="btn  bg-green-50  rounded-full p-4 text-green-500">
              {tag}
            </button>
          )
          }
        </div>
        <h3 className="text-3xl font-bold py-3">{bookName}</h3>
        <h2 className="text-xl pb-3">By: {author}</h2>
        <div className="border-t border-dashed"></div>
        <div className="card-actions justify-between py-3">
          <div className="text-xl font-bold">{category}</div>
          <div>{totalPages}</div>
          <div className="text-xl font-bold">
            {rating}
            <div className="rating pl-2">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-green-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;
