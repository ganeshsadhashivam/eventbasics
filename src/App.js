import logo from "./logo.svg";
import "./App.css";
const author = " thibaut meurisse";
const title =
  "Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things (Productivity Series Book 1)";
const img =
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/413tVFk--xS.jpg";

const firstBook = {
  author: "Gaur Gopal Das",
  title:
    "Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions Paperback – 1 January 2023",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: "Mark Manson",
  title:
    "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51mN3bY0JjL.jpg",
};

const thirdBook = {
  author: "Leil Lowndes",
  title:
    "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships ",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41VC-6wmHsL._SX331_BO1,204,203,200_.jpg",
};

//simple list
const books = [
  {
    id: 1,
    author: "Gaur Gopal Das",
    title:
      "Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions Paperback – 1 January 2023",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    author: "Mark Manson",
    title:
      "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51mN3bY0JjL.jpg",
  },
];

//simple list
const getBook = (id) => {
  const book = books.find((book) => book.id === id);
};
function App() {
  const someValue = "shakeBake";
  const displayValue = () => {
    console.log(someValue);
  };

  return (
    <div className="App">
      <section className="book">
        {/* <EventExamples /> */}
        {books.map((data) => {
          return <Book {...data} key={data.id} displayValue={displayValue} />;
        })}
        {/* <SomeComponent someValue={someValue} /> */}
      </section>
    </div>
  );
}

const Book = (props) => {
  const { img, title, author, id } = props;
  const getSingleBook = () => {
    getBook(id);
  };

  const displayTitle = (props) => {
    console.log(title);
  };
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      {/* <button onClick={displayTitle}>display title</button> */}
      <button onClick={getSingleBook}>display title</button>
    </div>
  );
};

// const handleFormInput = (e) => {
//   console.log(e);
//   console.log(e.target.name);
//   console.log(e.target.value);
//   console.log("handle form input");
// };

// const handleButtonClick = (e) => {
//   e.preventDefault();
//   console.log("handle button clicked");
// };

// const handleFormSubmission = (e) => {
//   e.preventDefault();
//   console.log("form submitted");
// };

// const EventExamples = () => {
//   return (
//     <section>
//       {/* onSubmit={handleFormSubmission} */}
//       <form>
//         <h2>Typical form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => console.loh(e.target.value)}
//           style={{ margin: "1rem 0" }}
//         />
//         <button type="submit">submit</button>
//         <div>
//           <button onClick={() => console.log("click me")} type="button">
//             click me
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

export default App;
