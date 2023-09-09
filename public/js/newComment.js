const newTechCommentFormHandler = async (event) => {
  event.preventDefault();

  const postId = parseInt(window.location.pathname.split("/").pop());

  const content = document
    .querySelector("#content-new-tech-comment")
    .value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ commentText: content, postId }), //this is the data we are sending to our backend
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log("Response status:", response.status);
      console.log("Response text:", await response.text());
      alert("Failed to create comment");
    }
  }
};

const newTechCommentForm = document.querySelector(".new-tech-comment-form");
if (newTechCommentFormHandler) {
  newTechCommentForm.addEventListener("submit", newTechCommentFormHandler);
}
