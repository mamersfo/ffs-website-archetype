import { NextApiRequest, NextApiResponse } from "next";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    setTimeout(() => {
        return res.status(200).send(JSON.stringify(
            [
                {
                    "id": 1,
                    "title": "Canem trium annorum",
                    "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut placerat nunc, non posuere metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                    "body": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec euismod sed dolor non tincidunt. Phasellus pretium sapien vel libero tempor, quis ultricies neque viverra. Maecenas auctor eget enim at vehicula. Proin porta eleifend eros quis volutpat. Nulla euismod lobortis leo, a consequat massa vestibulum ut. Vivamus viverra porta venenatis. Suspendisse molestie rutrum gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam luctus ex quis interdum pellentesque. Pellentesque at arcu eros. Nam ex orci, egestas id magna in, tincidunt euismod leo."
                },
                {
                    "id": 2,
                    "title": "Canis latrat, fugit",
                    "intro": "Nunc convallis, nisl nec suscipit mollis, nulla nunc feugiat turpis, vel pulvinar metus ipsum a leo. Suspendisse rutrum cursus lectus at euismod. Pellentesque elementum ex eget fermentum rhoncus. ",
                    "body": "Nam et sapien sit amet nunc tincidunt convallis eu ultricies lacus. Vestibulum at nisl quis tellus varius pulvinar. Ut dignissim porttitor sollicitudin. Sed sit amet ultrices ligula, vitae finibus turpis. Mauris et magna vel nisl faucibus feugiat quis in diam. In in laoreet tellus. Phasellus eu rutrum tellus, vitae sodales neque. Duis libero risus, viverra tempor consectetur eget, blandit eget ligula. Praesent vitae magna nec magna sagittis volutpat sed ac orci. Nunc ultrices dapibus ex, ac cursus ipsum congue in. Vivamus ex ante, mollis id neque a, malesuada vestibulum ipsum."
                }
            ]
        ))
    }, 1000)
}