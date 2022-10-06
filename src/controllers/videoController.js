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
    return res.render("watch", { pageTitle: `Watch : ${video.title}`, video });
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
}



export const postEdit = (req, res) => { }
//  use ` => ` without ` { } ` you get an automatic `return`
