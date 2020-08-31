import React from "react";

const Post = () => {
  return (
    <div className="h-auto mt-2 mb-2  max-w-sm p-2 rounded-sm border cursor-pointer">
      <h1 className="font-semibold text-lg mb-4">
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </h1>
      <p className="mb-2">
        quia et suscipit\nsuscipit recusandae consequuntur expedita et
        cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </p>
      <div className="flex justify-end text-blue-500">
        <div className="flex items-center">
          <span>5</span>
          <i className="far fa-comment-alt ml-1"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;
