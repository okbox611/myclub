import {HomeIcon, ImagesIcon, MasterDetailIcon, SearchIcon} from '@sanity/icons'

const WOMEN_SECTION_ID = 'womenSection'

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title("Women's Section")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('womenSection')
            .documentId(WOMEN_SECTION_ID)
            .title("Women's Section")
        ),
      S.divider(),
      S.listItem()
        .title('Gallery')
        .icon(ImagesIcon)
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),
      S.listItem()
        .title('Fixtures')
        .icon(MasterDetailIcon)
        .schemaType('fixture')
        .child(S.documentTypeList('fixture').title('Fixtures')),
      S.listItem()
        .title('League Tables')
        .icon(SearchIcon)
        .schemaType('leagueTable')
        .child(S.documentTypeList('leagueTable').title('League Tables')),
    ])

export const singletonTypes = new Set(['womenSection'])
