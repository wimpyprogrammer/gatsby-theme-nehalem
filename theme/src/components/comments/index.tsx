import React, {FunctionComponent} from "react";
import {Post} from "../../utils/models";

export interface CommentsProps {
  post: Post;
}

/**
 * Placeholder which is attached under every post. Can be shadowed to
 * quickly integrate comments (like commento, Disqus, ...).
 */
const Comments: FunctionComponent<CommentsProps> = () => <></>;

export default Comments;
