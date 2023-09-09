const deletePost = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post.");
  }
};

const deletePostHandler = (event) => {
  if (event.target.matches(".deletePost")) {
    const postId = event.target.getAttribute("data-postId");
    deletePost(postId);
  }
};
document.addEventListener("click", deletePostHandler);
