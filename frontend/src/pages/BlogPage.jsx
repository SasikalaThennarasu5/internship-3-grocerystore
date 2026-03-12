import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";

function BlogPage() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-10">Our News</h1>

      <div className="grid grid-cols-3 gap-6">

        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded">

            <img src={blog.image} className="rounded mb-3"/>

            <h3 className="font-semibold mb-2">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-600">
              {blog.content.slice(0,120)}...
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BlogPage;