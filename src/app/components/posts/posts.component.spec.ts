import {Post} from "../../models/Post";
import {PostsComponent} from "./posts.component";
import {of} from "rxjs";

describe('Posts Component', () => {
  let posts: Post[]
  let component: PostsComponent
  let mockPostService: any

  beforeEach(() => {
    posts = [
      {
        id: 1,
        body: 'Body 1',
        title: 'Title 1'
     },
      {
        id: 2,
        body: 'Body 2',
        title: 'Title 2'
      },
      {
        id: 3,
        body: 'Body 3',
        title: 'Title 3'
      }
    ]

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost'])
    component = new PostsComponent(mockPostService)
  })

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true))
      component.posts = posts
    })

    it('should delete the selected post from the posts', () => {
      component.delete(posts[1])
      expect(component.posts.length).toBe(2)
    })

    it('should delete the actual selected Post in Posts', () => {
      component.delete(posts[1])
      for (let post of component.posts) {
        expect(post).not.toEqual(posts[1])
      }
    })

    it('should call the delete method in Post Service only once', () => {
      component.delete(posts[1])
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
    })
  })
})
