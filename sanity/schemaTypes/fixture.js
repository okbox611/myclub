export default {
  name: "fixture",
  title: "Fixture",
  type: "document",
  fields: [
    {
      name: "team",
      title: "Team",
      type: "string",
    },
    {
      name: "opponent",
      title: "Opponent",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "home",
      title: "Home Game?",
      type: "boolean",
    },

    // ✅ ADD THESE (this fixes your error)
    {
      name: "ourScore",
      title: "Our Score",
      type: "number",
    },
    {
      name: "theirScore",
      title: "Their Score",
      type: "number",
    },
  ],
};