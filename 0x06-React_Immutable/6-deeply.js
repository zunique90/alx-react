import { Map } from "immutable";

export const mergeDeeplyElements = (page1, page2) =>
  Map(page1).mergeDeep(Map(page2));
