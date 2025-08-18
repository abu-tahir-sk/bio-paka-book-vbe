import { useEffect, useState } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utilites/utilites";
import Book from "../Book/Book";

const LIsterBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  const handleSort = sortType => {
    setSort(sortType);

    if(sortType === 'No of pages'){
      const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages);setReadList(sortedReadList);
    }
    if(sortType === 'totalPages'){
      const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
  }

  return (
    <div>
      <h3 className="my-8 text-center bg-gray-200 py-3 text-3xl font-bold">Books</h3>
      <div className="flex items-center justify-center">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 bg-green-500 px-4 text-white">
          {
            sort ? `Sort by ${sort}` : 'Sort by'
          }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort('totalPages')}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort('No of pages')}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read List : {readList.length}</h2>
         <div className="">
           {readList.map((book) => (
           <div>
             <Book key={book.bookId} book={book}></Book>
           </div>
          ))}
         </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default LIsterBooks;
