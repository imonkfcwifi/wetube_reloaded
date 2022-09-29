export const homepageVideos = (req, res) => res.render("home");

export const watch = (req, res) => {

    return res.send(`video number #${req.params.id}`);
}
export const edit = (req, res) => {
    console.log(req.params);
    return res.send("Edit");
}

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("delete!");
}
//  use ` => ` without ` { } ` you get an automatic `return`
export const search = (req, res) => res.send("search!");
export const upload = (req, res) => res.send("upload!");