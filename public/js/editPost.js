const postId = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];
// here is to update post
const upadteTechBlogPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-upadate-tech-post").value.trim();
  const content = document
    .querySelector("#content-upadate-tech-post")
    .value.trim();
  if (title && content) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update blog post.");
    }
  }
};

// here is deleting the post
const deleteTechPostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("failed to delete tech blog post");
  }
};

const upadateTechPostButton = document.querySelector("#update-tech-post");
if (upadateTechPostButton) {
  upadateTechPostButton.addEventListener("click", upadteTechBlogPostHandler);
}

const deleteTechPostButton = document.querySelector("#delete-tech-post");
if (deleteTechPostButton) {
  deleteTechPostButton.addEventListener("click", deleteTechPostFormHandler);
}
