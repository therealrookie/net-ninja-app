// rafce
import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const handleClickAgain = (name, e) => {
  console.log(`hello ${name}`);
  console.log("Event: ", e.target);
};

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      />
    </div>
  );
};

export default Home;
