export default {
  name: "leagueTable",
  title: "League Table",
  type: "document",
  fields: [
    {
      name: "tableFor",
      title: "Table For",
      type: "string",
      options: {
        list: [
          { title: "Mens 1st XV", value: "first" },
          { title: "Mens 2nd XV", value: "second" },
          { title: "Womens XV", value: "women" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "team",
      title: "Club / Team Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name: "played",
      title: "Played (P)",
      type: "number",
    },
    {
      name: "won",
      title: "Won (W)",
      type: "number",
    },
    {
      name: "lost",
      title: "Lost (L)",
      type: "number",
    },
    {
      name: "points",
      title: "Points (Pts)",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "team",
      subtitle: "tableFor",
    },
  },
};
