export const metadata = [
    {
        title: "Youtube language comparison",
        research_question: "How do video results about substances change according to the language of the query?",
        description: "Video results on YouTube vary depending on the language of the query. This page displays the top 50 videos for each query across different languages, merged together. Videos can be filtered by language and ordered by view, time, and like count.",
        protocol: [
            "Search term on YouTube (with language and country filter activated)",
            "Collect the top 50 videos from the results using YouTube Data Tools",
            "Collect metadata (likes, views, and timestamps)"
        ]
    },
    {
        title: "Youtube network",
        research_question: "What topics are substances connected to through the recommendation algorithm?",
        description: "TBD",
        protocol: [
            "Search term on YouTube (with language and country filter activated)",
            "Collect recommended videos to the top 50 videos",
            "Identify and characterise clusters of similar videos in dataset"
        ]
    },
    {
        title: "Getty Images stereotypes",
        research_question: "Which visual tropes emerge in connection to different pollution routes, practices and substances?",
        description: "Getty Images provides insight into the visual repertoire associated with toxicities. This page shows images returned by GettyImages for each query. Images are grouped into clusters of stereotypes. Clusters of stereotypes are ordered from most to least common.",
        protocol: [
            "Search term on Getty Images",
            "Collect 1000 top photos",
            "Cluster images based on similarity",
            "Identify most recurrent visual stereotypes"

        ]
    },
    {
        title: "Getty Images circulation",
        research_question: "By which web pages are the most significant stock photos used?",
        description: "Getty Images provides insight into the visual repertoire associated with toxicities. This page shows images returned by GettyImages for each query. Images are grouped into clusters of stereotypes. Clusters of stereotypes are ordered from most to least common.",
        protocol: [
            "Identify most significant images",
            "Reverse search images on Google Image Search",
            "Collect web pages hosting the images",
            "Analyse top web pages"
        ]
    },
    {
        title: "TikTok topics",
        research_question: "Which topics are connected to different substances, practices and devices?",
        description: "On TikTok users share fears, practices, and information about toxicities. This page collects clusters of similar hashtags, resized based on their frequency of use. By clicking on a cluster, users can explore videos associated with those hashtags.",
        protocol: [
            "Query term on TikTok in the local language",
            "Collect a set of videos per each query",
            "Collect hashtags for each video",
            "Identify and characterise clusters of similar hashtags"

        ]
    },
]