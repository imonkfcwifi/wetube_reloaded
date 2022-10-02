const faker = {
    username: "faker",
    loggedIn: false,
};

export const homepageVideos = (req, res) =>
    res.render("home", { pageTitle: "home", fakerUser: faker });
export const watch = (req, res) => res.render("watch", { pageTitle: "videos" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit Videos" });

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("delete!");
}
//  use ` => ` without ` { } ` you get an automatic `return`
export const search = (req, res) => res.send("search!");
export const upload = (req, res) => res.send("upload!");