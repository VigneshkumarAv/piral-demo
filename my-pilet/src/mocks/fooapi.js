module.exports = function (ctx, req, res) {
  if (req.url === "/api/foo") {
    return res({
      content: JSON.stringify([
        {
          id: "123",
          title: "This data is coming from backend",
        },
        {
          id: "253",
          title: "Added new data",
        },
        {
          id: "254",
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        },
      ]),
    });
  }
};
