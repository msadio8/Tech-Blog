const newTechPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document
    .querySelector("#title-new-tech-post")
    .ariaValueMax.trim();
  const content = document.querySelector("#content-new-tech-post").value.trim();

  if (title && content) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ title, content }), // this is the old way of sending data to server
      headers: { "Content-Type": "application/json" }, //this is for json format
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      document.location.replace("/dashboard");
    }
  }
};

const newTechPostForm = document.querySelector(".new-tech-post-form");
if (newTechPostForm) {
  newTechPostForm.addEventListener("submit", newTechPostFormHandler);
}
