import "./index.css";
import { ArticleCard } from "./UI/components/shared/ArticleCard";

const articles = [
  {
    imageUrl: "path/to/image",
    title: "5 Hottest Fashion Trends in Autumn Winter 2018",
    author: "Lindsay Judge",
    date: "Dec 09 2018",
  },
  // ... more articles
];

function App() {
  return (
    <>
      <div className="px-5 py-2">
        <h1 className="text-2xl font-bold text-center mb-4 md:text-6xl lg:text-4xl">
          Saved Articles
        </h1>
        {articles.map((article, index) => (
          <ArticleCard id={""} key={index} {...article} />
        ))}
      </div>
    </>
  );
}

export default App;
