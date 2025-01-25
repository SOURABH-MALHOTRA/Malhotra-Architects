import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeleteBlog = () => {
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/login/blogData`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  const deletePost = (id) => {
    const token = localStorage.getItem("accessToken");
    fetch(`${import.meta.env.VITE_BACKEND_URL}/login/deletepost/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
          toast.success("Post deleted successfully");
        } else {
          console.error("Error deleting post:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  const toggleReadMore = (postId) => {
    const newExpandedPosts = new Set(expandedPosts);
    if (expandedPosts.has(postId)) {
      newExpandedPosts.delete(postId);
    } else {
      newExpandedPosts.add(postId);
    }
    setExpandedPosts(newExpandedPosts);
  };

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return `${content.slice(0, maxLength)}...`;
  };

  return (
    <div className="container mx-auto p-4 lg:p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <header className="text-center mb-6 space-y-4">
        <h1 className="text-5xl font-black text-blue-700 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          All Blog Posts
        </h1>
      </header>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[700px] flex flex-col"
            >
              {/* Media Section - Fixed Height */}
              <div className="p-4 pb-2">
                {post.Photo && (
                  <div className="h-[200px] w-full rounded-lg overflow-hidden mb-3">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}${post.Photo}`}
                      alt="Blog"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 mb-"
                    />
                  </div>
                )}

                {post.Video && (
                  <div className="h-[200px] w-full rounded-lg overflow-hidden bg-black">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      src={`${import.meta.env.VITE_BACKEND_URL}${post.Video}`}
                    />
                  </div>
                )}

                {!post.Photo && !post.Video && (
                  <div className="h-[200px] w-full rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No media available</span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-4 pt-0">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2 whitespace-normal break-words">
                  {post.Title}
                </h2>

                {/* Scrollable Content Area */}
                <div
                  className="flex-1 overflow-y-auto mb-4"
                  style={{ maxHeight: "calc(700px - 380px)" }}
                >
                  <p className="text-md text-gray-600 whitespace-pre-line break-words pr-2">
                    {expandedPosts.has(post._id)
                      ? post.Content
                      : truncateContent(post.Content)}
                  </p>
                  {post.Content.length > 150 && (
                    <button
                      onClick={() => toggleReadMore(post._id)}
                      className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
                    >
                      {expandedPosts.has(post._id) ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>

                {/* Delete Button - Fixed at Bottom */}
                <div className="w-full">
                  <button
                    onClick={() => deletePost(post._id)}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-md 
                      hover:from-red-600 hover:to-red-700 transform hover:-translate-y-0.5 transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteBlog;
