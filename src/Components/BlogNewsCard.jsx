const BlogNewsCard = ({blog}) => {

    console.log(blog)

    const {title,date,categories,type,content,author,location,image} = blog;

    return (
        <div className="bg-green-600 rounded-2xl">
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-green-600">
                    <img role="presentation" className="object-cover w-full rounded h-44 " src={image} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs text-gray-50">{date}</span>
                        <p>{categories}</p>
                        <p>{content}</p>
                        <span className="text-gray-50">Type: {type}</span>
                        <h1 className="text-gray-50">Author: {author}</h1>
                        <h1 className="text-gray-50">Location: {location}</h1>
                    </div>
                </a>
        </div>
    );
};

export default BlogNewsCard;