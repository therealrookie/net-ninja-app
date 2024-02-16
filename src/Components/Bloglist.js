// rafce

const Bloglist = ({ blogs, title, handleDelete }) => {
  //const blogs = props.blogs;
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
