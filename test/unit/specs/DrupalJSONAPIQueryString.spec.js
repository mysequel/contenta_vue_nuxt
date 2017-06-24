import {buildQueryString} from '../../../services/DrupalJSONAPIQueryString'

/**
 * An example unit test
 */
describe('JSONAPIQueryBuilder', () => {
  it('should return expected query string from queryParams Object', () => {
    const queryParams = {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      include: ['tags', 'image'],
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: "Vegetarian"
          }
        },
      },
      page: {
        offset: 0,
        limit: 4
      }
    }
    expect(buildQueryString(queryParams)).toEqual("sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&include=tags,image&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Vegetarian&page[offset]=0&page[limit]=4")
  })
})