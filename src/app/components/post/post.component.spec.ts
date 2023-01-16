import {PostComponent} from "./post.component";
import {Post} from "../../models/Post";
import {first} from "rxjs";

describe('Post Component', () => {


  it('should raise and event when the delete post is clicked', () => {
    const comp = new PostComponent()
    const post: Post = { id: 1, body: 'Body 1', title: 'Title 1' }
    comp.post = post

    comp.delete.pipe(first()).subscribe((selectedPost: any) => {
      expect(selectedPost).toEqual(post)
    })

    comp.onDeletePost(new MouseEvent('click'))
  })
})
