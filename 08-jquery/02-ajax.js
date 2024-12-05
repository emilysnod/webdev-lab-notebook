$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";
  const addBookToDOM = (item) => {
    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(item.authors[0]))
        .append($("<p>").text(item.released.substring(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.forEach((item) => {
          console.log(item.name);
          addBookToDOM(item);
        });
      },

      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<div>").text("An error occured, please try again.")
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});

const app = document.querySelector("#books");
app.style.paddingLeft = 0;
const loading = document.querySelector("#loading");
