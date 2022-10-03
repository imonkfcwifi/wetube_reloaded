export const homepageVideos = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating: 5,
            comments: 2,
            createdAt: "2min ago",
            views: 59,
            id: 1,
        },
        {
            title: "Second Video",
            rating: 5,
            comments: 2,
            createdAt: "2min ago",
            views: 59,
            id: 1,
        },
        {
            title: "Third Video",
            rating: 5,
            comments: 2,
            createdAt: "2min ago",
            views: 59,
            id: 1,
        },
    ];
    return res.render("home", { pageTitle: "home", videos });
}

export const watch = (req, res) => res.render("watch", { pageTitle: "videos" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit Videos" });

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("delete!");
}
//  use ` => ` without ` { } ` you get an automatic `return`
export const search = (req, res) => res.send("search!");
export const upload = (req, res) => res.send("upload!");