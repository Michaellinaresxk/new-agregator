import { Articles } from "../../../types/Articles";

export const ArticleCard = ({ imageUrl, title, author, date }: Articles) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow overflow-hidden">
      <img
        className="w-full md:w-1/3 object-cover h-48 md:h-auto"
        src={imageUrl}
        alt="Article"
      />
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-base">{author}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
