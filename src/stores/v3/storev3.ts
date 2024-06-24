import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

import { TStoreV3 } from "../../types/v3/storeV3.type";
import { UserSliceV3 } from "./user-slice-v3";
import { CardSliceV3 } from "./card-slice-v3";

export const userStoreV3 = create<TStoreV3>()(
  immer((...a) => ({
    ...UserSliceV3(...a),
    ...CardSliceV3(...a),
  }))
);
