import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Blog = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null,
    video: null,
  });

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setNewPost({ ...newPost, [type]: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!newPost.title.trim() || !newPost.content.trim()) {
      toast.warning("Title and content are required");
      return;
    }
    const token = localStorage.getItem("accessToken"); 

    try {
      const formData = new FormData();
      formData.append("title", newPost.title);
      formData.append("content", newPost.content);
      if (newPost.image) formData.append("image", newPost.image);
      if (newPost.video) formData.append("video", newPost.video);
     
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/login/blog`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
          
        }
      );

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        toast.success("Post submitted successfully");
        setNewPost({ title: "", content: "", image: null, video: null });
      } else {
        toast.error("Failed to submit post");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error submitting post");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8">
      <header className="text-center mb-8 space-y-4">
        <h1 className="text-6xl font-black text-blue-700 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Blog
        </h1>
        <p className="text-gray-800 text-xl font-light">
          Share your thoughts, photos, and videos in style
        </p>
      </header>

      <form
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Create a New Post
        </h2>

        <div className="space-y-6">
          <div className="group">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Post Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              name="title"
              placeholder="Enter the title of your post"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
          </div>

          <div className="group">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Post Content
            </label>
            <textarea
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-32"
              name="content"
              placeholder="Write something about your post"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Upload Photo
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full text-gray-700 px-4 py-3 border-2 border-gray-200 rounded-xl cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                onChange={(e) => handleFileChange(e, "image")}
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Upload Video
              </label>
              <input
                type="file"
                name="video"
                accept="video/*"
                className="w-full text-gray-700 px-4 py-3 border-2 border-gray-200 rounded-xl cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                onChange={(e) => handleFileChange(e, "video")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Publish Post
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-8">
        <Link to="/delete/blog" className="text-white">
          <button className="w-64 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            All Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
