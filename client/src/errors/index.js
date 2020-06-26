import User from "./user.error";
import Issue from "./issue.error";
import Comment from "./comment.error";

import * as config from "../config";

const method = { config: config };

export default {
  user: new User({ method: method }),
  issue: new Issue({ method: method }),
  comment: new Comment({ method: method })
};
