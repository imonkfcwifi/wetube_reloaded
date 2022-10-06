let videos = [
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
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2min ago",
        views: 59,
        id: 3,
    },
];


export const homepageVideos = (req, res) => { return res.render("home", { pageTitle: "Home", videos }) }


export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    // const id = req.params.id 와 같음.
    return res.render("watch", { pageTitle: `Watch ${video.title}`, video });
}
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit Videos" });

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("delete!");
}
//  use ` => ` without ` { } ` you get an automatic `return`
export const search = (req, res) => res.send("search!");
export const upload = (req, res) => res.send("upload!");