import React from "react";
import { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});
  const maxLength = 150; // Adjust this value to control initial text length

  const fetchBlogData = async () => {
    try {
      const response = await fetch("http://localhost:7777/login/blogData");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log("Blog Data:", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const toggleContent = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderCard = (mediaUrl, type, blogData, index) => {
    const isExpanded = expandedCards[index];
    const content = blogData.Content;
    const shouldShowReadMore = content.length > maxLength;
    const displayContent =
      shouldShowReadMore && !isExpanded
        ? `${content.slice(0, maxLength)}...`
        : content;

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full h-full flex flex-col">
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <a
            href={`http://localhost:7777${mediaUrl}`}
            className="block w-full h-full"
          >
            {type === "image" ? (
              <img
                src={`http://localhost:7777${mediaUrl}`}
                alt="Blog Image"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <video
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                controls
                src={`http://localhost:7777${mediaUrl}`}
              />
            )}
          </a>
        </div>
        <div className="p-4 flex-1 flex flex-col bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-2 whitespace-normal break-words">
            {blogData.Title}
          </h2>

          <div className="text-md text-gray-600 flex-1 whitespace-pre-line break-words">
            <p>{displayContent}</p>
            {shouldShowReadMore && (
              <button
                onClick={() => toggleContent(index)}
                className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between"></div>
        </div>
      </nav>

      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our projects showcase innovative designs, seamless execution, and
            creative solutions for diverse client needs.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8">
        {data.length === 0 ? (
          <p className="text-gray-600 text-lg">No blog data available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {data.map((blogData, index) => (
              <React.Fragment key={index}>
                {blogData.Photo &&
                  renderCard(blogData.Photo, "image", blogData, index)}
                {blogData.Video &&
                  renderCard(blogData.Video, "video", blogData, index)}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
