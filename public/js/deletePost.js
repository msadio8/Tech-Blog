const deletePost = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace();
  } else {
    alert("Failed to delete post.");
  }
};

const deletePostHandler = (event) => {
  if (event.target.matches(".deletePost")) {
    const post_id = event.target.getAttribute("data-post-id");
    deletePost(post_id);
  }
};
document.addEventListener("click", deletePostHandler);
