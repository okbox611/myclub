export default {
  name: 'womenSection',
  title: "Women's Section",
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Womens XV',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      description: 'Main intro text shown at the top of the Women’s page.',
    },
    {
      name: 'notice',
      title: 'Notice',
      type: 'text',
      rows: 3,
      description: 'Optional highlighted message for trials, recruitment, or news.',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'leadershipImage',
      title: 'Leadership Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'captainName',
      title: 'Captain Name',
      type: 'string',
    },
    {
      name: 'viceCaptainName',
      title: 'Vice Captain Name',
      type: 'string',
    },
    {
      name: 'trainingDetails',
      title: 'Training Details',
      type: 'text',
      rows: 3,
      description: 'Simple training info that can be updated from a phone.',
    },
    {
      name: 'coaches',
      title: 'Coaches and Staff',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'role', title: 'Role', type: 'string'},
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
            },
          },
        },
      ],
    },
    {
      name: 'downloads',
      title: 'Downloads',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'file', title: 'File', type: 'file', validation: (Rule) => Rule.required()},
          ],
          preview: {
            select: {
              title: 'title',
              media: 'file',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
      media: 'heroImage',
      subtitle: 'captainName',
    },
    prepare({title, media, subtitle}) {
      return {
        title: title || "Women's Section",
        subtitle: subtitle ? `Captain: ${subtitle}` : 'Women’s team content',
        media,
      }
    },
  },
}
